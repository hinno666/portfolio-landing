import heroImg from '../assets/hero.svg'
import { FaGithubSquare, FaInstagramSquare, FaTelegram } from 'react-icons/fa'

export const Hero = () => {
    return (
        <div className='bg-emerald-800 py-24 text-white'>
            <div className='align-element grid md:grid-cols-2 items-center gap-8'>
                <article>
                    <h1 className='text-7xl font-bold tracking-wider'>
                        I`m Andrew
                    </h1>
                    <p className='mt-4 text-3xl text-slate-300 capitalize tracking-wide'>
                        Front-End Developer
                    </p>
                    <p className='mt-2 text-lg text-slate-300 capitalize tracking-wide'>
                        turning ideas into interactive reality
                    </p>
                    <div className='flex gap-x-4 mt-4'>
                        <a href="#"><FaGithubSquare className='social-icons' /></a>
                        <a href="#"><FaTelegram className='social-icons' /></a>
                        <a href="#"><FaInstagramSquare className='social-icons' /></a>
                    </div>
                </article>
                <article className='hidden md:block'>
                    <img src={heroImg} className='h-80 lg:h-96' />
                </article>
            </div>
        </div>
    )
}