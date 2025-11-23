'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

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

                        <li>
                            
                            <a 
                                className='text-secondary text-lg hover:opacity-80 transition duration-300 ease-in-out' 
                                href='https://github.com/ZohirEDDIG'
                            >

                                <Github />
                        
                            </a>

                        </li>

                        <li>
                            
                            <a 
                                className='text-secondary text-lg hover:opacity-80 transition duration-300 ease-in-out' 
                                href='https://www.linkedin.com/in/zohir-eddig-628669317'
                            >

                                <Linkedin />
                        
                            </a>
                            
                        </li>

                        <li>
                            
                            <a 
                                className='text-secondary text-lg hover:opacity-80 transition duration-300 ease-in-out' 
                                href='https://x.com/zohireddig'
                            >

                                <Twitter />
                        
                            </a>
                            
                        </li>

                        <li>
                            
                            <a 
                                className='text-secondary text-lg hover:opacity-80 transition duration-300 ease-in-out' 
                                href='mailto:zohireddig.dev@gmail.com'
                            >

                                <Mail />
                        
                            </a>
                            
                        </li>

                    </ul>

                </div>

            </div>

        </header>
    );
};

export default Header;