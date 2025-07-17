import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <Link to="/" className="flex items-center space-x-3">
                            <img
                                src="https://picsum.photos/200/200?grayscale"
                                className="h-16 w-16 rounded-full ring-4 ring-purple-500/50"
                                alt="Logo"
                            />
                            <span className="text-2xl font-bold tracking-wider">DevCoder-247</span>
                        </Link>
                        <p className="mt-4 text-gray-300 text-sm">
                            Empowering innovation through cutting-edge technology and design.
                        </p>
                    </div>
                    
                    <div>
                        <h3 className="font-semibold text-lg mb-4 text-orange-400">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-white/80 hover:text-orange-300 transition-colors">Home</Link></li>
                            <li><Link to="/about" className="text-white/80 hover:text-orange-300 transition-colors">About</Link></li>
                            <li><Link to="/contact" className="text-white/80 hover:text-orange-300 transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="font-semibold text-lg mb-4 text-orange-400">Resources</h3>
                        <ul className="space-y-2">
                            <li><Link to="#" className="text-white/80 hover:text-orange-300 transition-colors">Blog</Link></li>
                            <li><Link to="#" className="text-white/80 hover:text-orange-300 transition-colors">Documentation</Link></li>
                            <li><Link to="#" className="text-white/80 hover:text-orange-300 transition-colors">Support</Link></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="font-semibold text-lg mb-4 text-orange-400">Connect</h3>
                        <div className="flex space-x-4">
                            {['GitHub', 'Twitter', 'LinkedIn', 'Discord'].map((platform) => (
                                <Link 
                                    key={platform} 
                                    to="https://github.com/Devcoder-247"
                                    className="text-white/80 hover:text-orange-300 transition-transform hover:scale-110"
                                >
                                    {platform}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-purple-700/30 text-center">
                    <p className="text-sm text-gray-300">
                        © {new Date().getFullYear()} DevCoder-247. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}