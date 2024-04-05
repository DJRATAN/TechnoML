
import React from 'react'

function layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div className="flex flex-col gap-y-4">
                <nav className="bg-blue-200 text-yellow">This is DJRATAN</nav>
            </div>
            {children}</div>
    )
}

export default layout