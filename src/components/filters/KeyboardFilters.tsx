'use client';
import React, { useState } from "react";

const keyboardBrands = [
  { label: "Logitech", value: "logitech" },
  { label: "Razer", value: "razer" },
  { label: "HyperX", value: "hyperx" },
];

export default function KeyboardFilters() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [price, setPrice] = useState(0);

  return (
    <aside className="w-72 shrink-0 bg-gradient-to-br from-blue-950 via-gray-900 to-gray-950 rounded-3xl shadow-2xl p-8 border border-blue-900 flex flex-col gap-10">
      <div>
        <h2 className="text-xl font-bold mb-5 text-blue-100 tracking-wide">Производитель</h2>
        <select
          className="w-full rounded-xl px-4 py-2 bg-gray-700 text-white border border-blue-400/30 focus:ring-2 focus:ring-blue-400 outline-none transition-all duration-200 hover:border-blue-400"
          value={selectedBrand}
          onChange={e => setSelectedBrand(e.target.value)}
        >
          <option value="">Все</option>
          {keyboardBrands.map(brand => (
            <option key={brand.value} value={brand.value}>{brand.label}</option>
          ))}
        </select>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-5 text-blue-100 tracking-wide">Цена</h2>
        <div className="flex flex-col gap-3">
          <input
            type="range"
            min="0"
            max="10000"
            step="100"
            value={price}
            onChange={e => setPrice(Number(e.target.value))}
            className="w-full accent-blue-700 h-2 rounded-lg appearance-none bg-blue-900 outline-none"
          />
          <div className="flex justify-between text-sm text-blue-300 font-mono">
            <span>0₴</span>
            <span className="font-bold text-blue-400">{price.toLocaleString()}₴</span>
            <span>10 000₴</span>
          </div>
        </div>
      </div>
      <button
        className="mt-2 py-2 rounded-xl bg-gradient-to-r from-blue-700 to-blue-500 text-white font-semibold shadow hover:from-blue-800 hover:to-blue-600 transition"
        onClick={() => {
          setSelectedBrand("");
          setPrice(0);
        }}
      >
        Сбросить фильтры
      </button>
    </aside>
  );
}
