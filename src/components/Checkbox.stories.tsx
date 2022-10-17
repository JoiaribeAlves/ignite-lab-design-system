import { Meta, StoryObj } from "@storybook/react";

import { Checkbox, ICheckbox } from "./Checkbox";
import { Text } from "./Text";

export default {
	title: "Components/Checkbox",
	component: Checkbox,
	args: {},
	argTypes: {},
	decorators: [
		(Story) => (
			<div className="flex items-center gap-2">
				{Story()}
				<Text size="sm">Lembrar de mim por 30 dias</Text>
			</div>
		),
	],
} as Meta<ICheckbox>;

export const Default: StoryObj<ICheckbox> = {};
