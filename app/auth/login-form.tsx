"use client"
import * as a from "zod"
import { LoginSchema } from "@/schemas"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

import CardWrapper from '@/app/auth/card-wrapper'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FormError } from "@/components/form-error"
import { FormSuccess } from "@/components/form-success"
import { login } from "@/actions/login"
import { useState, useTransition } from "react"

function LoginForm() {
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("");
    const form = useForm<a.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });
    const onSubmit = (values: a.z.infer<typeof LoginSchema>) => {
        setError("")
        setSuccess("")
        startTransition(() => {
            login(values)
                .then((data) => {
                    // setError(data.error);
                    // setError(data.success);
                    setError("Something went wrong")
                    setSuccess("Logging Successful");
                })
        })
    }

    return (

        <CardWrapper
            headerLable="Welcome back"
            backButtonLable="Don't have an account?"
            backButtonHref="/auth/register"
            showSocial
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4">
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input {...field}
                                            placeholder="rataprajapati1242@gmail.com"
                                            disabled={isPending}
                                            type="email" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}>

                        </FormField>
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input {...field}
                                            placeholder="*************"
                                            disabled={isPending}
                                            type="password" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}>

                        </FormField>
                    </div>
                    <FormError message={error}></FormError>
                    <FormSuccess message={success}></FormSuccess>
                    <Button type="submit" disabled={isPending}
                        className="w-full"
                    >
                        Login
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

export default LoginForm