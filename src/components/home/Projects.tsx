import Link from 'next/link';
import Image from 'next/image';

import { ArrowUpRight, MoveRight,  } from 'lucide-react';

import { projects, type Project } from '../data/projects';

import SectionIntro from './SectionIntro';

const Projects = () => {
    return (
        <section className='mt-20'>

            <div className='container mx-auto p-4 flex flex-col gap-y-10'>
                
                <SectionIntro 
                    title='Projects'
                    description='Practical projects demonstrating my experience across modern web technologies.'
                />

                <div className='flex flex-col gap-y-10'>

                    {
                        projects.map((project, index) => (
                            
                            <ProjectCard key={index} project={project}/>

                        ))  
                    }

                </div>

                <Link 
                    href='/projects' 
                    className='text-secondary w-fit px-4 py-2 mx-auto border border-secondary flex items-center gap-x-2 
                    hover:opacity-80 transition duration-300 ease-in-out' type='button'
                >
                    
                    View Full Project Archive

                    <MoveRight className='animate-pulse'/>
                
                </Link>

            </div>

        </section>
    );
};

export default Projects;

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <Link 
            className='p-2 rounded-md flex items-center gap-x-6 group transition-all duration-300 ease-in-out
            hover:bg-secondary/10 hover:shadow-md'
            href={project.url}
        >

            <div className='hidden md:flex'>

                <Image 
                    src={project.previewInPC}
                    alt={`${project.name} preview in a pc`} 
                    width='200' 
                    height='200' 
                />

                <Image 
                    src={project.previewInMobile

                    }
                    alt={`${project.name} preview in a mobile`}
                    width='150' 
                    height='150' 
                />

            </div>

            <div className='flex flex-col gap-y-3'>

                <h2 className='text-white text-2xl font-bold flex items-start gap-x-2'>
                    
                    {project.name} 
                    
                    <ArrowUpRight 
                        className='transition-all duration-300 ease-in-out 
                        group-hover:text-secondary group-hover:translate-x-1 group-hover:-translate-y-1' 
                    />
                
                </h2>
                    
                <p className='max-w-[400px] md:max-w-[300px] text-gray-200 text-sm'>{project.description}</p>

                    <div className='flex items-center gap-x-4'>

                        {
                            project.techs.map((tech, index) => (

                                <div
                                    key={index}
                                    className='flex items-center gap-x-1'
                                >

                                    <Image 
                                        className='hidden sm:block'
                                        src={`/skills/${tech}.svg`} 
                                        alt={`${tech} icon`} 
                                        width='20' 
                                        height='20' 
                                    />
                                    
                                    <span className='text-secondary text-xs italic'>{tech}</span>
                                
                                </div>

                            ))
                        }

                </div>

            </div>

        </Link>
    );
};