import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		watch: false,
		include: ['test/**/*.test.ts'],
		coverage: {
			all: true,
			src: ['src/**/*.ts'],
			100: true,
			provider: 'c8',
			exclude: ['test']
		}
	}
})
