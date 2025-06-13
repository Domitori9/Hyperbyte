'use client';
import AvatarUploader from "@/components/profile/AvatarUploader";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./AuthForm.module.scss";

export default function RegisterPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");
        setError("");
        setLoading(true);
        try {
            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password })
            });
            const data = await res.json();
            if (!res.ok) {
                let errorMsg = data.error || "Помилка реєстрації";
                // Переводим типовые ошибки на украинский
                if (errorMsg.includes("password")) {
                    errorMsg = "Пароль має містити щонайменше 6 символів.";
                } else if (errorMsg.includes("email")) {
                    errorMsg = "Некоректний email або такий email вже зареєстровано.";
                } else if (errorMsg.toLowerCase().includes("network")) {
                    errorMsg = "Помилка мережі. Спробуйте ще раз.";
                }
                setError(errorMsg);
            } else {
                setMessage("Реєстрацію успішно виконано!");
                setName("");
                setEmail("");
                setPassword("");
                setTimeout(() => {
                    router.push("/login");
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
                <div className={styles.authTitle}>Реєстрація</div>
                <form onSubmit={handleRegister} className={styles.authForm}>
                    <label htmlFor="name" className={styles.authLabel}>Ім'я</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className={styles.authInput}
                        placeholder="Введіть ім'я"
                    />
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
                        {loading ? "Реєстрація..." : "Зареєструватися"}
                    </button>
                    {message && <div className={styles.authMessage}>{message}</div>}
                    {error && <div className={styles.authError}>{error}</div>}
                </form>
                <div className={styles.authLink}>
                    Вже є акаунт? <a href="/login">Увійти</a>
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