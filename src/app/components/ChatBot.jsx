'use client';

import React, { useState } from 'react';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {/* Coming Soon Modal */}
            {isOpen && (
                <div className="absolute bottom-20 right-0 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 mb-2">
                    {/* Header */}
                    <div className="flex items-center justify-between p-4 border-b bg-[#D7242A] text-white rounded-t-lg">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                            </div>
                            <div>
                                <h3 className="font-semibold">A4Realty Assistant</h3>
                                <p className="text-xs opacity-90">Coming Soon</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white hover:bg-white/20 p-1 rounded"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Coming Soon Content */}
                    <div className="p-8 text-center bg-gray-50">
                        <div className="mb-4">
                            <svg className="w-16 h-16 mx-auto text-[#D7242A] opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Coming Soon!</h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Our AI-powered assistant is currently under development.
                            We're working hard to bring you an amazing experience.
                        </p>
                        <div className="bg-white p-3 rounded-lg border border-gray-200">
                            <p className="text-xs text-gray-500">
                                In the meantime, feel free to explore our properties or contact our team directly.
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Floating Chat Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-[#D7242A] hover:bg-[#D7242A]/90 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105"
                aria-label="Toggle chat"
            >
                {isOpen ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                    </svg>
                )}
            </button>
        </div>
    );
};

export default ChatBot;