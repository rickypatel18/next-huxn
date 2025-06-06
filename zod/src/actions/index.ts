"use server"

import { signupSchema } from "@/schemas";
import { z } from "zod";

export async function createUser(values: z.infer<typeof signupSchema>) {
    const result = signupSchema.safeParse(values)

    if (!result.success) {
        return { status: "error", message: result.error.message }
    }
    return { status: "success", message: "User created successfully" }
}