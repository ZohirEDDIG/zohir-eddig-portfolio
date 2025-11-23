type Props = {
    title: string;
    description: string
};

const SectionIntro = ({ title, description }: Props) => {
    return (
        <div className='flex flex-col items-center gap-y-2'>

            <h1 className='text-secondary text-4xl'>{title}</h1>
            
            <p className='text-gray-300 text-center max-w-[400px]'>{description}</p>

        </div>
    );
};

export default SectionIntro;