import IconButton from "@/libs/components/IconButton";
import { SiteCard } from "@/libs/components/SiteCard";
import { websites } from "@/libs/data/websites";
import Image from "next/image";
import { HiDocument, HiEnvelope } from "react-icons/hi2";
import { SiGithub, SiLinkedin, SiSubstack } from "react-icons/si";

export default function Home() {
	const SocialLinks = () => {
		const socialAccounts = [
			{
				label: "GitHub",
				href: "https://github.com/mikikiv",
				icon: <SiGithub />,
			},
			{
				label: "LinkedIn",
				href: "https://www.linkedin.com/in/mikeyvillavicencio",
				icon: <SiLinkedin />,
			},
			{
				label: "Substack",
				href: "https://substack.com/@mikikiv",
				icon: <SiSubstack />,
			},
			{
				label: "Email",
				href: "mailto:mikey.v.dev@gmail.com",
				icon: <HiEnvelope />,
			},
			{
				label: "Resume",
				href: "/MikeyVillavicencio.pdf",
				icon: <HiDocument />,
			},
		];

		return socialAccounts.map(({ label, href, icon }) => {
			return (
				<IconButton
					key={label}
					label={label}
					href={href}
					icon={icon}
				/>
			);
		});
	};

	return (
		<div className="container mx-auto">
			<section className="my-auto mt-16 mb-4 flex h-96 text-text-950 sm:mb-0">
				<div className="mx-auto my-auto text-center">
					<Image
						alt="Mikey"
						width={150}
						height={150}
						className="mx-auto rounded-full"
						src="https://avatars.githubusercontent.com/u/46366395?v=4"
					/>
					<h1 className="text-xl">Mikey Villavicencio</h1>
					<p>This is a site about me</p>
					<div className="mt-16 flex flex-wrap justify-center gap-4 sm:gap-6">
						<SocialLinks />
					</div>
				</div>
			</section>
			<section>
				<h2 className=" text-xl">Site examples</h2>
				<div className="m-b-12 grid grid-cols-1 gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
					{websites
						.filter(site => site.enabled !== false)
						.sort((a, b) => a.id - b.id)
						.map(site => (
							<div
								className="flex h-full w-full items-center p-4"
								key={site.id}
							>
								<SiteCard
									id={site.id}
									name={site.name}
									links={site.links}
									desc={site.desc}
									lang={site.lang.map(io => io)}
									enabled={site.enabled}
									img={site.img}
								/>
							</div>
						))}
				</div>
			</section>
		</div>
	);
}
