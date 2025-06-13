'use client';
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");
        setError("");
        setLoading(true);
        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error || "Помилка входу");
            } else {
                setMessage("Вхід виконано!");
                setEmail("");
                setPassword("");
                // Можно сохранить токен в cookie, если backend не делает это сам
                if (data.session?.access_token) {
                    document.cookie = `sb-access-token=${data.session.access_token}; path=/;`;
                }
            }
        } catch (err) {
            setError("Помилка мережі");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center py-12 animate-fade-in">
            <div className="w-full max-w-lg p-10 rounded-[2.5rem] shadow-2xl bg-white/5 backdrop-blur-xl border border-sky-900/40 animate-slide-up relative overflow-hidden">
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-sky-400/20 rounded-full blur-2xl z-0" />
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl z-0" />
                <h1 className="text-3xl font-extrabold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-500 drop-shadow-xl tracking-wide uppercase z-10 relative">Вхід</h1>
                <form onSubmit={handleLogin} className="flex flex-col gap-6 z-10 relative">
                    <div>
                        <label htmlFor="email" className="block text-base font-semibold text-sky-200 mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="w-full px-5 py-3 rounded-xl bg-gray-800 border border-sky-900 text-sky-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition placeholder-gray-500 shadow-sm text-lg"
                            placeholder="Введіть email"
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-base font-semibold text-sky-200 mb-2">Пароль</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            className="w-full px-5 py-3 rounded-xl bg-gray-800 border border-sky-900 text-sky-100 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 outline-none transition placeholder-gray-500 shadow-sm text-lg"
                            placeholder="Введіть пароль"
                        />
                    </div>
                    <button
                        type="submit"
                        className="px-10 py-3 rounded-2xl bg-gradient-to-r from-sky-500 via-cyan-400 to-blue-500 text-white font-bold text-lg shadow-lg hover:from-cyan-400 hover:to-sky-500 transition-all duration-200 focus:ring-2 focus:ring-sky-400 focus:outline-none mt-2"
                        disabled={loading}
                    >
                        {loading ? "Вхід..." : "Увійти"}
                    </button>
                    {message && (
                        <div className="flex justify-center mt-4">
                            <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900/80 border border-green-400 text-green-300 font-semibold text-lg shadow animate-fade-in">
                                <svg className="inline-block" width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#22c55e"/><path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                <span>{message}</span>
                            </div>
                        </div>
                    )}
                    {error && (
                        <div className="flex justify-center mt-4">
                            <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-900/80 border border-red-400 text-red-300 font-semibold text-lg shadow animate-fade-in">
                                <svg className="inline-block" width="22" height="22" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#ef4444"/><path d="M7 13l3 3 7-7" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                                <span>{error}</span>
                            </div>
                        </div>
                    )}
                </form>
                <div className="mt-8 text-center text-sky-200">
                    Немає акаунту? <a href="/register" className="text-sky-400 underline hover:text-sky-300 transition">Зареєструйтесь</a>
                </div>
            </div>
        </div>
    );
}

// Анимации (можно добавить в globals.css):
// .animate-fade-in { animation: fadeIn 0.7s ease; }
// .animate-slide-up { animation: slideUp 0.7s cubic-bezier(.4,2,.6,1); }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes slideUp { from { transform: translateY(40px); opacity: 0; } to { transform: none; opacity: 1; } }