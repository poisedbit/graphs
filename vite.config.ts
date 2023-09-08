import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [sveltekit()],
	test: {
		coverage: {
			enabled: true,
			provider: "v8",
			reporter: ["html", "text"],
		},
		include: ["src/**/*.{test,spec}.{js,ts}"],
		reporters: "verbose",
	},
});
