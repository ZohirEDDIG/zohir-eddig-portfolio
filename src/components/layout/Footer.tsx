const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className='mt-20 border-t border-white/10 py-6'>

            <div className='container mx-auto text-center'>

                <p className='text-gray-400 text-sm'>

                    © {year} • Zohir EDDIG — Designed & Built with Next.js

                </p>

            </div>
            
        </footer>
    );
};

export default Footer;