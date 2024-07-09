
'use client'
import Link from "next/link"
import { Logo } from "./logo"
import { CartButton } from "./cart-button"
import { usePathname } from "next/navigation"

const routes: {
    to: string,
    title: string
}[] = [
        // {
        //     to: "/",
        //     title: "¿Quiénes somos?"
        // },
        // {
        //     to: "/",
        //     title: "Programas"
        // },
        // {
        //     to: "/",
        //     title: "Voluntariado"
        // },

    ]
export const Navbar = () => {
    const path = usePathname()
    if (path === '/checkout') return null;
    return (
        <nav className='fixed z-50 flex items-center justify-between w-full px-5 py-5 bg-black md:px-10'>
            <div className="w-16">
                <Link href='/'>
                    <Logo className="fill-primary" />
                </Link>
            </div>
            <ul className="flex items-center gap-4">
                {routes.map(({ to, title }) => (
                    <Link key={title} href={to}>
                        <li className="">
                            {title}
                        </li>
                    </Link>
                ))}
                <Link href='/donar' className="px-3 py-2 text-white transition-colors bg-bared hover:bg-primary " >
                    Donar Ahora
                </Link>
                <CartButton />
            </ul>
        </nav>
    )
}
