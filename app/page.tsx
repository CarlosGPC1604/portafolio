import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { SkillCard, SkillSize } from "@/components/SkillCard";
import { arrangeCards } from '../scripts/gridLogic';
import { GRID_SIZE } from '../scripts/gridLogic';



export default function Home() {
	const skills = [
		{ id: 1, skill: "React", level: SkillSize.React },
		{ id: 2, skill: "JavaScript", level: SkillSize.JavaScript },
		{ id: 3, skill: "TypeScript", level: SkillSize.TypeScript },
		{ id: 4, skill: "Java", level: SkillSize.Java },
		{ id: 5, skill: "CSharp", level: SkillSize.CSharp },
		{ id: 6, skill: "CPlusPlus", level: SkillSize.CPlusPlus },
		{ id: 7, skill: "SQLServer", level: SkillSize.SQLServer },
		{ id: 8, skill: "PostgreSQL", level: SkillSize.PostgreSQL },
		{ id: 9, skill: "NestJS", level: SkillSize.NestJS },
		{ id: 10, skill: "HTML", level: SkillSize.HTML },
		{ id: 11, skill: "Bootstrap", level: SkillSize.Bootstrap },
		{ id: 12, skill: "TailwindCSS", level: SkillSize.TailwindCSS },
		{ id: 13, skill: "Figma", level: SkillSize.Figma },
		{ id: 14, skill: "AdobeIllustrator", level: SkillSize.AdobeIllustrator },
		{ id: 15, skill: "AdobePhotoshop", level: SkillSize.AdobePhotoshop },
		{ id: 16, skill: "MongoDB", level: SkillSize.MongoDB }
	];
	
	const grid = arrangeCards(skills.map(s => ({ id: s.id, size: s.level })));

	const gridSkillCardStyle = {
		display: 'grid',
		gridTemplateColumns: `repeat(${GRID_SIZE}, minmax(150px, 1fr))`,
		gap: '16px',
	};

	function findPosition(grid: number[][], id: number) {
		for (let y = 0; y < grid.length; y++) {
			for (let x = 0; x < grid[y].length; x++) {
				if (grid[y][x] === id) {
					return { x, y };
				}
			}
		}
		return { x: 0, y: 0 };
	}
	

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

			<div className="skills-grid" style={gridSkillCardStyle}>
				{skills.map((s, index) => {
					const position = findPosition(grid, s.id); // Necesitamos definir esta función
					return (
						<SkillCard 
							key={s.id} 
							skill={s.skill} 
							level={s.level} 
							style={{
								gridColumn: `span ${s.level}`,
								gridRow: `span ${s.level}`,
								gridColumnStart: position.x + 1,
								gridRowStart: position.y + 1,
							}}
						/>
					);
				})}
			</div>
		</div>
	);
}
