export type Project = {
    previewInPC: string;
    previewInMobile: string;
    name: string;
    description: string;
    techs: string[];
    url: string;
};

export const projects: Project[] = [
    {
        previewInMobile: '/projects/ZAI-in-mobile.svg',
        previewInPC:'/projects/ZAI-in-pc.svg',
        name: 'ZAI',
        description: 'ZAI is a lightweight full-stack clone of Google’s Gemini, built to replicate the experience of interacting with an AI assistant.',
        techs: ['React', 'TailwindCSS', 'Express', 'Node', 'MongoDB'],
        url: '/'
    },
    {
        previewInMobile: '/projects/ZBlogs-in-mobile.svg',
        previewInPC:'/projects/ZBlogs-in-pc.svg',
        name: 'ZBlogs',
        description: 'ZBlogs is a clean, modern blogging platform inspired by Medium, designed for writers who want a simple yet powerful space to share their ideas.',
        techs: ['React', 'TailwindCSS', 'Express', 'Node', 'MongoDB'],
        url: '/',
    },
    {
        previewInMobile: '/projects/ZPic-in-mobile.svg',
        previewInPC:'/projects/ZPic-in-pc.svg',
        name: 'ZPic',
        description: 'ZPic is a visually driven wallpaper-sharing platform inspired by Wallspic, built for users who love discovering and sharing high-quality images.',
        techs: ['React', 'TailwindCSS', 'Express', 'Node', 'MongoDB'],
        url: '/'
    },
    {
        previewInMobile: '/projects/Netlify-in-mobile.svg',
        previewInPC:'/projects/Netlify-in-pc.svg',
        name: 'Netlify',
        description: 'A pixel-perfect clone of the Netlify landing page, built to replicate its modern UI, responsive layout, and smooth user experience using Next.js and Tailwind CSS.',
        techs: ['Next', 'TailwindCSS'],
        url: '/'
    },
];