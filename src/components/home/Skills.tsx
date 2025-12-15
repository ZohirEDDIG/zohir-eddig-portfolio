'use client';

import Image from 'next/image';

import { useState } from 'react';

import { CodeXml, Wrench } from 'lucide-react';

import { motion, AnimatePresence, MotionValue } from 'framer-motion';

import { techs, tools, type Skill } from '../data/skills';

import SectionIntro from './SectionIntro';

const Skills = () => {
    const [category, setCategory] = useState<'techs' | 'tools'>('techs');

    let skills = category === 'techs' ? techs : tools;

    return (
        <section id='skills'>

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
                        className={`${category === 'tools' ? 'text-secondary underline' : 
                            'text-gray-300 underline decoration-transparent hover:text-secondary hover:decoration-secondary'}
                            py-1 flex justify-center items-center gap-x-2 transition-all duration-300 ease-in-out`}
                        onClick={() => setCategory('tools')}
                    >

                        <Wrench size={15} />

                        Tools

                    </button>

                </div>

                <AnimatePresence mode='wait'>

                    <motion.div
                        key={category}
                        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'
                        initial='hidden'
                        animate='visible'
                        exit='hidden'
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: { staggerChildren: 0.08 }
                            }
                        }}
                    >

                        {
                            skills.map((skill, index) => (
                                    
                                <SkillCard key={index} {...skill} />

                            ))
                        }

                    </motion.div>
                    
                </AnimatePresence>

            </div>
        
        </section>
    );
};

export default Skills;

const SkillCard = ({ src, name, tagline }: Skill) => {
    return (
        <motion.div 
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ y: -8 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
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

        </motion.div>
    );
};