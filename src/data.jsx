import { nanoid } from 'nanoid';
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa';
import react from './assets/projects/react.jpg'
import rickmorty from './assets/projects/rickmorty.jpg'
import superhero from './assets/projects/superhero.jpg'


export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#projects', text: 'projects' },
];

export const skills = [
  {
    id: nanoid(),
    title: 'HTML&CSS',
    icon: <FaHtml5 className='h-16 w-16 text-emerald-500' />,
    text: 'Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.',
  },
  {
    id: nanoid(),
    title: 'Javascript',
    icon: <FaJs className='h-16 w-16 text-emerald-500' />,
    text: 'Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality',
  },
  {
    id: nanoid(),
    title: 'React',
    icon: <FaReact className='h-16 w-16 text-emerald-500' />,
    text: 'Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.',
  },
];

export const projects = [
  {
    id: nanoid(),
    img: react,
    url: 'https://dev--fundamentalcarp.netlify.app/',
    github: 'https://github.com/hinno666/fundamentalReactProjects',
    title: 'fundamental react project',
    text: 'Simple things created using React fundamentals.',
  },
  {
    id: nanoid(),
    img: rickmorty,
    url: 'https://rickandmortycarp.netlify.app/',
    github: 'https://github.com/hinno666/rickmorty',
    title: 'rickmorty',
    text: 'The project was built using React Query, Axios. Here you can view some information about all the characters in the Rick and Morty universe.',
  },
  {
    id: nanoid(),
    img: superhero,
    url: 'https://superherocarp.netlify.app/',
    github: 'https://github.com/hinno666/superhero',
    title: 'superhero',
    text: 'A single page application created using React Query, Axios, React Router. Here you can find your favorite superhero and explore all of their characteristics and more.',
  },
];
