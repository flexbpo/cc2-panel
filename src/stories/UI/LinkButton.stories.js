import {LinkButton} from "@/components/ui";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
	title: 'UI/Link Button',
	component: LinkButton,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
		layout: 'centered',
		design: {
			type: "figma",
			url: "https://www.figma.com/file/kyg3ZyVrYVRToMM8K1BiWf/CC_1.7?type=design&node-id=526-1942&mode=dev",
		},
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
	tags: ['autodocs'],
	// More on argTypes: https://storybook.js.org/docs/api/argtypes
	argTypes: {
		label: { control: {type: 'text'} },
	}
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
	args: {
		label: 'Link',
		href: 'https://flexbpo.com'
	},
};
