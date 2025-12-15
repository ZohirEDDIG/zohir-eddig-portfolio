import { type JSX } from 'react';

import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

type Social = {
    icon: JSX.Element;
    href: string;
    label: string;
};

export const socials: Social[] = [
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