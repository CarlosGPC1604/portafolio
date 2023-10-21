import React from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

// Enumeración de habilidades con niveles asociados
export enum SkillLevel {
    JavaScript = 3,
    TypeScript = 4,
    React = 5,
    // ... otros lenguajes/tecnologías que desees agregar
}

// Componente SkillCard
export const SkillCard = ({ skill, level }: { skill: keyof typeof SkillLevel; level: number }) => {
    // Aquí puedes determinar el tamaño de la tarjeta basado en el nivel
    const cardSize = level * 50; // solo un ejemplo, puedes ajustar como desees

    return (
        <Card style={{ width: cardSize, height: cardSize }}>
            {/* Aquí puedes renderizar el ícono basado en el skill */}
            <img src={`/icons/${skill}.png`} alt={`${skill} icon`} />
            {/* ... cualquier otro contenido que desees */}
        </Card>
    );
};
