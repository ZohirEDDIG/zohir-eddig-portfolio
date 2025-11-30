'use client';

import { useState } from 'react';

import { education, experiences, certifications } from './data';

import SectionIntro from '../SectionIntro';

import { Nav, EducationCard, ExperienceCard, CertificationCard } from './subcomponents';

export type Category = 'education' | 'experience' | 'certifications';

const About = () => {
    const [category, setCategory] = useState<Category>('education');   

    return (
        <section className='mt-20'>

            <div className='container mx-auto p-4 flex flex-col gap-y-10'>

                <SectionIntro
                    title='About'
                    description='A short look into my journey.'
                />

                <Nav category={category} setCategory={setCategory} />

                    {
                        category === 'education'

                        ?   <div className='w-full h-full max-lg:flex max-lg:flex-col max-lg:gap-y-4 relative'>

                                <div className='w-0.5 h-full bg-secondary/20 rounded-full absolute top-0 left-1/2 max-lg:hidden'/>
                                    
                                {
                                    education.map((education) => (

                                        <EducationCard education={education} direction={education.id % 2 === 0 ? 'left' : 'right'} />

                                    ))
                                }

                            </div>
                                
                        :   category === 'experience'

                        ?   <div className='w-full h-full max-lg:flex max-lg:flex-col max-lg:gap-y-4 relative'>

                                <div className='w-0.5 h-full bg-secondary/20 rounded-full absolute top-0 left-1/2 max-lg:hidden'/>
                                    
                                {
                                    experiences.map((experience) => (

                                        <ExperienceCard key={experience.id} experience={experience} direction={experience.id % 2 === 0 ? 'left' : 'right'} />

                                    ))
                                }
                            </div>

                        :   category === 'certifications' 

                        ?   <div className='w-full h-full max-lg:flex max-lg:flex-col max-lg:gap-y-4 relative'>

                                <div className='w-0.5 h-full bg-secondary/20 rounded-full absolute top-0 left-1/2 max-lg:hidden'/>
                                    
                                {
                                    certifications.map((certification) => (

                                        <CertificationCard key={certification.id} certification={certification} direction={certification.id % 2 === 0 ? 'left' : 'right'} />

                                    ))
                                }

                            </div>
                        
                        :   null
                    }

                </div>

        </section>
    );
};

export default About;