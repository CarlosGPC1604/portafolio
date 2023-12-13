import React, { useEffect, useState } from 'react';
import { obtenerBlogs } from '../blog/database';

interface Blog {
	id: number;
	titulo: string;
	resumen: string;
}

export default function Page({ blogs }: { blogs: Blog[] }) {
	return (
		<main>
			{/* Aquí puedes usar los datos de blogs */}
			{blogs.map((blog) => (
				<div key={blog.id}>
					<h2>{blog.titulo}</h2>
					<p>{blog.resumen}</p>
				</div>
			))}
		</main>
	);
}

export async function obtenerDatos() {
	try {
		const blogs = await obtenerBlogs();
		return { blogs };
	} catch (error) {
		console.error('Error al obtener blogs:', error);
		return { blogs: [] };
	}
}

// ...

export const fetchData = async () => {
	if (typeof window === 'undefined') {
		// Este código se ejecuta solo en el servidor
		const { blogs } = await obtenerDatos();
		return { blogs };
	} else {
		// Este código se ejecuta en el cliente
		return { blogs: [] as Blog[] };
	}
};

// ...


// Llamas a fetchData en el useEffect del componente de la página
// ...

export function PageComponent() {
	const [blogs, setBlogs] = useState<Blog[]>([]);

	useEffect(() => {
		const fetchDataAsync = async () => {
			const data = await fetchData();
			setBlogs(data.blogs as Blog[]);
		};

		fetchDataAsync();
	}, []);

	return <Page blogs={blogs} />;
}
