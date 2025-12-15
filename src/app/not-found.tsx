import Link from 'next/link';

import { MoveRight } from 'lucide-react';

export default function NotFound() {
    return (
        <main className='h-screen'>

            <div className='container h-full p-4 mx-auto flex flex-col justify-center items-center gap-y-4'>

                <h1 className='text-gray-200 text-2xl'>

                    404 | This page could not be found
                
                </h1>

                <Link 
                    className='text-secondary w-fit px-4 py-2 mt-2.5 border border-secondary flex items-center gap-x-2 hover:opacity-80 transition duration-300 ease-in-out' 
                    href='/'
                >
                    
                    Back to Home

                    <MoveRight className='animate-pulse'/>
                
                </Link>

            </div>

        </main>
    );
}