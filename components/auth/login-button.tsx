"use client"
import React from 'react'
import { useRouter } from 'next/navigation';

interface LoginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect",
    asChild?: boolean
}

export const LoginButton = ({ children, mode = "redirect", asChild }: LoginButtonProps) => {
    const router = useRouter();
    const onClick = () => {
        router.push('/auth/login')
        // console.log("Login Button Clicked")
    }
    if (mode == "modal") {
        return (
            <span>
                ToDo: Implement modal
            </span>
        )
    }
    return (
        <span onClick={onClick} className='cursor-pointer'>
            {children}
        </span>
    )
}