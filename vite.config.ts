import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
	plugins: [sveltekit(), wasm(), topLevelAwait()],
	test: {
		coverage: {
			enabled: true,
			reportOnFailure: true,
			provider: "v8",
			reporter: ["html", "text"],
			reportsDirectory: "./src/test/coverage",
			exclude: ["src/lib/wasm/pkg", "src/test/test_utils.ts"],
		},
		include: ["src/**/*.{test,spec}.{js,ts}"],
		reporters: ["verbose", "html"],
		outputFile: {
			html: "./src/test/reporter/index.html",
		},
	},
});
