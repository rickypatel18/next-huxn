"use server";

import { db } from "@/utils/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// create
export async function createMovie(formData: FormData) {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const image = formData.get("imageurl") as string;

    await db.movie.create({
        data: { title, description, image },
    });

    revalidatePath("/all-movies");
    redirect("/all-movies");
}

// delete
export async function deleteMovie(formData: FormData) {
    const movieId = formData.get("movieId") as string;
    await db.movie.delete({ where: { id: movieId } });

    revalidatePath("/all-movies");
}

// update
export async function updateMovie(formData: FormData) {
    const movieId = formData.get("movieId") as string;
    const newTitle = formData.get("titleU") as string;
    const newDescription = formData.get("descriptionU") as string;
    const newImageUrl = formData.get("imageU") as string;

    await db.movie.update({
        where: { id: movieId },
        data: {
            title: newTitle,
            description: newDescription,
            image: newImageUrl,
        },
    });

    revalidatePath("/all-movies");
}