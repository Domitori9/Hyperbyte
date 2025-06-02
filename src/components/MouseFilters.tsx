'use client';
import React, { useState } from "react";

const categories = [
  { label: "Процессоры", value: "cpu" },
  { label: "Видеокарты", value: "gpu" },
  { label: "Оперативная память", value: "ram" },
];

export default function ProductFilters() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [price, setPrice] = useState(0);

  const handleCategoryChange = (value: string) => {
    setSelectedCategories((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  return (
    <aside className="w-72 shrink-0 bg-gradient-to-br from-blue-950 via-gray-900 to-gray-950 rounded-3xl shadow-2xl p-8 border border-blue-900 flex flex-col gap-10">
      {/* Категории */}
      <div>
        <h2 className="text-xl font-bold mb-5 text-blue-100 tracking-wide">
          Категории
        </h2>
        <ul className="space-y-4">
          {categories.map((cat) => (
            <li key={cat.value}>
              <label className="flex items-center gap-4 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat.value)}
                  onChange={() => handleCategoryChange(cat.value)}
                  className="accent-blue-600 w-5 h-5 rounded focus:ring-2 focus:ring-blue-500 border-2 border-blue-800 bg-gray-900"
                />
                <span
                  className={`text-blue-200 group-hover:text-blue-400 transition text-base ${
                    selectedCategories.includes(cat.value)
                      ? "font-bold text-blue-400"
                      : ""
                  }`}
                >
                  {cat.label}
                </span>
              </label>
            </li>
          ))}
        </ul>
      </div>
      {/* Фильтр по цене */}
      <div>
        <h2 className="text-xl font-bold mb-5 text-blue-100 tracking-wide">
          Цена
        </h2>
        <div className="flex flex-col gap-3">
          <input
            type="range"
            min="0"
            max="100000"
            step="100"
            value={price}
            onChange={handlePriceChange}
            className="w-full accent-blue-700 h-2 rounded-lg appearance-none bg-blue-900 outline-none"
          />
          <div className="flex justify-between text-sm text-blue-300 font-mono">
            <span>0₴</span>
            <span className="font-bold text-blue-400">
              {price.toLocaleString()}₴
            </span>
            <span>100 000₴</span>
          </div>
        </div>
      </div>
      {/* Сбросить фильтры */}
      <button
        className="mt-2 py-2 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold shadow hover:from-blue-800 hover:to-blue-600 transition"
        onClick={() => {
          setSelectedCategories([]);
          setPrice(0);
        }}
      >
        Сбросить фильтры
      </button>
    </aside>
  );
}
