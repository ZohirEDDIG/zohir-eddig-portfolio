import { type Dispatch, type SetStateAction } from 'react';

import { BookOpen, TestTube, Award } from 'lucide-react';

import { type Category } from '../About';

type Props = {
    category: Category;
    setCategory: Dispatch<SetStateAction<Category>>
};

const Nav = ({ category, setCategory }: Props) => {
    return (
        <div className='w-full max-w-[400px] sm:w-[400px]  bg-secondary/20 mx-auto rounded-full grid grid-cols-3 divide-x-2 divide-secondary/40'>

            <button 
                className={`text-xs sm:text-sm ${category === 'education' ? 'text-secondary underline' : 'text-gray-300 hover:text-secondary hover:underline'}
                py-1 flex justify-center items-center gap-x-2`}
                onClick={() => setCategory('education')}
            >

                <BookOpen size={15} />

                Education

            </button>

            <button  
                className={`text-xs sm:text-sm ${category === 'experience' ? 'text-secondary underline' : 'text-gray-300 hover:text-secondary hover:underline'}
                py-1 flex justify-center items-center gap-x-2`}
                onClick={() => setCategory('experience')}
            >

                <TestTube size={15} />

                Experience

            </button>

            <button  
                className={`text-xs sm:text-sm  ${category === 'certifications' ? 'text-secondary underline' : 'text-gray-300 hover:text-secondary hover:underline'}
                py-1 flex justify-center items-center gap-x-2`}
                onClick={() => setCategory('certifications')}
            >

                <Award  size={15} />

                Certifications

            </button>

        </div>
    );
};

export default Nav;