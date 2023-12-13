// ./app/blog/database.ts
import mysql from 'mysql2/promise';

interface Blog {
    id: number;
    titulo: string;
    resumen: string;
}

// Esta función solo debería ejecutarse en el lado del servidor
export async function obtenerBlogs(): Promise<Blog[]> {
    // Asegúrate de que solo estás ejecutando este código en el lado del servidor
    if (typeof window === 'undefined') {
        const connection = await mysql.createConnection({
            host: 'localhost',
            user: 'CarlosGPC',
            password: '12345',
            database: 'blog',
        });

        const [rows] = await connection.execute('SELECT * FROM blogs');
        connection.end();

        return rows as Blog[];
    } else {
        // Este código se ejecuta en el cliente (navegador), puedes manejarlo como desees
        // Por ejemplo, puedes lanzar un error, mostrar un mensaje de error, etc.
        throw new Error('Esta función debe ejecutarse solo en el servidor.');
    }
}
