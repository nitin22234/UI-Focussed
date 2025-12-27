const Footer = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex justify-center space-x-6 md:order-2">
                        <span className="text-gray-400 hover:text-gray-500 cursor-pointer text-sm">Twitter</span>
                        <span className="text-gray-400 hover:text-gray-500 cursor-pointer text-sm">GitHub</span>
                        <span className="text-gray-400 hover:text-gray-500 cursor-pointer text-sm">LinkedIn</span>
                    </div>
                    <div className="mt-8 md:mt-0 md:order-1">
                        <p className="text-center text-base text-gray-400">
                            &copy; 2025 FocusFlow Inc. Built for the UI Engineering Assignment.
                        </p>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-200 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Product</h4>
                        <ul className="mt-4 space-y-4">
                            <li className="text-base text-gray-500 hover:text-gray-900 cursor-pointer">Features</li>
                            <li className="text-base text-gray-500 hover:text-gray-900 cursor-pointer">Integrations</li>
                            <li className="text-base text-gray-500 hover:text-gray-900 cursor-pointer">Pricing</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h4>
                        <ul className="mt-4 space-y-4">
                            <li className="text-base text-gray-500 hover:text-gray-900 cursor-pointer">About</li>
                            <li className="text-base text-gray-500 hover:text-gray-900 cursor-pointer">Blog</li>
                            <li className="text-base text-gray-500 hover:text-gray-900 cursor-pointer">Careers</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h4>
                        <ul className="mt-4 space-y-4">
                            <li className="text-base text-gray-500 hover:text-gray-900 cursor-pointer">Privacy</li>
                            <li className="text-base text-gray-500 hover:text-gray-900 cursor-pointer">Terms</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h4>
                        <ul className="mt-4 space-y-4">
                            <li className="text-base text-gray-500 hover:text-gray-900 cursor-pointer">Help Center</li>
                            <li className="text-base text-gray-500 hover:text-gray-900 cursor-pointer">Contact</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
