import Link from 'next/link'
import {Image} from "@nextui-org/image";

export default function NotFound() {
    return (
        <div>
            <h2>Not Found</h2>
            <Image
                isBlurred
                disableSkeleton={false}
                src="404.avif"
                alt="404 image"
                loading="lazy"
                width={531}
                height={1200}
                className="m-5 hover:scale-105 transition duration-500 cursor-pointer"
            />
            <Link href="/">Return Home</Link>
        </div>
    )
}