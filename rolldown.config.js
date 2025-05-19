import { defineConfig } from "rolldown";

export default defineConfig({
    input: "src/main.js",
    output: {
        file: "dist/bundle.js"
    },
    moduleTypes: {
        'js': 'jsx' // This is a workaround for the issue with JSX not being recognized in .js files
    }
})