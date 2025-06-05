'use client';

import { useState, useEffect } from 'react';

export default function Search() {
    const phrases = [
        "Поиск...",
        "Найти игровую мышь...",
        "Найти клавиатуру...",
        "Найти наушники...",
        "Найти монитор...",
        "Найти ноутбук..."
    ];

    const [currentPhrase, setCurrentPhrase] = useState('');
    const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentFullPhrase = phrases[currentPhraseIndex];

        let timeout: NodeJS.Timeout;

        if (!isDeleting && currentPhrase === currentFullPhrase) {
            timeout = setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && currentPhrase === '') {
            setIsDeleting(false);
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        } else {
            timeout = setTimeout(() => {
                if (isDeleting) {
                    setCurrentPhrase(currentFullPhrase.substring(0, currentPhrase.length - 1));
                } else {
                    setCurrentPhrase(currentFullPhrase.substring(0, currentPhrase.length + 1));
                }
            }, isDeleting ? 40 : 90);
        }

        return () => clearTimeout(timeout);
    }, [currentPhrase, currentPhraseIndex, isDeleting, phrases]);

    return (
        <form role="search" aria-label="Поиск по сайту" className="w-full relative px-10">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                </svg>
            </span>
            <input
                className="w-full rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition border-gray-300 bg-gray-600 px-10 py-2 text-white placeholder-white"
                type="search"
                name="q"
                placeholder={currentPhrase}
                aria-label="Поиск"
                autoComplete="off"
            />
            
        </form>
    );
}
