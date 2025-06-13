'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./AuthForm.module.scss";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

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
                let errorMsg = data.error || "Помилка входу";
                // Переводим типовые ошибки на украинский
                if (errorMsg.toLowerCase().includes("invalid login credentials")) {
                    errorMsg = "Невірний email або пароль.";
                } else if (errorMsg.includes("email")) {
                    errorMsg = "Некоректний email або такий email не зареєстровано.";
                } else if (errorMsg.toLowerCase().includes("network")) {
                    errorMsg = "Помилка мережі. Спробуйте ще раз.";
                }
                setError(errorMsg);
            } else {
                setMessage("Вхід виконано!");
                setEmail("");
                setPassword("");
                // Можно сохранить токен в cookie, если backend не делает это сам
                if (data.session?.access_token) {
                    document.cookie = `sb-access-token=${data.session.access_token}; path=/;`;
                }
                setTimeout(() => {
                    router.push("/");
                }, 1000);
            }
        } catch (err) {
            setError("Помилка мережі");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.authContainer + ' ' + styles.animateFadeIn}>
            <div className={styles.authCard + ' ' + styles.animateSlideUp}>
                <div className={styles.authTitle}>Вхід</div>
                <form onSubmit={handleLogin} className={styles.authForm}>
                    <label htmlFor="email" className={styles.authLabel}>Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className={styles.authInput}
                        placeholder="Введіть email"
                    />
                    <label htmlFor="password" className={styles.authLabel}>Пароль</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className={styles.authInput}
                        placeholder="Введіть пароль"
                    />
                    <button
                        type="submit"
                        className={styles.authButton}
                        disabled={loading}
                    >
                        {loading ? "Вхід..." : "Увійти"}
                    </button>
                    {message && <div className={styles.authMessage}>{message}</div>}
                    {error && <div className={styles.authError}>{error}</div>}
                </form>
                <div className={styles.authLink}>
                    Немає акаунту? <a href="/register">Зареєструйтесь</a>
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