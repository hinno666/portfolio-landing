import { FaGithubSquare } from "react-icons/fa"
import { TbWorldWww } from 'react-icons/tb'

export const ProjectsCard = ({ url, github, img, title, text }) => {
    return <article className="bg-white rounded-lg shadow-md hover:shadow-xl duration-300">
        <img
            src={img}
            alt={title}
            className="w-full object-cover rounded-t-lg h-52" />
        <div className="capitalize p-8">
            <h2 className="text-xl tracking-wide font-medium">{title}</h2>
            <p className="mt4 text-slate-700 leading-loose">{text}</p>
            <div className="mt-4 flex gap-x-4">
                <a target="_blank" rel="noreferrer" href={url}>
                    <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
                </a>
                <a target="_blank" rel="noreferrer" href={github}>
                    <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
                </a>
            </div>
        </div>
    </article>
}