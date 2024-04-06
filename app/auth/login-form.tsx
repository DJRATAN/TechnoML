import { Card } from '@/components/ui/card'
import React from 'react'
import CardWrapper from './card-wrapper'

function LoginForm() {
    return (
        <CardWrapper
            headerLable="Welcome back"
            backButtonLable="Don't have an account?"
            backButtonHref="/auth/register"
            showSocial
        >
            Login Form !
        </CardWrapper>
    )
}

export default LoginForm