import Image from 'next/image';

import { Dot } from 'lucide-react';

import { type Certification } from '../data';

type Props = {
    certification: Certification;
    direction: 'right' | 'left';
};

const CertificationCard = ({ certification, direction }: Props) => {

    return (
        <div 
            className={`lg:w-1/2 ${direction === 'left' && 'lg:ml-auto'} flex items-center group 
            transition-transform duration-300 ease-in-out hover:-translate-y-2`}
        >
    
            {direction === 'left' && <div className='w-1/2 h-0.5 bg-secondary/20 max-lg:hidden' />}
    
            <div 
                className='w-full lg:w-1/2 p-4  border-[1.5px] border-secondary/20 rounded-md shadow-md flex flex-col items-center gap-y-2
                transition-colors duration-300 ease-in-out group-hover:border-secondary/50'
            >

                <h2 className='text-white text-sm italic flex items-center'>

                    <Dot />
                    
                    {certification.name}
                    
                </h2>

                <Image 
                    className='ml-2'
                    src={certification.evidence}
                    alt='Rocketship Icon'
                    width='200'
                    height='200'
                />

            </div>
    
            {direction === 'right' && <div className='w-1/2 h-0.5 bg-secondary/20 max-lg:hidden' />}
    
        </div>
    );
};

export default CertificationCard;