import React from "react";
import { Card } from "@nextui-org/react";
import { FaJava, FaReact, FaFigma } from 'react-icons/fa';
import { SiMicrosoftsqlserver, SiNestjs, SiCsharp, SiCplusplusbuilder, SiAdobeillustrator, SiAdobephotoshop } from 'react-icons/si';
import { DiPostgresql } from 'react-icons/di';
import { RiJavascriptFill, RiBootstrapFill } from 'react-icons/ri';
import { BiLogoTypescript, BiLogoHtml5, BiLogoTailwindCss, BiLogoMongodb } from 'react-icons/bi';

export enum SkillLevel {
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

const technologyIcons: Record<keyof typeof SkillLevel, JSX.Element> = {
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

export const SkillCard = ({ skill, level }: { skill: keyof typeof SkillLevel; level: number }) => {
    const cardSize = level * 50; // solo un ejemplo

    return (
        <Card style={{
            width: cardSize, 
            height: cardSize,
            display: 'flex',   
            alignItems: 'center', 
            justifyContent: 'center' 
        }}>
            {technologyIcons[skill]}
            {/* ... el resto del contenido ... */}
        </Card>
    );
};
