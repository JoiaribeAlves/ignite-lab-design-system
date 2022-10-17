import { Meta, StoryObj } from "@storybook/react";
import { Envelope } from "phosphor-react";

import { TextInput, ITextInputInput, ITextInputRoot } from "./TextInput";

export default {
	title: "Components/TextInput",
	component: TextInput.Root,
	args: {
		children: [
			<TextInput.Icon>
				<Envelope />
			</TextInput.Icon>,
			<TextInput.Input placeholder="Lorem Ipsum" />,
		],
	},
	argTypes: {
		children: {
			table: {
				disable: true,
			},
		},
	},
} as Meta<ITextInputRoot>;

export const Default: StoryObj<ITextInputRoot> = {};

export const WithoutIcon: StoryObj<ITextInputRoot> = {
	args: {
		children: [<TextInput.Input placeholder="Lorem Ipsum" />],
	},
};
