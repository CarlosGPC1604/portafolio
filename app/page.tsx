import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { SkillCard, SkillLevel } from "@/components/SkillCard";
import { arrangeCards } from '../scripts/gridLogic';

export default function Home() {
	const skills = [
		{ id: 1, skill: "React", level: SkillLevel.React },
		{ id: 2, skill: "JavaScript", level: SkillLevel.JavaScript },
		{ id: 3, skill: "TypeScript", level: SkillLevel.TypeScript },
		{ id: 4, skill: "Java", level: SkillLevel.Java },
		{ id: 5, skill: "CSharp", level: SkillLevel.CSharp },
		{ id: 6, skill: "CPlusPlus", level: SkillLevel.CPlusPlus },
		{ id: 7, skill: "SQLServer", level: SkillLevel.SQLServer },
		{ id: 8, skill: "PostgreSQL", level: SkillLevel.PostgreSQL },
		{ id: 9, skill: "NestJS", level: SkillLevel.NestJS },
		{ id: 10, skill: "HTML", level: SkillLevel.HTML },
		{ id: 11, skill: "Bootstrap", level: SkillLevel.Bootstrap },
		{ id: 12, skill: "TailwindCSS", level: SkillLevel.TailwindCSS },
		{ id: 13, skill: "Figma", level: SkillLevel.Figma },
		{ id: 14, skill: "AdobeIllustrator", level: SkillLevel.AdobeIllustrator },
		{ id: 15, skill: "AdobePhotoshop", level: SkillLevel.AdobePhotoshop },
		{ id: 16, skill: "MongoDB", level: SkillLevel.MongoDB }
	];
	
	const grid = arrangeCards(skills.map(s => ({ id: s.id, size: s.level })));

	const gridSkillCardStyle = {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
		gap: '16px',
	};

	return (
		<div>
			<section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
				<div className="inline-block max-w-lg text-center justify-center">
					<h1 className={title()}>
						hola &nbsp;</h1>
					<h1 className={title({ color: "violet" })}>beautiful</h1>
					<br />
					<h1 className={title()}>
						websites regardless of your design experience.
					</h1>
					<h2 className={subtitle({ class: "mt-4" })}>
						Beautiful, fast and modern React UI library.
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

				<div className="mt-8">
					<Snippet hideSymbol hideCopyButton variant="flat">
						<span>
							Get started by editing <Code color="primary">app/page.tsx</Code>
						</span>
					</Snippet>
				</div>
			</section>

			<div className="skills-grid" style={gridSkillCardStyle}>
				{skills.map(s => (
					<SkillCard key={s.id} skill={s.skill} level={s.level} />
				))}
			</div>
		</div>
	);
}
