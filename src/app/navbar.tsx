
import Link from "next/link"
import { Logo } from "./logo"

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
    return (
        <nav className='bg-black w-full py-5 px-10 flex justify-between fixed items-center z-50'>
            <div className="w-16">
                <Link href='/'>
                    <Logo className="fill-primary" />
                </Link>
            </div>
            <ul className="flex gap-8 items-center">
                {routes.map(({ to, title }) => (
                    <Link key={title} href={to}>
                        <li className="">
                            {title}
                        </li>
                    </Link>
                ))}
                <Link href='/donar' className="bg-bared transition-colors hover:bg-primary px-3 py-2 " >
                    Donar Ahora
                </Link>
            </ul>
        </nav>
    )
}
