// export async function GET() {
//     return new Response("Hello World!")
// }
// thunder client extenstoin for testing

import { NextRequest } from "next/server";

export const movies = [
    {
        id: 1,
        title: "Inception",
        comment: 123,
        ratting: 4.5,
        description: "A mid-blowing thriller movie",
    },
    {
        id: 2,
        title: "Inception2",
        comment: 123,
        ratting: 4.5,
        description: "A mid-blowing thriller movie",
    },
    {
        id: 3,
        title: "Inception3",
        comment: 123,
        ratting: 4.5,
        description: "A mid-blowing thriller movie",
    },
    {
        id: 4,
        title: "Inception4",
        comment: 123,
        ratting: 4.5,
        description: "A mid-blowing thriller movie",
    },
    {
        id: 5,
        title: "Inception5",
        comment: 123,
        ratting: 4.5,
        description: "A mid-blowing thriller movie",
    },
    {
        id: 6,
        title: "Inception6",
        comment: 123,
        ratting: 4.5,
        description: "A mid-blowing thriller movie",
    },
];

// export async function GET() {
//     return Response.json(movies)
// }

export async function POST(req: Request) {
    const movie = await req.json();
    console.log(movie);

    const newMovie = { ...movie }
    movies.push(newMovie)
    return new Response(JSON.stringify(newMovie))
}

export async function GET(request: NextRequest) {
    const serachparams = request.nextUrl.searchParams
    const query = serachparams.get("query")

    const filteredMovies = query ? movies.filter((m) => m.title.toLowerCase().includes(query)) : movies

    return new Response(JSON.stringify(filteredMovies))
}