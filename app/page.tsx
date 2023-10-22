import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { SkillCard, SkillSize } from "@/components/SkillCard";

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
						Programador fullstack y diseñador junior.
					</h2>
				</div>

				<div className="flex gap-3">
					<Link
						isExternal
						as={NextLink}
						href={siteConfig.links.docs}
						className={buttonStyles({ color: "primary", radius: "full", variant: "shadow" })}
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
			<div className="skills-grid">
				<SkillCard skill="React" level={SkillSize.React} />
				<SkillCard skill="JavaScript" level={SkillSize.JavaScript} />
				<SkillCard skill="TypeScript" level={SkillSize.TypeScript} />
				<SkillCard skill="Java" level={SkillSize.Java} />
				<SkillCard skill="CSharp" level={SkillSize.CSharp} />
				<SkillCard skill="CPlusPlus" level={SkillSize.CPlusPlus} />
				<SkillCard skill="SQLServer" level={SkillSize.SQLServer} />
				<SkillCard skill="PostgreSQL" level={SkillSize.PostgreSQL} />
				<SkillCard skill="NestJS" level={SkillSize.NestJS} />
				<SkillCard skill="HTML" level={SkillSize.HTML} />
				<SkillCard skill="Bootstrap" level={SkillSize.Bootstrap} />
				<SkillCard skill="TailwindCSS" level={SkillSize.TailwindCSS} />
				<SkillCard skill="Figma" level={SkillSize.Figma} />
				<SkillCard skill="AdobeIllustrator" level={SkillSize.AdobeIllustrator} />
				<SkillCard skill="AdobePhotoshop" level={SkillSize.AdobePhotoshop} />
				<SkillCard skill="MongoDB" level={SkillSize.MongoDB} />
			</div>			
		</div>
	);
}
