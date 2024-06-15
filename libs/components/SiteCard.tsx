import Image from "next/image";
import type { Website } from "../data/websites";
import LanguageTag from "./LanguageTag";

export const SiteCard = ({
	id,
	name,
	links,
	desc,
	lang,
	enabled,
	img,
	...rest
}: Website) => {
	return (
		<article
			className="justify-space-between h-full rounded-lg border-[0.1px] border-secondary-300 border-solid bg-gradient-to-br from-primary-100 to-accent-50 text-primary-950 shadow-lg duration-700 ease-in hover:border-accent-600"
			{...rest}
		>
			{img && (
				<Image
					className="rounded-lg"
					alt={name}
					src={img}
					width={800}
					height={800}
				/>
			)}
			<h3 className="my-4 text-center font-semibold text-secondary-900 text-xl">
				{name}
			</h3>
			<p className="mx-5 mb-4 text-pretty">{desc}</p>
			<div className="m-2 mx-10 flex flex-wrap gap-1 rounded-lg">
				{links
					?.filter(link => link.disabled !== true)
					.map((link, index) => {
						return (
							<a
								href={link.href}
								key={link.label}
								className={index === 0 ? "w-full" : "w-1/2 flex-1"}
								target="_blank"
								rel="noreferrer"
							>
								<button
									type="button"
									className="w-full content-center text-pretty rounded-lg border-accent-300 border-x-[1px] border-solid bg-primary-100 py-2 text-center transition ease-in-out disabled:bg-primary-50 hover:bg-secondary-300 disabled:opacity-75"
								>
									{link.label}
								</button>
							</a>
						);
					})}
			</div>

			<div className="m-4 flex flex-wrap gap-2">
				{lang?.sort().map(language => {
					return (
						<LanguageTag
							key={language}
							language={language}
						/>
					);
				})}
			</div>
		</article>
	);
};
