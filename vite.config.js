import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import git from "git-rev-sync";

process.env.VITE_GIT_COMMIT_DATE = git.date();
process.env.VITE_GIT_BRANCH_NAME = git.branch();
process.env.VITE_GIT_COMMIT_HASH = git.short();
process.env.VITE_GIT_LAST_COMMIT_MESSAGE = git.message();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
});
