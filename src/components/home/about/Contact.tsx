import SectionIntro from '../SectionIntro';
import { JSX } from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

type Contact = {
  icon: JSX.Element;
  href: string;
  label: string;
};

const contact: Contact[] = [
    {
        icon: <Github className='text-secondary cursor-pointer select-none duration-300 transition-all ease-in-out hover:drop-shadow-[0_0_0.75rem_var(--color-secondary)]' />,
        href: 'https://github.com/ZohirEDDIG',
        label: '@ZohirEDDIG',
    },
    {
        icon:  <Linkedin className='text-secondary cursor-pointer select-none duration-300 transition-all ease-in-out hover:drop-shadow-[0_0_0.75rem_var(--color-secondary)]'/>,
        href: 'https://www.linkedin.com/in/zohir-eddig-628669317',
        label: '@ZohirEDDIG',
    },
    {
        icon: <Twitter className='text-secondary cursor-pointer select-none duration-300 transition-all ease-in-out hover:drop-shadow-[0_0_0.75rem_var(--color-secondary)]' />,
        href: 'https://x.com/zohireddig',
        label: '@ZohirEDDIG',
    },
    {
        icon: <Mail className='text-secondary cursor-pointer select-none duration-300 transition-all ease-in-out hover:drop-shadow-[0_0_0.75rem_var(--color-secondary)]'/>,
        href: 'mailto:zohireddig.dev@gmail.com',
        label: 'zohireddig.dev@gmail.com',
    },
];


const Contact = () => {
    return (
        <section className='mt-20'>

            <div className='container mx-auto p-4'>

                <SectionIntro title='Contact' description="Let's get in touch" />

                <div className='flex flex-col gap-y-10 mt-10'>

                    <p className='max-w-[600px] text-gray-400'>
                        Feel free to reach out for collaborations, project inquiries, or just to say hello. 
                        I’m always open to connecting with like-minded developers and teams.
                    </p>

                    <div className='grid max-[500px]:grid-cols-1 grid-cols-2 gap-10'>

                        {
                            contact.map((contact, index) => (
                            
                                <a 
                                    className={`flex items-center  ${index % 2 !== 0 && 'justify-end'}   gap-x-4 cursor-auto`}
                                    key={index} 
                                    href={contact.href} 
                                    target='_blank'
                                >
                                    {index % 2 === 0  

                                    ? 

                                    <>

                                        {contact.icon}

                                        <h2 
                                            className='text-gray-400 cursor-pointer duration-300 transition-all ease-in-out hover:text-white hover:underline'
                                        >
                                            
                                            {contact.label}
                                        
                                        </h2>

                                    </>
                                    
                                    :

                                    <>


                                        <h2 
                                            className='text-gray-400 cursor-pointer duration-300 transition-all ease-in-out hover:text-white hover:underline'
                                        >
                                            
                                            {contact.label}
                                        
                                        </h2>

                                        {contact.icon}

                                    </>
                                }


                                </a>

                            ))

                        }

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Contact;