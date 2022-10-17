import { InputHTMLAttributes, ReactNode } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface ITextInputRoot {
	children: ReactNode;
}

export interface ITextInputIcon {
	children: ReactNode;
}

export interface ITextInputInput
	extends InputHTMLAttributes<HTMLInputElement> {}

function TextInputRoot({ children }: ITextInputRoot) {
	return (
		<div
			className={clsx(
				"flex items-center gap-3 py-4 px-3 h-12 rounded bg-gray-800 focus-within:ring-2 ring-cyan-300"
			)}
		>
			{children}
		</div>
	);
}

function TextInputIcon({ children }: ITextInputIcon) {
	return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}

function TextInputInput(props: ITextInputInput) {
	return (
		<input
			className="w-full outline-none bg-transparent text-gray-100 text-xs placeholder:text-gray-400"
			{...props}
		/>
	);
}

export const TextInput = {
	Root: TextInputRoot,
	Icon: TextInputIcon,
	Input: TextInputInput,
};
