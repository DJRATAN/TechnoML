"use server"
import { LoginSchema } from "@/schemas"
import * as a from "zod"
export const login = async (values: a.infer<typeof LoginSchema>) => {
    const validatedFields = LoginSchema.safeParse(values)
    if (!validatedFields.success) {
        return { error: "Invalid fields!" }
    }
    return { success: "Email Sent" }
}