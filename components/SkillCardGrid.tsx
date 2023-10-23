import { SkillCard, SkillSize } from "@/components/SkillCard";
import '../styles/skills-grid.css';

export function SkillCardGrid() {
    return (
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
    );
}