import { socials } from '../data/socials';

import SectionIntro from './SectionIntro';

const Contact = () => {
    return (
        <section className='mt-20' id='contact'>

            <div className='container mx-auto p-4'>

                <SectionIntro title='Contact' description="Let's get in touch — I'm always open to new opportunities and collaborations." />

                <div className='flex flex-col gap-y-10 mt-10'>

                    <p className='max-w-[600px] text-gray-400'>
                        Feel free to reach out for collaborations, project inquiries, or just to say hello. 
                        I’m always open to connecting with like-minded developers and teams.
                    </p>

                    <div className='grid max-[500px]:grid-cols-1 grid-cols-2 gap-10'>

                        {
                            socials.map((social, index) => (
                            
                                <a 
                                    className={`flex items-center  ${index % 2 !== 0 && 'justify-end'}   gap-x-4 cursor-auto`}
                                    key={index} 
                                    href={social.href} 
                                    target='_blank'
                                >
                                    {index % 2 === 0  

                                    ? 

                                    <>

                                        {social.icon}

                                        <h2 
                                            className='text-gray-400 cursor-pointer duration-300 transition-all ease-in-out hover:text-white hover:underline'
                                        >
                                            
                                            {social.label}
                                        
                                        </h2>

                                    </>
                                    
                                    :

                                    <>

                                        <h2 
                                            className='text-gray-400 cursor-pointer duration-300 transition-all ease-in-out hover:text-white hover:underline'
                                        >
                                            
                                            {social.label}
                                        
                                        </h2>

                                        {social.icon}

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