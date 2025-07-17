import React from 'react'
import { Link } from 'react-router-dom';


export default function Home() {
    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full inline-block">
                            New Features Available
                        </div>
                        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
                            Revolutionize Your 
                            <span className="block text-4xl text-purple-700 mt-2">
                                Digital Experience
                            </span>
                        </h1>
                        <p className="text-xl text-gray-600">
                            Discover innovative solutions that transform the way you work and interact with technology.
                        </p>
                        
                        <div className="flex space-x-4">
                            <Link
                                to="#"
                                className="px-6 py-3 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition-all transform hover:scale-105 shadow-lg flex items-center"
                            >
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="h-5 w-5 mr-2" 
                                    viewBox="0 0 20 20" 
                                    fill="currentColor"
                                >
                                    <path 
                                        fillRule="evenodd" 
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" 
                                        clipRule="evenodd" 
                                    />
                                </svg>
                                Get Started
                            </Link>
                            <Link
                                to="#"
                                className="px-6 py-3 bg-transparent border-2 border-purple-700 text-purple-700 rounded-lg hover:bg-purple-50 transition-all transform hover:scale-105"
                            >
                                Learn More
                            </Link>
                        </div>
                    </div>
                    
                    <div className="relative">
                        <div className="absolute -inset-2 bg-purple-400/20 rounded-xl blur-xl"></div>
                        <img 
                            src="https://picsum.photos/800/600?random=1" 
                            alt="Hero Visual" 
                            className="relative z-10 rounded-xl shadow-2xl transform transition-all hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}