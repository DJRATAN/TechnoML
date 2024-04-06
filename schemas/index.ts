import * as a from "zod"

export const LoginSchema = a.object({
    email: a.string().email({
        message: "Correct Email is require"
    }),
    password: a.string().min(1, {
        message: "Password is Require"
    })
});

export const RegisterSchema = a.object({
    email: a.string().email({
        message: "Correct Email is require"
    }),
    password: a.string().min(6, {
        message: "Minimum 6 character required"
    }),
    name: a.string().min(1, {
        message: "Name is required",
    })
});