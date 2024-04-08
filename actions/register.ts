"use server"
import { RegisterSchema } from "@/schemas"
import bcryptjs from "bcryptjs"
import { db } from "@/lib/db"
import * as a from "zod"
import { getUserByEmail } from "@/data/user"
export const register = async (values: a.infer<typeof RegisterSchema>) => {
    const validatedFields = RegisterSchema.safeParse(values)
    if (!validatedFields.success) {
        return { error: "Invalid fields!" }

    }
    const { email, password, name } = validatedFields.data;
    const hashedPassword = await bcryptjs.hash(password, 10);
    // const existingUser = await db.user.findUnique({
    //     where: {
    //         email,
    //     }
    // })
    const existingUser = await getUserByEmail(email)
    if (existingUser) {
        return { error: "Email already in use!" }
    }
    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword,
        }
    })
    
    // ToDo: Send verification token email

    return { success: "User created" }
}