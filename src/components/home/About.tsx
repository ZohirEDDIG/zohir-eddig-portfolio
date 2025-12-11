import Image from 'next/image';

import { Dot } from 'lucide-react';

import SectionIntro from './SectionIntro';

type Qualification = {
    id: number;
    duration: string;
    place: string;
    name: string;
    description: string;
};

const qualifications: Qualification[] = [
    {
        id: 1,
        duration: '2022 - 2023',
        place: 'Al Mouahidine HS Khouribga',
        name: 'Bachelor\'s Degree',
        description: 'Completed a one-year foundational bachelor\'s program focused on general education and core subjects.',
    },
    {
        id: 2,
        duration: '2023 - 2025',
        place: 'ISGI Khouribga',
        name: 'Full Stack Developer Degree',
        description: 'Pursuing an intensive two-year program covering front-end and back-end web development.',
    },
    {
        id: 3,
        duration: '1 Feb 2025 - 28 Feb 2025',
        place: 'Province Khouribga',
        name: 'Full Stack Web Developer Intern',
        description: 'Completed a 1-month internship focused on developing a blog platform called ZBlogs. Worked on both front-end and back-end tasks.',
    },
    {
        id: 4,
        duration: '2025 - 2026',
        place: 'ENSA Khouribga',
        name: 'Web & Mobile Engineering License',
        description: 'Pursuing an intensive year program covering both web and mobile development.'
    },
];

const About = () => {

    return (
        <section className='mt-20'>

            <div className='container mx-auto p-4 flex flex-col gap-y-10'>

                <SectionIntro
                    title='About'
                    description='A short look into my journey and the experiences that shaped my path in tech.'
                />


                    <div className='w-full h-full max-lg:flex max-lg:flex-col max-lg:gap-y-4 relative'>

                        <div className='w-0.5 h-full bg-secondary/20 rounded-full absolute top-0 left-1/2 max-lg:hidden'/>
                            
                        {
                            qualifications.map((qualification) => (

                                <QualificationCard 
                                    key={qualification.id} 
                                    qualification={qualification} 
                                    direction={qualification.id % 2 === 0 ? 'left' : 'right'} 
                                />

                            ))
                        }

                    </div>
                            
            </div>

        </section>
    );
};

export default About;

type Props = {
    qualification: Qualification;
    direction: string;
};

const QualificationCard = ({ qualification, direction }: Props) => {
    return (
        <div 
            className={`lg:w-1/2 ${direction === 'left' && 'lg:ml-auto'} flex items-center group 
            transition-transform duration-300 ease-in-out hover:-translate-y-2`}
        >

            {direction === 'left' && <div className='w-1/2 h-0.5 bg-secondary/20 max-lg:hidden' />}

            <div 
                className='w-full lg:w-2/3 p-4 border-[1.5px] border-secondary/20 rounded-md shadow-md flex items-center
                transition-colors duration-300 ease-in-out group-hover:border-secondary/50'
            >

                <Image 
                    className='bounce-slowly'
                    src='/rocketship.svg'
                    alt='Rocketship Icon'
                    width='70'
                    height='70'
                />

                <div className='flex flex-col gap-y-2'>

                    <div className='flex flex-col sm:flex-row lg:flex-col xl:flex-row sm:items-center lg:items-start xl:items-center'>
                        
                        <span className='text-secondary text-sm'>{qualification.place}</span>

                        <Dot className='text-secondary hidden sm:block lg:hidden xl:block' />

                        <span className='text-secondary text-sm'>{qualification.duration}</span>

                    </div>

                    <h2 className='text-white italic line-clamp-1'>{qualification.name}</h2>

                    <p className='text-gray-300 text-sm line-clamp-2'>{qualification.description}</p>

                </div>

            </div>

            {direction === 'right' && <div className='w-1/3 h-0.5 bg-secondary/20 max-lg:hidden' />}

        </div>
    );
};