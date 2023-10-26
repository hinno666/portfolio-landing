import { links } from "../data"

export const Navbar = () => {
    return (
        <nav className="bg-emerald-900 text-white shadow-2xl shadow-inner">
            <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
                <h2 className="text-3xl font-bold">
                    carp<span className="text-emerald-400">Dev</span>
                </h2>
                <div className="flex gap-x-3">
                    {links.map((link) => {
                        const { id, href, text } = link
                        return <a key={id} href={href} className="capitalize text-lg tracking-wider hover:text-emerald-300 duration-300">{text}</a>
                    })}
                </div>
            </div>
        </nav>
    )
}