/// <reference types="svelte" />
/// <reference types="vite/client" />

declare namespace svelteHTML {
  interface HTMLAttributes<T> {
    "on:enterViewport"?: (
      event: CustomEvent<string> & { target: EventTarget & T }
    ) => void;
    "on:exitViewport"?: (
      event: CustomEvent<string> & { target: EventTarget & T }
    ) => void;
  }
}
