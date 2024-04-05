import React from 'react'

function layout({ children }: any) {
    return (
        <div>
            <nav className="bg-red-400 text-white">This is Navbar</nav>
            {children}
        </div>

    )
}

export default layout