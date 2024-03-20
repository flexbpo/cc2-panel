import path from "path";

/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
	stories: [
		"../src/**/*.mdx",
		"../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
	],
	addons: [
		"@storybook/addon-links",
		"@storybook/addon-essentials",
		"@storybook/addon-onboarding",
		"@storybook/addon-interactions",
		"@storybook/addon-designs",
		'storybook-addon-themes',
		'storybook-dark-mode',
		{
			name: "@storybook/addon-styling",
			options: {
				// Check out https://github.com/storybookjs/addon-styling/blob/main/docs/api.md
				// For more details on this addon's options.
				postCss: {
					implementation: require.resolve("postcss")
				}
			}
		}
	],
	framework: {
		name: "@storybook/nextjs",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
	staticDirs: [
	"../public", {
		from: "../public/fonts",
		to: "/fonts"
	}],
	webpackFinal: async config => {
		config.resolve.alias = {
			...config.resolve.alias,
			'@': path.resolve(__dirname, '../src/')
		}

		return config;
	}
};
export default config;
