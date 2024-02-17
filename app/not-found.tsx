import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import {Image} from "@nextui-org/image";
import { title } from "@/components/primitives";

export default function NotFound() {
    return (
        <div className='flex flex-col items-center justify-center gap-4 py-8 md:py-10'>
            <h2 className={title()}>No hay nada por aquí</h2>
            <Image
                isBlurred
                disableSkeleton={false}
                src="404.avif"
                alt="404 image"
                loading="lazy"
                width={531}
                height={1200}
                className="my-10 hover:scale-105 transition duration-1000 ease-in-out cursor-pointer"
            />
            <Link
						isExternal
						as={NextLink}
						href= '/'
                        target="_self"
						className={buttonStyles({ color: "danger", radius: "full", variant: "shadow" })}
					>
						Regresar al inicio
					</Link>
        </div>
    )
}