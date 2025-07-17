import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    return (
        <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-800 to-purple-900 shadow-2xl">
            <nav className="bg-white/10 backdrop-blur-md border-b border-purple-700/30">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://picsum.photos/200/200?grayscale"
                                className="h-12 w-12 rounded-full ring-4 ring-purple-500/50 transition-transform hover:rotate-6"
                                alt="Logo"
                            />
                            <span className="ml-3 text-xl font-bold text-white tracking-wider">DevCoder-247</span>
                        </Link>
                        
                        <div className="flex items-center space-x-4">
                            <div className="hidden md:flex space-x-6">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) => `
                                        text-white transition-all duration-300
                                        ${isActive 
                                            ? 'text-orange-400 font-bold' 
                                            : 'hover:text-orange-300 hover:translate-y-[-2px]'}
                                    `}
                                >
                                    Home
                                </NavLink>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) => `
                                        text-white transition-all duration-300
                                        ${isActive 
                                            ? 'text-orange-400 font-bold' 
                                            : 'hover:text-orange-300 hover:translate-y-[-2px]'}
                                    `}
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) => `
                                        text-white transition-all duration-300
                                        ${isActive 
                                            ? 'text-orange-400 font-bold' 
                                            : 'hover:text-orange-300 hover:translate-y-[-2px]'}
                                    `}
                                >
                                    Contact
                                </NavLink>
                            </div>
                            
                            <div className="flex space-x-4">
                                <Link
                                    to="#"
                                    className="px-4 py-2 text-white bg-transparent border border-white/30 rounded-lg hover:bg-white/10 transition-all transform hover:scale-105"
                                >
                                    Log In
                                </Link>
                                <Link
                                    to="#"
                                    className="px-4 py-2 text-white bg-orange-600 rounded-lg hover:bg-orange-700 transition-all transform hover:scale-105 shadow-lg"
                                >
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}