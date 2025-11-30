import Image from 'next/image';

import { Dot } from 'lucide-react';

import { type Experience } from '../data';

type Props = {
    experience: Experience;
    direction: 'right' | 'left';
};

const ExperienceCard = ({ experience, direction }: Props) => {
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
                        
                        <span className='text-secondary text-sm'>{experience.place}</span>

                        <Dot className='text-secondary hidden sm:block lg:hidden xl:block' />

                        <span className='text-secondary text-sm'>{experience.duration}</span>

                    </div>

                    <h2 className='text-white italic line-clamp-1'>{experience.role}</h2>

                    <p className='text-gray-300 text-sm line-clamp-2'>{experience.description}</p>

                </div>

            </div>

            {direction === 'right' && <div className='w-1/3 h-0.5 bg-secondary/20 max-lg:hidden' />}

        </div>
    );
};

export default ExperienceCard;