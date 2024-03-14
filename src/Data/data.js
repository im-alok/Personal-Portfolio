import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,

} from "../assets";

import Project1 from '../assets/Ed-Tech.png';


export const navLinks = [
    {
    id: "about",
    title: "About",
    },
    {
    id: "work",
    title: "Work",
    },
    {
    id: "contact",
    title: "Contact",
    },
];

const services = [
    {
    title: "Web Developer",
    icon: web,
    },
    {
    title: "React Developer",
    icon: mobile,
    },
    {
    title: "Backend Developer",
    icon: backend,
    },
    {
    title: "Content Creator",
    icon: creator,
    },
];

const technologies = [
    {
    name: "HTML 5",
    icon: html,
    },
    {
    name: "CSS 3",
    icon: css,
    },
    {
    name: "JavaScript",
    icon: javascript,
    },
    {
    name: "TypeScript",
    icon: typescript,
    },
    {
    name: "React JS",
    icon: reactjs,
    },
    {
    name: "Redux Toolkit",
    icon: redux,
    },
    {
    name: "Tailwind CSS",
    icon: tailwind,
    },
    {
    name: "Node JS",
    icon: nodejs,
    },
    {
    name: "MongoDB",
    icon: mongodb,
    },
    {
    name: "Three JS",
    icon: threejs,
    },
    {
    name: "git",
    icon: git,
    },
    {
    name: "figma",
    icon: figma,
    },
    {
    name: "docker",
    icon: docker,
    },
];

const experiences = [];

const testimonials = [];

const projects = [
    {
    name: "Personal Portfolio",
    description:
        "My personal portfolio to show case my knowledge,my projects and my skills.",
    tags: [
        {
        name: "react js",
        color: "blue-text-gradient",
        },
        {
        name: "tailwind",
        color: "pink-text-gradient",
        },
        {
        name: "Three js",
        color: "blue-text-gradient",
        },
        {
        name: "Email js",
        color: "pink-text-gradient",
        },
    ],
    image: "https://res.cloudinary.com/drpcrwqf4/image/upload/v1702397796/Personal%20Portfolio/project%20photos/Screenshot_from_2023-12-12_21-39-58_tmulvw.png",
    source_code_link: "https://github.com/im-alok/Personal-Portfolio.git",
    live_link:'#'
    },
    {
        name: "Ed-Tech Platform (Udemy Clone)",
        description:
            "It is a fully functional ed-tech platform that enables users to create, consume, and rate educational content.",
        tags: [
            {
            name: "React",
            color: "blue-text-gradient",
            },
            {
                name: "Redux",
                color: "pink-text-gradient",
            },
            {
            name: "mongodb",
            color: "green-text-gradient",
            },
            {
            name: "Tailwind",
            color: "pink-text-gradient",
            },
            {
            name: "MongoDB",
            color: "blue-text-gradient",
            },
            {
            name: "Express js",
            color: "green-text-gradient",
            },
            {
                name: "NodeJs",
                color: "blue-text-gradient",
            },
            {
                name: "Vercel",
                color: "pink-text-gradient",
            },
            {
                name: "Render.com",
                color: "green-text-gradient",
            },

        ],
        image:Project1 ,
        source_code_link: "https://github.com/im-alok/Ed-Tech.git",
        live_link:"https://ed-tech-im-aloks-projects.vercel.app/"
        }
];

export { services, technologies, experiences, testimonials, projects };