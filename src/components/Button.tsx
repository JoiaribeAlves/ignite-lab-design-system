import { ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface IButton {
	children: ReactNode;
	asChild?: boolean;
}

export function Button({ children, asChild }: IButton) {
	const Tag = asChild ? Slot : "button";

	return (
		<Tag
			className={clsx(
				"py-4 px-3 bg-cyan-500 hover:bg-cyan-300 transition-colors rounded font-semibold text-black w-full text-sm focus:ring-2 ring-white"
			)}
		>
			{children}
		</Tag>
	);
}
