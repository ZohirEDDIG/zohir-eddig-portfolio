const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-20 border-t border-white/10 py-6">
            <div className="container mx-auto text-center">
                <p className="text-secondary text-sm">
                    © {year} • Designed & Built by <span className="font-semibold">Zohir EDDIG</span> • Powered by Next.js
                </p>
            </div>
        </footer>
    );
};

export default Footer;
