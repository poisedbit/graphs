import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		coverage: {
			enabled: true,
			provider: "c8",
			reporter: ["html", "text"],
			reportsDirectory: "./src/tests/coverage",
		},
		include: ["src/**/*.{test,spec}.{js,ts}"],
		reporters: "verbose",
	},
});
