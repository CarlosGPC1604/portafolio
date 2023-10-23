import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { SkillCard, SkillSize } from "@/components/SkillCard";
import '../styles/skills-grid.css';


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
			<div className="skills-grid">
				<SkillCard 
					skill="React" 
					level={SkillSize.React} 
					style={{
						gridColumn: '1 / span 1', // Comienza en la columna 1 y ocupa 2 columna
						gridRow: '1 / span 1', // Comienza en la fila 1 y ocupa 2 filas
					}}
				/>
				<SkillCard
					skill="TailwindCSS"
					level={SkillSize.TailwindCSS}
					style={{
						gridColumn: '1 / span 1',
						gridRow: '2 / span 1',
					}}	
				/>
				<SkillCard
					skill="JavaScript"
					level={SkillSize.JavaScript}
					style={{
						gridColumn: '2 / span 2',
						gridRow: '1 / span 2',
					}}
				/>
				<SkillCard 
					skill="PostgreSQL"
					level={SkillSize.PostgreSQL}
					style={{
						gridColumn: '3 / span 1',
						gridRow: '3 / span 1',
					}}
				/>
				<SkillCard
					skill="MongoDB"
					level={SkillSize.MongoDB}
					style={{
						gridColumn: '5 / span 1',
						gridRow: '1 / span 1',
					}}
				/>
				<SkillCard
					skill="Java"
					level={SkillSize.Java}
					style={{
						gridColumn: '4 / span 3',
						gridRow: '2 / span 3',
					}}
				/>
				<SkillCard
					skill="TypeScript"
					level={SkillSize.TypeScript}
					style={{
						gridColumn: '4 / span 1',
						gridRow: '1 / span 1',
					}}	
				/>

				<SkillCard 
					skill="SQLServer"
					level={SkillSize.SQLServer}
					style={{
						gridColumn: '1 / span 2',
						gridRow: '3 / span 2',
					}}
				/>
				<SkillCard
					skill="NestJS"
					level={SkillSize.NestJS}
					style={{
						gridColumn: '6 / span 1',
						gridRow: '1 / span 1',
					}}
				/>
				<SkillCard
					skill="CPlusPlus"
					level={SkillSize.CPlusPlus}
					style={{
						gridColumn: '3 / span 1',
						gridRow: '4 / span 1',
					}}
				/>
				<SkillCard
					skill="CSharp"
					level={SkillSize.CSharp}
					style={{
						gridColumn: '2 / span 2',
						gridRow: '5 / span 2',
					}}
				/>
				<SkillCard
					skill="HTML"
					level={SkillSize.HTML}
					style={{
						gridColumn: '1 / span 1',
						gridRow: '5 / span 1',
					}}
				/>
				<SkillCard
					skill="Bootstrap"
					level={SkillSize.Bootstrap}
					style={{
						gridColumn: '1 / span 1',
						gridRow: '6 / span 1',
					}}
				/>
				<SkillCard
					skill="Figma"
					level={SkillSize.Bootstrap}
					style={{
						gridColumn: '4 / span 1',
						gridRow: '6 / span 1',
					}}
				/>
				<SkillCard
					skill="AdobeIllustrator"
					level={SkillSize.AdobeIllustrator}
					style={{
						gridColumn: '4 / span 1',
						gridRow: '5 / span 1',
					}}
				/>
				<SkillCard
					skill="AdobePhotoshop"
					level={SkillSize.AdobePhotoshop}
					style={{
						gridColumn: '5 / span 2',
						gridRow: '5 / span 2',
					}}
				/>
			</div>
		</div>
	);
}
