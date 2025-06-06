"use server"

import { db } from "@/utils/db";

//1 create todo
export async function createTodo(formData: FormData) {
    // "use server"; cuz we use "use server"

    const input = formData.get("inputData") as string;
    await db.todo.create({
        data: { input: input },
    });
}

//3 update todo
export async function editTodo(formData: FormData) {
    // "use server"; 
    
    const input = formData.get("input") as string;
    const inputId = formData.get("inputId") as string;

    await db.todo.update({
        where: { id: inputId },
        data: { input: input },
    });
}

//4 delete todo
export async function deleteTodo(formData: FormData) {
    // "use server";

    const inputId = formData.get("inputId") as string;

    await db.todo.delete({
        where: { id: inputId },
    });
}