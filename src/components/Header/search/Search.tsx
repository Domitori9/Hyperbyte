'use client';

import { useAnimatedPlaceholder } from '@/hooks/useAnimatedPlaceholder';
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

    return (
        <form role="search" aria-label="Пошук по сайту" className={styles.searchForm}>
            <input
                className={styles.searchInput}
                type="search"
                name="q"
                placeholder={currentPhrase}
                aria-label="Пошук"
                autoComplete="off"
            />
            <span className={styles.searchIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z" />
                </svg>
            </span>
        </form>
    );
}
