import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Pricing', path: '/pricing' }
    ];

    return (
        <nav className={`fixed top-0 w-full z-[100] transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md border-b border-slate-100 py-3 shadow-sm' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <Link to="/" className="flex-shrink-0 flex items-center group">
                            <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center mr-3 group-hover:rotate-12 transition-transform shadow-lg shadow-primary-200">
                                <span className="text-white font-black text-xl">F</span>
                            </div>
                            <span className="text-slate-950 text-2xl font-black tracking-tighter">UI Focussed</span>
                        </Link>
                        <div className="hidden md:ml-12 md:flex md:space-x-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`relative px-1 py-2 text-sm font-bold transition-colors ${location.pathname === link.path ? 'text-primary-600' : 'text-slate-500 hover:text-slate-900'}`}
                                >
                                    {link.name}
                                    {location.pathname === link.path && (
                                        <motion.div
                                            layoutId="nav-underline"
                                            className="absolute bottom-0 left-0 w-full h-0.5 bg-primary-600"
                                        />
                                    )}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-6">
                        <button className="text-slate-600 hover:text-slate-950 text-sm font-bold transition-colors">
                            Log in
                        </button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn btn-primary px-6 py-2.5 text-sm font-black shadow-lg shadow-primary-100"
                        >
                            Get Started
                        </motion.button>
                    </div>

                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
                        >
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
                    >
                        <div className="px-4 pt-4 pb-8 space-y-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className={`block px-4 py-3 rounded-xl text-base font-bold ${location.pathname === link.path ? 'bg-primary-50 text-primary-600' : 'text-slate-600 hover:bg-slate-50'}`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-6 grid grid-cols-2 gap-4">
                                <button className="btn btn-secondary py-3 font-bold">Log in</button>
                                <button className="btn btn-primary py-3 font-bold">Sign up</button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
