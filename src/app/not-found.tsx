'use client';
import React, { useEffect, useRef } from 'react';
import { Heading } from '@radix-ui/themes';

declare global {
    interface Window {
        VANTA: any;
    }
}

export default function Custom404() {
    const vantaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const scriptThree = document.createElement('script');
        scriptThree.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
        scriptThree.async = true;

        const scriptVanta = document.createElement('script');
        scriptVanta.src = 'https://cdn.jsdelivr.net/npm/vanta/dist/vanta.cells.min.js';
        scriptVanta.async = true;

        scriptThree.onload = () => {
            scriptVanta.onload = () => {
                if (typeof window !== "undefined" && window.VANTA && vantaRef.current) {
                    window.VANTA.CELLS({
                        el: vantaRef.current,
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        scale: 1.00,
                        color1: 0x8c0039,
                        color2: 0xf2354b,
                        minHeight: 200.00,
                        minWidth: 200.00,
                        size: 4.20,
                        speed: 0.80
                    });
                }
            };
            document.body.appendChild(scriptVanta);
        };

        document.body.appendChild(scriptThree);

        return () => {
            if (typeof window !== "undefined" && window.VANTA) {
                window.VANTA.destroy();
            }
        };
    }, []);

    return (
        <>
            <main
                ref={vantaRef}
                className="flex w-50 flex-col items-center justify-between p-24"
            >
                <Heading as="h1" size="8" className="bg-gradient-to-b from-white via-slate-50 to-gray-300 inline-block text-transparent bg-clip-text mb-2">Nada por aquí...</Heading>
            </main>
        </>
    );
}
