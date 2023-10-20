import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
    plugins: [sveltekit()],
    test: {
        coverage: {
            enabled: true,
            reportOnFailure: true,
            provider: "v8",
            reporter: ["html", "text"],
            reportsDirectory: "./src/test/coverage",
            include: ["src/lib"],
            exclude: ["src/lib/wasm/pkg", "src/test"],
        },
        include: ["src/**/*.{test,spec}.{js,ts}"],
        reporters: ["verbose", "html"],
        outputFile: {
            html: "./src/test/reporter/index.html",
        },
    },
});
