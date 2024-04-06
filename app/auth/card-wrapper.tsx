"use clinet"
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import React from 'react'
import { Header } from './header';
import SocialMedia from './social';
import { BackButton } from './back-button';
interface CardWrapperProps {
    children: React.ReactNode;
    headerLable: string;
    backButtonLable: string;
    backButtonHref: string;
    showSocial?: boolean;
}

const CardWrapper = (
    {
        children,
        headerLable,
        backButtonLable,
        backButtonHref,
        showSocial
    }: CardWrapperProps
) => {
    return (
        <>
            <Card className='w-[400px] shadow-md p-2'>
                <CardHeader>
                    <Header label={headerLable}></Header>
                </CardHeader>
                <CardContent>
                    {children}
                </CardContent>
                {showSocial && (<CardFooter>
                    <SocialMedia></SocialMedia>
                </CardFooter>)}
                <CardFooter>
                    <BackButton label={backButtonLable}
                        href={backButtonHref}
                    ></BackButton>
                </CardFooter>
            </Card>
        </>
    )
}
export default CardWrapper;

