import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// About Component
export default function About() {
    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="absolute -inset-2 bg-purple-400/20 rounded-xl blur-xl"></div>
                        <img 
                            src="https://picsum.photos/800/600?random=2" 
                            alt="About Us" 
                            className="relative z-10 rounded-xl shadow-2xl transform transition-all hover:scale-105"
                        />
                    </div>
                    
                    <div className="space-y-6">
                        <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full inline-block">
                            Our Story
                        </div>
                        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
                            Innovating 
                            <span className="block text-4xl text-purple-700 mt-2">
                                Beyond Boundaries
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            We are a passionate team of developers and designers dedicated to creating transformative digital experiences that push the boundaries of technology and creativity.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            Our mission is to deliver innovative solutions that solve complex challenges, empowering businesses and individuals to achieve their full potential through cutting-edge technology.
                        </p>
                        
                        <div className="flex space-x-4">
                            <Link
                                to="/contact"
                                className="px-6 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition-all transform hover:scale-105 shadow-lg"
                            >
                                Join Our Journey
                            </Link>
                            <Link
                                to="#"
                                className="px-6 py-3 bg-transparent border-2 border-purple-700 text-purple-700 rounded-lg hover:bg-purple-50 transition-all transform hover:scale-105"
                            >
                                Our Team
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}