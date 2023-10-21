import React from "react";
import { Card } from "@nextui-org/react";
import { FaJava, FaReact, FaFigma } from 'react-icons/fa';
import { SiMicrosoftsqlserver, SiNestjs, SiCsharp, SiCplusplusbuilder, SiAdobeillustrator, SiAdobephotoshop } from 'react-icons/si';
import { DiPostgresql } from 'react-icons/di';
import { RiJavascriptFill, RiBootstrapFill } from 'react-icons/ri';
import { BiLogoTypescript, BiLogoHtml5, BiLogoTailwindCss, BiLogoMongodb } from 'react-icons/bi';

export enum SkillLevel {
    JavaScript = 3,
    TypeScript = 4,
    React = 5,
    Java = 3,
    CSharp = 3,
    CPlusPlus = 2,
    SQLServer = 3,
    PostgreSQL = 4,
    NestJS = 4,
    HTML = 4,
    Bootstrap = 4,
    TailwindCSS = 4,
    Figma = 4,
    AdobeIllustrator = 3,
    AdobePhotoshop = 3,
    MongoDB = 3,
}

const technologyIcons: Record<keyof typeof SkillLevel, JSX.Element> = {
    React: <FaReact />,
    JavaScript: <RiJavascriptFill />,
    TypeScript: <BiLogoTypescript />,
    Java: <FaJava />,
    CSharp: <SiCsharp />,
    CPlusPlus: <SiCplusplusbuilder />,
    SQLServer: <SiMicrosoftsqlserver />,
    PostgreSQL: <DiPostgresql />,
    NestJS: <SiNestjs />,
    HTML: <BiLogoHtml5 />,
    Bootstrap: <RiBootstrapFill />,
    TailwindCSS: <BiLogoTailwindCss />,
    Figma: <FaFigma />,
    AdobeIllustrator: <SiAdobeillustrator />,
    AdobePhotoshop: <SiAdobephotoshop />,
    MongoDB: <BiLogoMongodb />,
};

export const SkillCard = ({ skill, level }: { skill: keyof typeof SkillLevel; level: number }) => {
    const cardSize = level * 50; // solo un ejemplo

    return (
        <Card style={{ width: cardSize, height: cardSize }}>
            {technologyIcons[skill]}
            {/* ... el resto del contenido ... */}
        </Card>
    );
};
