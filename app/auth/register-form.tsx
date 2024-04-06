"use client"
import * as a from "zod"
import { RegisterSchema } from "@/schemas"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

import CardWrapper from '@/app/auth/card-wrapper'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FormError } from "@/components/form-error"
import { FormSuccess } from "@/components/form-success"
import { register } from "@/actions/register"
import { useState, useTransition } from "react"

function RegisterForm() {
    const [isPending, startTransition] = useTransition();
    const [error, setError] = useState<string | undefined>("")
    const [success, setSuccess] = useState<string | undefined>("");
    const form = useForm<a.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name: "",
        }
    });
    const onSubmit = (values: a.z.infer<typeof RegisterSchema>) => {
        setError("")
        setSuccess("")
        startTransition(() => {
            register(values)
                .then((data) => {
                    setError(data.error)
                    setSuccess(data.success)
                })
        })
    }

    return (

        <CardWrapper
            headerLable="Register an account"
            backButtonLable="Already have an account?"
            backButtonHref="/auth/login"
            showSocial
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-4">
                    <div className="space-y-4">
                    <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input {...field}
                                            placeholder="Ratan Prajapati"
                                            disabled={isPending}
                                            type="text" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}>
                        </FormField>
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
                        Create an Account
                    </Button>
                </form>
            </Form>
        </CardWrapper>
    )
}

export default RegisterForm