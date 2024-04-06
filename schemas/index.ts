import * as a from "zod"

export const LoginSchema = a.object({
    email: a.string().email({
        message: "Correct Email is require"
    }),
    password: a.string().min(1, {
        message: "Password is Require"
    })
});