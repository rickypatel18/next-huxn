import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient()

// async function createMovie() {
//     const newMovie = await prisma.movie.create({
//         data: {
//             title: "The New Redemption",
//             description: " Hope Nrew eternal.",
//             genre: "Sci Fi",
//             releaseDate: new Date("2025-07-16"),
//             rating: 9.2,
//         }
//     })

//     console.log(newMovie);
// }

async function createMultipleMovie() {
    const newMovies = await prisma.movie.createMany({
        data: [{
            title: "The New Redemption",
            description: " Hope Nrew eternal.",
            genre: "Sci Fi",
            releaseDate: new Date("2025-07-16"),
            rating: 9.2,
        }, {
            title: "The New Redemption2",
            description: " Hope Nrew eternal 2.",
            genre: "Sci F 2i",
            releaseDate: new Date("2025-07-2"),
            rating: 9.2,
        },
        ]
    })

    console.log(newMovies);
}

async function getAllMovies() {
    const movies = await prisma.movie.findMany();
    console.log("all movies,", movies);
}

async function getOneMovie(movieId: number) {
    const movie = await prisma.movie.findUnique({
        where: { id: movieId }
    })
    console.log(movie);
}

async function updateMovie(movieId: number, name: string, description: string) {
    const updatedMovie = await prisma.movie.update({
        where: { id: movieId },
        data: {
            title: name,
            description: description
        }
    })
    console.log(updateMovie);

}

async function deleteMovie(movieId: number) {
    const deletedMovie = await prisma.movie.delete({
        where: { id: movieId }
    })
    console.log(deletedMovie);
}

async function main() {
    // await createMovie();
    // await createMultipleMovie();
    // await getAllMovies();
    // await getOneMovie(5)
    // await updateMovie(5, "new name", "new desc");
    await deleteMovie(3)

}
main().then(async () => await prisma.$disconnect()).catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1)
})