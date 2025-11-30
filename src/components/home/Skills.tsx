'use client';

import Image from 'next/image';

import { useState } from 'react';

import { CodeXml, Wrench } from 'lucide-react';

import SectionIntro from './SectionIntro';

type Skill = {
    src: string;
    name: string;
    tagline: string;
};

const techs: Skill[] = [
    {
        src: '/skills/TailwindCSS.svg',
        name: 'TailwindCSS',
        tagline: 'A utility-first CSS framework',
    },
    {
        src: '/skills/JavaScript.svg',
        name: 'JavaScript',
        tagline: 'Core web programming',
    },
    {
        src: '/skills/TypeScript.svg',
        name: 'TypeScript',
        tagline: 'Reliable, typed JavaScript',
    },
    {
        src: '/skills/React.svg',
        name: 'React',
        tagline: 'Interactive UI & fast rendering',
    },
    {
        src: '/skills/Next.svg',
        name: 'Next.js',
        tagline: 'Full-stack app framework',
    },
    {
        src: '/skills/Express.svg',
        name: 'Express',
        tagline: 'API & server building',
    },

    {
        src: '/skills/Node.svg',
        name: 'Node.js',
        tagline: 'Backend runtime',
    },
    {
        src: '/skills/MongoDB.svg',
        name: 'MongoDB',
        tagline: 'NoSQL database',
    },
];

const tools: Skill[] = [
    {
        src: '/tools/Visual Studio Code.svg',
        name: 'VS Code',
        tagline: 'My coding workspace',
    },
    {
        src: '/tools/Git.svg',
        name: 'Git',
        tagline: 'Branching & commit workflow',
    },
    {
        src: '/tools/GitHub.svg',
        name: 'GitHub',
        tagline: 'Version control & repos',
    },
    {
        src: '/tools/Github Copilot.svg',
        name: 'Copilot',
        tagline: 'AI coding assistance',
    },
    {
        src: '/tools/Figma.svg',
        name: 'Figma',
        tagline: 'UI/UX design',
    },
];

const Skills = () => {
    const [category, setCategory] = useState<'techs' | 'tools'>('techs');

    let skills = category === 'techs' ? techs : tools;

    return (
        <section>

            <div className='container mx-auto p-4 flex flex-col gap-y-10'>

                <SectionIntro
                    title='Skills'
                    description='Technologies and tools I use to build modern, fast and scalable web applications.'
                />

                <div className='bg-secondary/20 w-[300px] mx-auto rounded-full grid grid-cols-2 divide-x-2 divide-secondary/40'>

                    <button 
                        className={`${category === 'techs' ? 'text-secondary underline' : 'text-gray-300 hover:text-secondary hover:underline'}
                        py-1 flex justify-center items-center gap-x-2`}
                        onClick={() => setCategory('techs')}
                    >

                        <CodeXml size={15} />

                        Techs

                    </button>

                    <button  
                        className={`${category === 'tools' ? 'text-secondary underline' : 'text-gray-300 hover:text-secondary hover:underline'}
                        py-1 flex justify-center items-center gap-x-2`}
                        onClick={() => setCategory('tools')}
                    >

                        <Wrench size={15} />

                        Tools

                    </button>

                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>

                    {
                        skills.map((skill, index) => (
                                
                            <SkillCard key={index} {...skill} />

                        ))
                    }

                </div>

            </div>

        </section>
    );
};

export default Skills;

const SkillCard = ({ src, name, tagline }: Skill) => {
    return (
        <div 
            className='text-center p-4 group relative  border-[1.5px] border-secondary/20 rounded-md shadow-md 
            flex flex-col items-center gap-y-3 transition-all duration-300 ease-in-out hover:-translate-y-2 hover:border-secondary/40'
        >   
            
            <Image
                className='transition-transform duration-300 ease-in-out group-hover:scale-110'
                src={src}
                alt={`${name} icon`}
                width={60}
                height={60}
            />

            <h4 className='text-secondary'>{name}</h4>

            <p className='text-gray-300 text-sm'>{tagline}</p>

        </div>
    );
};