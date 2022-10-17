import { ButtonHTMLAttributes, ReactNode } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	asChild?: boolean;
	className?: string;
}

export function Button({ children, asChild, className, ...props }: IButton) {
	const Tag = asChild ? Slot : "button";

	return (
		<Tag
			className={clsx(
				"py-3 px-4 bg-cyan-500 hover:bg-cyan-300 transition-colors rounded font-semibold text-black w-full text-sm focus:ring-2 ring-white",
				className
			)}
			{...props}
		>
			{children}
		</Tag>
	);
}
