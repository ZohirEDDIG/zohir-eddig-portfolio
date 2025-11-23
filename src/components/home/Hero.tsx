import { MoveRight, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Hero = () => {
    return (
        <section className='h-[520px]'>
            
            <div className='container h-full p-4 mx-auto flex justify-between items-center relative'>

                <div className='flex gap-x-10'>
                    
                    <div className='hidden md:block horizontal-line'>

                        <ul className='flex flex-col gap-y-8'>

                            <li>
                                
                                <a 
                                    className='text-gray-300 text-lg hover:opacity-80 transition duration-300 ease-in-out' 
                                    href='https://github.com/ZohirEDDIG'
                                >

                                    <Github />
                            
                                </a>

                            </li>

                            <li>
                                
                                <a 
                                    className='text-gray-300 text-lg hover:opacity-80 transition duration-300 ease-in-out' 
                                    href='https://www.linkedin.com/in/zohir-eddig-628669317'
                                >

                                    <Linkedin />
                            
                                </a>
                                
                            </li>

                            <li>
                                
                                <a 
                                    className='text-gray-300 text-lg hover:opacity-80 transition duration-300 ease-in-out' 
                                    href='https://x.com/zohireddig'
                                >

                                    <Twitter />
                            
                                </a>
                                
                            </li>

                            <li>
                                
                                <a 
                                    className='text-gray-300 text-lg hover:opacity-80 transition duration-300 ease-in-out' 
                                    href='mailto:zohireddig.dev@gmail.com'
                                >

                                    <Mail />
                            
                                </a>
                                
                            </li>

                        </ul>

                    </div>

                    <div className='flex gap-y-2.5 flex-col'>

                        <h6 className='text-secondary'>Hi, my name is</h6>

                        <h1 className='text-white text-4xl'>Zohir EDDIG.</h1>

                        <h1 className='text-gray-300 text-4xl'>Software Developer.</h1>

                        <p className='max-w-[580px] text-gray-300'>
                            I specialize in building <span className='text-secondary'>modern</span>, <span className='text-secondary'>scalable</span> web and mobile applications from front to back. 
                            With a strong focus on <span className='text-secondary'>performance</span> and <span className='text-secondary'>user experience</span>, I create clean interfaces and <span className='text-secondary'>efficient</span> backend systems using the latest technologies.
                        </p>

                        <button className='text-secondary w-fit px-4 py-2 mt-2.5 border border-secondary flex items-center gap-x-2 hover:opacity-80 transition duration-300 ease-in-out' type='button'>
                            
                            Explore my Work

                            <MoveRight className='animate-pulse'/>
                        
                        </button>

                    </div>

                </div>

                <div className='hidden md:block horizontal-line'>
                    
                    <p className='text-gray-300 text-lg mb-25 writing-mode-vertical'>zohireddig.dev@gmail.com</p>

                </div>

            </div>

        </section>
    );
};

export default Hero;