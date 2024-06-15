import type { ReactNode } from "react";

const IconButton = ({
	label,
	href,
	icon,
	inverted,
}: {
	label: string;
	href: string;
	icon: ReactNode;
	inverted?: boolean;
}) => {
	return (
		<a
			className={
				"flex transform rounded-full bg-secondary-200 py-1 text-lg shadow-md transition duration-300 ease-in-out hover:scale-105 hover:bg-secondary-300 hover:shadow-xl"
			}
			key={label}
			href={href}
		>
			{icon && (
				<span className="my-auto ml-1 rounded-full bg-secondary-200 p-2 align-middle ">
					{icon}
				</span>
			)}
			<span className="m-auto mx-1 pr-3 text-sm">{label}</span>
		</a>
	);
};

export default IconButton;
