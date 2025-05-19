import { defineConfig } from "rolldown";

export default defineConfig({
    input: "src/main.js",
    output: {
        file: "dist/bundle.js"
    },
    moduleTypes: {
        'js': 'jsx' // This tells rolldown to process JS files as JSX. Required as we have jsx syntax in main.js
    }
})
