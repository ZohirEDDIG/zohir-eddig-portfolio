'use client';

import Link from 'next/link';

import { useState } from 'react';

import { links } from '../data/links';
import { socials } from '../data/socials';

const Header = () => {
    const [activeLinkHref, setActiveLinkHref] = useState('/');

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

                        {
                            
                            links.map((link, index) => (

                                <li key={index}>
                                    
                                    <Link 
                                        className={`text-gray-300 sm:text-lg underline-secondary 
                                        ${(activeLinkHref === link.href) ? 'after:w-6' : 'hover:after:w-6'}`}
                                        href={link.href}
                                        onClick={() => setActiveLinkHref(link.href)}
                                    >
                                        
                                        {link.label}
                                    
                                    </Link>
                                
                                </li>

                            ))

                        }

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