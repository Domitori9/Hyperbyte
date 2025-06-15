import { useState } from 'react';

import Link from 'next/link';

interface CategoriesMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const categories = [
    { id: 1, name: 'ПК', href: '/products/pc' },
    { id: 2, name: 'Миші', href: '/products/mouse' },
    { id: 3, name: 'Клавіатури', href: '/products/keyboard' },
    { id: 4, name: 'Монітори', href: '/products/monitor' },
    { id: 5, name: 'Навушники', href: '/products/headphones' },
    { id: 6, name: 'Килимки', href: '/products/pad' },
    { id: 7, name: 'Ноутбуки', href: '/products/laptop' },
];

export default function CategoriesMenu({ isOpen, onClose }: CategoriesMenuProps) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 flex items-center justify-center">
            <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl p-6 w-[90%] max-w-md border border-gray-700/50">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold text-white">Категорії</h2>
                    <button 
                        onClick={onClose}
                        className="text-gray-400 hover:text-white transition-colors"
                    >
                        ✕
                    </button>
                </div>
                <div className="space-y-3">
                    {categories.map((category) => (
                        <Link
                            key={category.id}
                            href={category.href}
                            className="block p-4 bg-gray-700/50 hover:bg-gray-700/80 rounded-xl transition-colors text-white"
                            onClick={onClose}
                        >
                            {category.name}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
} 