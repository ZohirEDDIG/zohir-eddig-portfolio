export type Education = {
    id: number;
    duration: string;
    place: string;
    name: string;
    description: string;
};

export const education: Education[] = [
    {
        id: 1,
        duration: '2022 - 2023',
        place: 'Al Mouahidine HS Khouribga',
        name: 'Bachelor\'s Degree',
        description: 'Completed a one-year foundational bachelor\'s program focused on general education and core subjects.',
    },
    {
        id: 2,
        duration: '2023 - 2025',
        place: 'ISGI Khouribga',
        name: 'Full Stack Developer Degree',
        description: 'Pursuing an intensive two-year program covering front-end and back-end web development.',
    },
    {
        id: 3,
        duration: '2025 - 2026',
        place: 'ENSA Khouribga',
        name: 'Web & Mobile Engineering License',
        description: 'Pursuing an intensive year program covering both web and mobile developement.'
    },
];

export type Experience = {
    id: number;
    duration: string;
    place: string;
    role: string;
    description: string;
};

export const experiences: Experience[] = [
    {
        id: 1,
        duration: '1 Feb 2025 - 28 Feb 2025',
        place: 'Province Khouribga',
        role: 'Full Stack Web Developer Intern',
        description: 'Completed a 1-month internship focused on developing a blog platform called ZBlogs. Worked on both front-end and back-end tasks.',
    },
    {
        id: 2,
        duration: '1 Feb 2025 - 28 Feb 2025',
        place: 'Province Khouribga',
        role: 'Full Stack Web Developer Intern',
        description: 'Completed a 1-month internship focused on developing a blog platform called ZBlogs. Worked on both front-end and back-end tasks.',
    },
    {
        id: 3,
        duration: '1 Feb 2025 - 28 Feb 2025',
        place: 'Province Khouribga',
        role: 'Full Stack Web Developer Intern',
        description: 'Completed a 1-month internship focused on developing a blog platform called ZBlogs. Worked on both front-end and back-end tasks.',
    },
];

export type Certification = {
    id: number,
    name: string;
    evidence: string;
};

export const certifications: Certification[] = [
    {
        id: 1,
        name: 'Front End Development Libraries',
        evidence: '/certifications/FrontEndDevelopmentLibraries.png',
    },
    {
        id: 2,
        name: 'Front End Development Libraries',
        evidence: '/certifications/FrontEndDevelopmentLibraries.png',
    },
    {
        id: 3,
        name: 'Front End Development Libraries',
        evidence: '/certifications/FrontEndDevelopmentLibraries.png',
    },
];