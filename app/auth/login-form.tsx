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

function LoginForm() {
    const form = useForm<a.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            email: "",
            password: "",
        }
    });
    const onSubmit = (values: a.z.infer<typeof LoginSchema>) => {
        console.log(values)
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
                                            type="password" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}>

                        </FormField>
                    </div>
                    <FormError message="something wen't wrong"></FormError>
                    <Button type="submit"
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