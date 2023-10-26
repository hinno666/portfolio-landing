import aboutSvg from '../assets/about.svg'
import { SectionTitle } from './SectionTitle'

export const About = () => {
    return (
        <section className='bg-white py-20' id='about'>
            <div className='align-element grid md:grid-cols-2 items-center gap-16'>
                <img src={aboutSvg} className='w-full h-64' />
                <article>
                    <SectionTitle text='a few details about myself' />
                    <p className='text-slate-600 mt-8 leading-loose'>Frontend Developer with over a year of experience. Committed to continuous development in the field of information technology and actively exploring its impact on business processes.</p>
                </article>
            </div>
        </section>
    )
}