'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { socials } from '../data/socials';

const Header = () => {
    const pathname = usePathname();

    return (
        <header>

            <div className='container p-4 mx-auto border-gray-300 flex flex-col md:flex-row items-center justify-between gap-y-4'>

                <Link className='text-xl font-bold flex items-center gap-x-3' href='/'>

                    <span className='text-secondary'>{'<'}</span>

                    <span className='text-white'>Zohir EDDIG</span>

                    <span className='text-secondary'>{'/>'}</span>

                </Link>

                <nav>

                    <ul className='flex items-center gap-x-5 xl:gap-x-10'>

                        <li>
                            
                            <Link 
                                className={`text-gray-300 sm:text-lg underline-secondary 
                                ${pathname === '/' ? 'after:w-6' : 'hover:after:w-6'}`}
                                href='/'
                            >
                                
                                Home.
                            
                            </Link>
                        
                        </li>

                        <li>
                            
                            <Link 
                                className={`text-gray-300 sm:text-lg underline-secondary 
                                ${pathname === '/skills' ? 'after:w-6' : 'hover:after:w-6'}`} 
                                href='/skills'
                            >
                            
                                Skills.
                            
                            </Link>
                        
                        </li>

                        <li>
                            
                            <Link 
                                className={`text-gray-300 sm:text-lg underline-secondary 
                                ${pathname === '/projects' ? 'after:w-6' : 'hover:after:w-6'}`} 
                                href='/projects'
                            >
                                
                                Projects.
                            
                            </Link>
                            
                        </li>

                        <li>
                            
                            <Link 
                                className={`text-gray-300 sm:text-lg underline-secondary 
                                ${pathname === '/about' ? 'after:w-6' : 'hover:after:w-6'}`} 
                                href='/about'
                            >
                                
                                About.
                            
                            </Link>
                        
                        </li>

                        <li>
                            
                            <Link 
                                className={`text-gray-300 sm:text-lg underline-secondary 
                                ${pathname === '/contact' ? 'after:w-6' : 'hover:after:w-6'}`} 
                                href='/contact'
                            >
                                
                                Contact.
                            
                            </Link>
                        
                        </li>

                    </ul>

                </nav>

                <div>

                    <ul className='flex items-center gap-x-4 xl:gap-x-8'>

                        {
                            socials.map((social, index) => (

                                <li key={index}>
                                        
                                    <a 
                                        className='text-gray-300 text-lg transition duration-300 ease-in-out hover:drop-shadow-[0_0_0.75rem_var(--color-secondary)]' 
                                        href='https://github.com/ZohirEDDIG'
                                    >

                                        {social.icon}
                            
                                    </a>

                                </li>

                            ))}

                    </ul>

                </div>

            </div>

        </header>
    );
};

export default Header;