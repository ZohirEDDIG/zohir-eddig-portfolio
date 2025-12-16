import Link from 'next/link';
import { MoveRight } from 'lucide-react';

export default function Projects() {
    return (
        <main className='h-screen'>

            <div className='container h-full p-4 mx-auto flex flex-col justify-center items-center gap-y-4'>

                <h1 className='text-gray-400 text-xl animate-pulse'>
                    
                    We’re working on this page. Coming soon.
                    
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