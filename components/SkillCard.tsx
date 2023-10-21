import React from "react";
import { Card } from "@nextui-org/react";
import { FaJava, FaReact, FaFigma } from 'react-icons/fa';
import { SiMicrosoftsqlserver, SiNestjs, SiCsharp, SiCplusplusbuilder, SiAdobeillustrator, SiAdobephotoshop } from 'react-icons/si';
import { DiPostgresql } from 'react-icons/di';
import { RiJavascriptFill, RiBootstrapFill } from 'react-icons/ri';
import { BiLogoTypescript, BiLogoHtml5, BiLogoTailwindCss, BiLogoMongodb } from 'react-icons/bi';

export enum SkillSize {
    JavaScript = 3,
    TypeScript = 1,
    React = 1,
    Java = 3,
    CSharp = 3,
    CPlusPlus = 2,
    SQLServer = 3,
    PostgreSQL = 1,
    NestJS = 1,
    HTML = 1,
    Bootstrap = 1,
    TailwindCSS = 1,
    Figma = 1,
    AdobeIllustrator = 3,
    AdobePhotoshop = 3,
    MongoDB = 3,
}

const technologyIcons: Record<keyof typeof SkillSize, JSX.Element> = {
    React: <FaReact size="70%"/>,
    JavaScript: <RiJavascriptFill size="70%"/>,
    TypeScript: <BiLogoTypescript size="70%"/>,
    Java: <FaJava size="70%"/>,
    CSharp: <SiCsharp size="70%"/>,
    CPlusPlus: <SiCplusplusbuilder size="70%"/>,
    SQLServer: <SiMicrosoftsqlserver size="70%"/>,
    PostgreSQL: <DiPostgresql size="70%"/>,
    NestJS: <SiNestjs size="70%"/>,
    HTML: <BiLogoHtml5 size="70%"/>,
    Bootstrap: <RiBootstrapFill size="70%"/>,
    TailwindCSS: <BiLogoTailwindCss size="70%"/>,
    Figma: <FaFigma size="70%"/>,
    AdobeIllustrator: <SiAdobeillustrator size="70%"/>,
    AdobePhotoshop: <SiAdobephotoshop size="70%"/>,
    MongoDB: <BiLogoMongodb size="70%"/>,
};

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


export function SkillCard({ skill, level, ...props }: { skill: keyof typeof technologyIcons, level: number } & React.HTMLProps<HTMLDivElement>) {
    const icon = technologyIcons[skill]; // Usamos la clave del enum para obtener el ícono

    return (
        <Card {...props}>
            {icon}
            {/* ... otros elementos ... */}
        </Card>
    );
}
