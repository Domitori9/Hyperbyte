"use client";
import AvatarUploader from "@/components/profile/AvatarUploader";
import { useState } from "react";

// Пример текущих данных пользователя (замените на реальные данные из вашего источника)
const mockUser = {
    name: "Дмитро Дегтяр",
    email: "domitori@gmail.com",
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
        setMessage("Зміни збережено!");
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-12 animate-fade-in">
            <div className="w-full max-w-5xl p-10 rounded-[2.5rem] shadow-2xl bg-white/5 backdrop-blur-xl border border-sky-900/40 animate-slide-up relative overflow-hidden">
                {/* Декоративные элементы */}
                <div className="absolute -top-10 -left-10 w-40 h-40 bg-sky-400/20 rounded-full blur-2xl z-0" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl z-0" />
                <h1 className="text-4xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 drop-shadow-xl tracking-wide uppercase z-10 relative">Профіль</h1>
                <div className="flex flex-col md:flex-row gap-12 items-start z-10 relative">
                    <div className="flex flex-col items-center md:items-start gap-6 md:w-1/3 w-full">
                        <div className="rounded-full border-4 border-sky-400/40 shadow-xl p-2 bg-gray-900/80">
                            <AvatarUploader />
                        </div>
                        <div className="text-lg mb-2 text-sky-200 font-semibold">Поточна інформація:</div>
                        <div className="text-sky-100">Ім'я: <span className="font-bold">{mockUser.name}</span></div>
                        <div className="text-sky-100">Email: <span className="font-bold">{mockUser.email}</span></div>
                    </div>
                    <div className="flex-1 flex flex-col gap-8">
                        <div className="flex gap-4 mb-4">
                            <button
                                type="button"
                                className={`px-7 py-3 rounded-2xl font-bold text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400 ${activeTab === 'info' ? 'bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-500 shadow-lg' : 'bg-gray-800/80 text-sky-200 hover:bg-gray-700/80'}`}
                                onClick={() => setActiveTab('info')}
                            >
                                Особиста інформація
                            </button>
                            <button
                                type="button"
                                className={`px-7 py-3 rounded-2xl font-bold text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400 ${activeTab === 'password' ? 'bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-500 shadow-lg' : 'bg-gray-800/80 text-sky-200 hover:bg-gray-700/80'}`}
                                onClick={() => setActiveTab('password')}
                            >
                                Пароль
                            </button>
                        </div>
                        <form onSubmit={handleSave} className="w-full">
                            {activeTab === 'info' && (
                                <div className="bg-gray-900/80 p-8 rounded-2xl shadow-xl border border-sky-900/30 animate-fade-in">
                                    <h2 className="text-2xl font-bold mb-6 text-sky-300">Особиста інформація</h2>
                                    <div className="mb-6">
                                        <label htmlFor="name" className="block text-base font-semibold text-sky-200 mb-2">Ім'я</label>
                                        <input
                                            type="text"
                                            id="name"
                                            value={name}
                                            onChange={e => setName(e.target.value)}
                                            className="w-full px-5 py-3 rounded-xl bg-gray-800 border border-sky-900 text-sky-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition placeholder-gray-500 shadow-sm text-lg"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="email" className="block text-base font-semibold text-sky-200 mb-2">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            value={email}
                                            onChange={e => setEmail(e.target.value)}
                                            className="w-full px-5 py-3 rounded-xl bg-gray-800 border border-sky-900 text-sky-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition placeholder-gray-500 shadow-sm text-lg"
                                        />
                                    </div>
                                </div>
                            )}
                            {activeTab === 'password' && (
                                <div className="bg-gray-900/80 p-8 rounded-2xl shadow-xl border border-sky-900/30 animate-fade-in">
                                    <h2 className="text-2xl font-bold mb-6 text-sky-300">Змінити пароль</h2>
                                    <div className="mb-6">
                                        <label htmlFor="current-password" className="block text-base font-semibold text-sky-200 mb-2">Поточний пароль</label>
                                        <input
                                            type="password"
                                            id="current-password"
                                            value={currentPassword}
                                            onChange={e => setCurrentPassword(e.target.value)}
                                            className="w-full px-5 py-3 rounded-xl bg-gray-800 border border-sky-900 text-sky-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition placeholder-gray-500 shadow-sm text-lg"
                                        />
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="new-password" className="block text-base font-semibold text-sky-200 mb-2">Новий пароль</label>
                                        <input
                                            type="password"
                                            id="new-password"
                                            value={newPassword}
                                            onChange={e => setNewPassword(e.target.value)}
                                            className="w-full px-5 py-3 rounded-xl bg-gray-800 border border-sky-900 text-sky-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition placeholder-gray-500 shadow-sm text-lg"
                                        />
                                    </div>
                                </div>
                            )}
                            <div className="flex justify-center mt-6">
                                <button
                                    type="submit"
                                    className="px-10 py-3 rounded-2xl bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-500 text-white font-bold text-lg shadow-lg hover:from-cyan-400 hover:to-sky-500 transition-all duration-200 focus:ring-2 focus:ring-sky-400 focus:outline-none"
                                >
                                    Зберегти зміни
                                </button>
                            </div>
                            {message && (
                                <div className="mt-8 flex justify-center">
                                    <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900/80 border border-green-400 text-green-300 font-semibold text-lg shadow animate-fade-in">
                                        <svg className="inline-block" width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#22c55e"/><path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                        <span>Зміни збережено</span>
                                    </div>
                                </div>
                            )}
                        </form>
                    </div>
                </div>
                {/* Мої замовлення */}
                <div className="w-full mt-14 z-10 relative">
                    <h2 className="text-2xl font-bold mb-6 text-sky-300">Мої замовлення</h2>
                    <div className="overflow-x-auto rounded-2xl shadow-xl border border-sky-900/30 bg-gray-900/80">
                        <table className="min-w-full text-sky-100">
                            <thead>
                                <tr>
                                    <th className="py-3 px-6 border-b border-sky-900/30">ID Замовлення</th>
                                    <th className="py-3 px-6 border-b border-sky-900/30">Дата</th>
                                    <th className="py-3 px-6 border-b border-sky-900/30">Статус</th>
                                    <th className="py-3 px-6 border-b border-sky-900/30">Сума</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* Тут ви можете відобразити список замовлень */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}