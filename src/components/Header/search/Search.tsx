'use client';

import { useState, useEffect, useRef } from 'react';
import { useAnimatedPlaceholder } from '@/hooks/useAnimatedPlaceholder';
import { useRouter } from 'next/navigation';
import styles from './Search.module.scss';

export default function Search() {
    const phrases = [
        "Пошук...",
        "Знайти ігрову мишу...",
        "Знайти клавіатуру...",
        "Знайти навушники...",
        "Знайти монітор...",
        "Знайти ноутбук..."
    ];

    const currentPhrase = useAnimatedPlaceholder(phrases);
    const [query, setQuery] = useState("");
    const [results, setResults] = useState<any[]>([]);
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    useEffect(() => {
        if (query.trim().length < 2) {
            setResults([]);
            return;
        }
        const timeout = setTimeout(() => {
            fetch('/api/products')
                .then(res => res.json())
                .then(data => {
                    setResults(
                        (data.products || []).filter((p: any) =>
                            (p.name || p.title || "").toLowerCase().includes(query.toLowerCase())
                        ).slice(0, 7)
                    );
                });
        }, 200);
        return () => clearTimeout(timeout);
    }, [query]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setShowDropdown(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/search?q=${encodeURIComponent(query)}`);
        }
    };

    return (
        <div className={styles.searchForm} ref={dropdownRef}>
            <form role="search" aria-label="Пошук по сайту" onSubmit={handleSubmit}>
                <input
                    className={styles.searchInput}
                    type="search"
                    name="q"
                    placeholder={currentPhrase}
                    aria-label="Пошук"
                    autoComplete="off"
                    value={query}
                    onChange={e => {
                        setQuery(e.target.value);
                        setShowDropdown(true);
                    }}
                    onFocus={() => setShowDropdown(true)}
                />
                <span className={styles.searchIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                    </svg>
                </span>
            </form>
            {showDropdown && results.length > 0 && (
                <div className={styles.searchDropdown}>
                    {results.map(product => (
                        <a
                            key={product.id}
                            href={`/products/${product.category}/${product.id}`}
                            className={styles.searchResult}
                            onClick={() => setShowDropdown(false)}
                        >
                            {product.name || product.title}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
}
