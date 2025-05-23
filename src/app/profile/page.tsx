"use client";
import AvatarUploader from "@/components/AvatarUploader";
import { useState } from "react";

// Пример текущих данных пользователя (замените на реальные данные из вашего источника)
const mockUser = {
    name: "Иван Иванов",
    email: "ivan@example.com",
};

export default function UserProfile() {
    const [name, setName] = useState(mockUser.name);
    const [email, setEmail] = useState(mockUser.email);
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");
    const [activeTab, setActiveTab] = useState<'info' | 'password'>('info');

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault();
        // Здесь должна быть логика сохранения данных (API-запрос)
        setMessage("Изменения сохранены!");
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 animate-fade-in">
            <div className="w-full max-w-4xl p-8 rounded-3xl shadow-2xl bg-gray-900/90 backdrop-blur-md border border-gray-800 animate-slide-up">
                <h1 className="text-4xl font-extrabold mb-6 text-center text-blue-400 drop-shadow-lg tracking-wide">Профиль</h1>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="flex flex-col items-center md:items-start gap-4 md:w-1/3 w-full">
                        <AvatarUploader />
                        <div className="text-lg mb-2 text-gray-300">Текущая информация:</div>
                        <div className="text-gray-200">Имя: <span className="font-semibold text-white">{mockUser.name}</span></div>
                        <div className="text-gray-200">Email: <span className="font-semibold text-white">{mockUser.email}</span></div>
                    </div>
                    <div className="flex-1 flex flex-col gap-8">
                        <div className="flex gap-4 mb-4">
                            <button
                                type="button"
                                className={`px-6 py-2 rounded-2xl font-bold text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${activeTab === 'info' ? 'bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-lg' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                                onClick={() => setActiveTab('info')}
                            >
                                Личная информация
                            </button>
                            <button
                                type="button"
                                className={`px-6 py-2 rounded-2xl font-bold text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${activeTab === 'password' ? 'bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-lg' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
                                onClick={() => setActiveTab('password')}
                            >
                                Пароль
                            </button>
                        </div>
                        <form onSubmit={handleSave}>
                            {activeTab === 'info' && (
                                <div className="bg-gray-800/90 p-6 rounded-2xl shadow-md border border-gray-700 animate-fade-in">
                                    <h2 className="text-2xl font-semibold mb-4 text-blue-300">Личная информация</h2>
                                    <div className="mb-4">
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-1">Имя</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                            className="w-full px-4 py-2 rounded-xl bg-gray-700 border border-gray-600 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition placeholder-gray-500 shadow-sm"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-1">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            className="w-full px-4 py-2 rounded-xl bg-gray-700 border border-gray-600 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition placeholder-gray-500 shadow-sm"
                                        />
                                    </div>
                                </div>
                            )}
                            {activeTab === 'password' && (
                                <div className="bg-gray-800/90 p-6 rounded-2xl shadow-md border border-gray-700 animate-fade-in">
                                    <h2 className="text-2xl font-semibold mb-4 text-blue-300">Изменить пароль</h2>
                                    <div className="mb-4">
                                        <label htmlFor="current-password" className="block text-sm font-semibold text-gray-300 mb-1">Текущий пароль</label>
                                        <input
                                            type="password"
                                            id="current-password"
                                            value={currentPassword}
                                            onChange={e => setCurrentPassword(e.target.value)}
                                            className="w-full px-4 py-2 rounded-xl bg-gray-700 border border-gray-600 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition placeholder-gray-500 shadow-sm"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="new-password" className="block text-sm font-semibold text-gray-300 mb-1">Новый пароль</label>
                                        <input
                                            type="password"
                                            id="new-password"
                                            value={newPassword}
                                            onChange={e => setNewPassword(e.target.value)}
                                            className="w-full px-4 py-2 rounded-xl bg-gray-700 border border-gray-600 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition placeholder-gray-500 shadow-sm"
                                        />
                                    </div>
                                </div>
                            )}
                            <div className="flex justify-center mt-4">
                                <button
                                    type="submit"
                                    className="px-8 py-2 rounded-2xl bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold text-lg shadow-lg hover:from-blue-700 hover:to-green-600 transition-all duration-200 focus:ring-2 focus:ring-blue-400 focus:outline-none"
                                >
                                    Сохранить изменения
                                </button>
                            </div>
                            {message && (
                                <div className="mt-6 flex justify-center">
                                    <div className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gray-800/80 border border-green-400 text-green-300 font-semibold text-base shadow animate-fade-in">
                                        <svg className="inline-block" width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#22c55e"/><path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                        <span>Изменения сохранены</span>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
                {/* Мои заказы */}
                <div className="w-full mt-10">
                    <h2 className="text-2xl font-semibold mb-4 text-blue-300">Мои заказы</h2>
                    <div className="overflow-x-auto rounded-2xl shadow-md border border-gray-700 bg-gray-800/90">
                        <table className="min-w-full text-white">
                            <thead>
                                <tr>
                                    <th className="py-2 px-4 border-b border-gray-700">ID Заказа</th>
                                    <th className="py-2 px-4 border-b border-gray-700">Дата</th>
                                    <th className="py-2 px-4 border-b border-gray-700">Статус</th>
                                    <th className="py-2 px-4 border-b border-gray-700">Сумма</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Здесь вы можете отобразить список заказов */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}