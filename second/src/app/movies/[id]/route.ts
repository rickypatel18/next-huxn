
import { movies } from "../route";

export async function GET(_req: Request, { params }: { params: { id: string } }) {

    const { id } = await params;
    const movie = movies.find(m => m.id === Number(id))

    return movie ? new Response(JSON.stringify(movie)) : new Response("Movie not found", { status: 404 })
}

export async function PATCH(
    req: Request, { params }: { params: { id: string } }
) {
    const { id } = params
    const movieId = Number(id)

    const movie = movies.find((m) => m.id === movieId);

    if (!movie) {
        return new Response("Movie not found", { status: 404 })
    }

    try {
        const updatedMovies = await req.json()
        const index = movies.findIndex(m => m.id === movieId)

        if (!movie) {
            return new Response(JSON.stringify({ error: "Movie Not Found" }), { status: 404 })
        }

        movies[index] = { ...movie, ...updatedMovies }
        return new Response(JSON.stringify(movies[index]), { status: 200 });

    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ error: "Failed to parse JSON" }), { status: 400 })
    }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
    const { id } = params
    const movieId = Number(id)

    const index = movies.findIndex((m) => m.id === movieId)

    if (index === -1) {
        return new Response(JSON.stringify({ error: "Movie not found" }), { status: 404 })
    }

    movies.splice(index, 1)

    return new Response(JSON.stringify({ message: "MOvie deleted succesfully" }), { status: 200 })
}

