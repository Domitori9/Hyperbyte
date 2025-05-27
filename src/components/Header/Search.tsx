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
    const [typingSpeed, setTypingSpeed] = useState(100);

    useEffect(() => {
        const currentFullPhrase = phrases[currentPhraseIndex];
        
        if (!isDeleting && currentPhrase === currentFullPhrase) {
            // Пауза перед удалением
            setTimeout(() => setIsDeleting(true), 2000);
            return;
        }

        if (isDeleting && currentPhrase === '') {
            setIsDeleting(false);
            setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
            return;
        }

        const timeout = setTimeout(() => {
            if (isDeleting) {
                setCurrentPhrase(currentFullPhrase.substring(0, currentPhrase.length - 1));
                setTypingSpeed(50);
            } else {
                setCurrentPhrase(currentFullPhrase.substring(0, currentPhrase.length + 1));
                setTypingSpeed(100);
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [currentPhrase, currentPhraseIndex, isDeleting, phrases]);

    return (
        <form role="search" aria-label="Поиск по сайту" className="w-full">
            <input
                className="w-full rounded-2xl border border-gray-300 bg-white/80 px-4 py-2 text-gray-900 placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                type="search"
                name="q"
                placeholder={currentPhrase}
                aria-label="Поиск"
            />
        </form>
    );
}