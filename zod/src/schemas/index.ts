import { z } from "zod";

// export const signupSchema = z.object({
//     name: z.string().min(2, "Name must be at least 2 character"),
//     email: z.string().email("Invalid email address"),
//     password: z.string().min(6, "Name must be at least 6 character"),
// })

export const signupSchema = z.object({
    name: z
        .string()
        .min(2, "name should be atleast 2 charcter long")
        .max(50, "name must not exceed 50 characters")
        .regex(/^[a-zA-Z\s]+$/, "name can only contain letters and spaces"),
    email: z
        .string()
        .email("Invalid email address")
        .refine((val) => val.endsWith("@gmail.com") || val.endsWith("@yahoo.com"), { message: "Email should be either @gmail.com or @yahoo.com" }),
    password: z
        .string()
        .min(6, "Password must be at least 6 character")
        .max(20, " Password must not exceed 20 characters")
        .regex(/[A-Z]/, " Password must contain at least one uppercase letter")
        .regex(/[a-z]/, " Password must contain at least one lowercase letter")
        .regex(/[0-9]/, " Password must contain at least one digit")
        .regex(/[@$!%*&?]/, " Password must contain at least one special character"),
})