import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { SkillCardGrid } from "@/components/SkillCardGrid";


export default function Home() {
	return (
		<div>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title()}>
						Me llamo&nbsp;
					</h1>
					<br />
					<h1 className={title({ color: "pink" })}>Carlos Cervantes</h1>
					<br />
					<h1 className={title()}>
						y será un placer trabajar contigo.
					</h1>
					<h2 className={subtitle({ class: "mt-4" })}>
						Programador FullStack Jr - Diseñador Gráfico Jr.
					</h2>
				</div>

				<div className="flex gap-3">
					<Link
						isExternal
						as={NextLink}
						href={siteConfig.links.linkedin}
						className={buttonStyles({ color: "danger", radius: "full", variant: "shadow" })}
					>
						Contacto
					</Link>
					<Link
						isExternal
						as={NextLink}
						className={buttonStyles({ variant: "bordered", radius: "full" })}
						href={siteConfig.links.github}
					>
						<GithubIcon size={20} />
						GitHub
					</Link>
				</div>
			</section>
			<SkillCardGrid />
		</div>
	);
}
