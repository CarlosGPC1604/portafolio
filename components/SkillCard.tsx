import React from "react";
import { Card } from "@nextui-org/react";
import { FaJava, FaReact, FaFigma } from 'react-icons/fa';
import { SiMicrosoftsqlserver, SiNestjs, SiCsharp, SiCplusplusbuilder, SiAdobeillustrator, SiAdobephotoshop } from 'react-icons/si';
import { DiPostgresql } from 'react-icons/di';
import { RiJavascriptFill, RiBootstrapFill } from 'react-icons/ri';
import { BiLogoTypescript, BiLogoHtml5, BiLogoTailwindCss, BiLogoMongodb } from 'react-icons/bi';

export enum SkillSize {
    JavaScript = 2,
    TypeScript = 1,
    React = 2,
    Java = 3,
    CSharp = 3,
    CPlusPlus = 2,
    SQLServer = 3,
    PostgreSQL = 1,
    NestJS = 1,
    HTML = 3,
    Bootstrap = 1,
    TailwindCSS = 1,
    Figma = 1,
    AdobeIllustrator = 2,
    AdobePhotoshop = 2,
    MongoDB = 1,
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

type SkillCardProps = {
    skill: keyof typeof SkillSize;
    level: SkillSize;
    style?: React.CSSProperties;
};

export function SkillCard({ skill, level, style }: SkillCardProps) {
    const icon = technologyIcons[skill];
    return (
        <Card className="skill-card" style={style}>
            {icon}
            {/* ... otros elementos ... */}
        </Card>
    );
}


