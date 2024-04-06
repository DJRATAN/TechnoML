import React from 'react'

function AuthLayout({ children }: { children: React.ReactNode }) {
    return (

        <div className='h-full text-white flex justify-center items-center bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-sky-300 to-blue-950'>

            {children}</div>
    )
}

export default AuthLayout