import {Icons} from "@/components/ui";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'UI/Icon',
	component: Icons,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		name: {
			control: 'select'
		},
		className: {
			control: 'text'
		}
	},
};

export const Abi = {
	args: {
		name: 'abi'
	},
};
export const Accept = {
	args: {
		name: 'accept'
	},
};
export const Air = {
	args: {
		name: 'air'
	},
};
export const Cancel = {
	args: {
		name: 'cancel'
	},
};
export const Close = {
	args: {
		name: 'close'
	},
};
export const Collapse = {
	args: {
		name: 'collapse'
	},
};
export const Dark = {
	args: {
		name: 'dark'
	},
};
export const Down = {
	args: {
		name: 'down'
	},
};
export const Edit = {
	args: {
		name: 'edit'
	},
};
export const House = {
	args: {
		name: 'house'
	},
};
export const Light = {
	args: {
		name: 'light'
	},
};
export const Notification = {
	args: {
		name: 'notification'
	},
};
export const Ocean = {
	args: {
		name: 'ocean'
	},
};
export const Organization = {
	args: {
		name: 'organization'
	},
};
export const Reports = {
	args: {
		name: 'reports'
	},
};
export const Search = {
	args: {
		name: 'search'
	},
};
export const Send = {
	args: {
		name: 'send'
	},
};
export const Support = {
	args: {
		name: 'support'
	},
};
export const Truck = {
	args: {
		name: 'truck'
	},
};
