<script lang="ts">
    import { onMount, onDestroy } from "svelte";
    import neuralGsls from "../assets/neural.js";

    let canvas: HTMLCanvasElement;
    let gl: WebGLRenderingContext | null;
    let program: WebGLProgram | null;
    let animationFrameId: number;
    let startTime: number;

    const vertexShaderSource = `
        attribute vec2 position;
        void main() {
            gl_Position = vec4(position, 0.0, 1.0);
        }
    `;

    // ShaderToy wrapper
    const fragmentShaderWrapper = `
        precision mediump float;
        uniform vec3 iResolution;
        uniform float iTime;
        uniform vec4 iMouse;

        ${neuralGsls}

        void main() {
            mainImage(gl_FragColor, gl_FragCoord.xy);
        }
    `;

    function createShader(
        gl: WebGLRenderingContext,
        type: number,
        source: string,
    ) {
        const shader = gl.createShader(type);
        if (!shader) return null;
        gl.shaderSource(shader, source);
        gl.compileShader(shader);
        if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
            console.error("Shader compile error:", gl.getShaderInfoLog(shader));
            gl.deleteShader(shader);
            return null;
        }
        return shader;
    }

    function createProgram(
        gl: WebGLRenderingContext,
        vertexShader: WebGLShader,
        fragmentShader: WebGLShader,
    ) {
        const program = gl.createProgram();
        if (!program) return null;
        gl.attachShader(program, vertexShader);
        gl.attachShader(program, fragmentShader);
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            console.error("Program link error:", gl.getProgramInfoLog(program));
            gl.deleteProgram(program);
            return null;
        }
        return program;
    }

    function resize() {
        if (!canvas || !gl) return;
        const displayWidth = canvas.clientWidth;
        const displayHeight = canvas.clientHeight;

        if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
            canvas.width = displayWidth;
            canvas.height = displayHeight;
            gl.viewport(0, 0, canvas.width, canvas.height);
        }
    }

    let mouseX = 0;
    let mouseY = 0;

    function handleMouseMove(event: MouseEvent) {
        const rect = canvas.getBoundingClientRect();
        mouseX = event.clientX - rect.left;
        mouseY = canvas.height - (event.clientY - rect.top); // Flip Y for GLSL
    }

    function render(time: number) {
        if (!gl || !program) return;

        resize();

        const currentTime = (time - startTime) * 0.0001;

        gl.useProgram(program);

        const resolutionLocation = gl.getUniformLocation(
            program,
            "iResolution",
        );
        const timeLocation = gl.getUniformLocation(program, "iTime");
        const mouseLocation = gl.getUniformLocation(program, "iMouse");

        gl.uniform3f(resolutionLocation, canvas.width, canvas.height, 1.0);
        gl.uniform1f(timeLocation, currentTime);
        gl.uniform4f(mouseLocation, mouseX, mouseY, 0.0, 0.0); // Click state ignored for now

        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

        animationFrameId = requestAnimationFrame(render);
    }

    onMount(() => {
        gl = canvas.getContext("webgl");
        if (!gl) {
            console.error("WebGL not supported");
            return;
        }

        const vertexShader = createShader(
            gl,
            gl.VERTEX_SHADER,
            vertexShaderSource,
        );
        const fragmentShader = createShader(
            gl,
            gl.FRAGMENT_SHADER,
            fragmentShaderWrapper,
        );

        if (!vertexShader || !fragmentShader) return;

        program = createProgram(gl, vertexShader, fragmentShader);
        if (!program) return;

        // Set up a full-screen quad
        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        const positions = [-1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0];
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array(positions),
            gl.STATIC_DRAW,
        );

        const positionAttributeLocation = gl.getAttribLocation(
            program,
            "position",
        );
        gl.enableVertexAttribArray(positionAttributeLocation);
        gl.vertexAttribPointer(
            positionAttributeLocation,
            2,
            gl.FLOAT,
            false,
            0,
            0,
        );

        startTime = performance.now();
        animationFrameId = requestAnimationFrame(render);

        window.addEventListener("resize", resize);
    });

    onDestroy(() => {
        if (animationFrameId) {
            cancelAnimationFrame(animationFrameId);
        }
        window.removeEventListener("resize", resize);
    });
</script>

<canvas bind:this={canvas} class="w-full h-full block"></canvas>
