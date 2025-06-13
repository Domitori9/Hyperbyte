"use client";
import AvatarUploader from "@/components/profile/AvatarUploader";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import styles from "./ProfilePage.module.scss";

export default function UserProfile() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [activeTab, setActiveTab] = useState<'info' | 'password'>('info');
    const [loading, setLoading] = useState(true);
    const [avatarUrl, setAvatarUrl] = useState("");
    const [profile, setProfile] = useState<{ name: string; avatar_url: string } | null>(null);
    const avatarInputRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    async function fetchProfile() {
        setLoading(true);
        setError("");
        try {
            const res = await fetch("/api/auth/profile");
            const data = await res.json();
            if (!res.ok) {
                setError(data.error || "Не вдалося отримати профіль");
            } else {
                setName(data.profile?.name || "");
                setEmail(data.user?.email || "");
                setAvatarUrl(data.profile?.avatar_url || "");
                setProfile(data.profile);
            }
        } catch {
            setError("Помилка мережі");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProfile();
    }, []);

    const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;
        // Можно реализовать загрузку на Supabase Storage, а пока просто превью
        const reader = new FileReader();
        reader.onload = () => setAvatarUrl(reader.result as string);
        reader.readAsDataURL(file);
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setMessage("");
        setError("");
        try {
            const res = await fetch("/api/auth/profile", {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name,
                    email,
                    avatar_url: avatarUrl,
                    currentPassword,
                    newPassword,
                }),
            });
            const data = await res.json();
            if (!res.ok) {
                let errorMsg = data.error || "Помилка оновлення профілю";
                // Переводим типовые ошибки на украинский
                if (errorMsg.includes("Current password is incorrect")) {
                    errorMsg = "Поточний пароль невірний.";
                } else if (errorMsg.includes("New password should be different from the old password")) {
                    errorMsg = "Новий пароль має відрізнятися від старого.";
                } else if (errorMsg.includes("password") && errorMsg.includes("6 characters")) {
                    errorMsg = "Пароль має містити щонайменше 6 символів.";
                } else if (errorMsg.includes("email")) {
                    errorMsg = "Некоректний email або такий email вже зареєстровано.";
                } else if (errorMsg.toLowerCase().includes("network")) {
                    errorMsg = "Помилка мережі. Спробуйте ще раз.";
                } else if (errorMsg.toLowerCase().includes("invalid login credentials")) {
                    errorMsg = "Невірний email або пароль.";
                } else if (errorMsg.toLowerCase().includes("auth session missing")) {
                    errorMsg = "Пароль змінено. Будь ласка, увійдіть знову.";
                }
                setError(errorMsg);
                // Если пароль успешно изменён, разлогиниваем пользователя
                if (data.error && data.error.toLowerCase().includes("auth session missing")) {
                    setTimeout(() => {
                        router.push("/login");
                    }, 1500);
                }
            } else {
                // Если был запрос на смену пароля, разлогиниваем пользователя
                if (currentPassword && newPassword) {
                    setMessage("Пароль змінено. Будь ласка, увійдіть знову.");
                    setTimeout(() => {
                        router.push("/login");
                    }, 1500);
                    return;
                }
                setMessage("Зміни збережено!");
                setCurrentPassword("");
                setNewPassword("");
                await fetchProfile(); // <-- обновляем профиль после сохранения
            }
        } catch {
            setError("Помилка мережі");
        }
    };

    const handleLogout = async () => {
        setError("");
        setMessage("");
        try {
            const res = await fetch("/api/auth/logout", { method: "POST" });
            if (res.ok) {
                setMessage("Ви вийшли з акаунту");
                setTimeout(() => {
                    router.push("/login");
                }, 1000);
            } else {
                const data = await res.json();
                setError(data.error || "Помилка виходу");
            }
        } catch {
            setError("Помилка мережі");
        }
    };

    if (loading) {
        return <div className="text-center text-sky-200 py-20">Завантаження профілю...</div>;
    }

    return (
        <div className={styles.profileContainer + ' ' + styles.animateFadeIn}>
            <div className={styles.profileCard + ' ' + styles.animateSlideUp}>
                <div className={styles.profileHeader}>
                    <div className={styles.avatarEditWrapper}>
                        <img
                            src={avatarUrl || "/ava.jpg"}
                            alt="Аватар"
                            className={styles.profileAvatar}
                        />
                        <button
                            type="button"
                            onClick={() => avatarInputRef.current?.click()}
                            className={styles.avatarEditButton}
                            title="Змінити аватар"
                        >
                            ✎
                        </button>
                        <input
                            type="file"
                            accept="image/*"
                            ref={avatarInputRef}
                            onChange={handleAvatarChange}
                            className={styles.avatarEditInput}
                        />
                    </div>
                    <div className={styles.profileInfo}>
                        <div className={styles.profileName}>{profile?.name || name}</div>
                        <div className={styles.profileEmail}>{email}</div>
                    </div>
                </div>
                <div className={styles.profileTabs}>
                    <button
                        type="button"
                        className={activeTab === 'info' ? `${styles.profileTab} ${styles.profileTabActive}` : styles.profileTab}
                        onClick={() => setActiveTab('info')}
                    >
                        Особиста інформація
                    </button>
                    <button
                        type="button"
                        className={activeTab === 'password' ? `${styles.profileTab} ${styles.profileTabActive}` : styles.profileTab}
                        onClick={() => setActiveTab('password')}
                    >
                        Пароль
                    </button>
                </div>
                <form onSubmit={handleSave} className={styles.profileForm}>
                    {activeTab === 'info' && (
                        <>
                            <label htmlFor="name" className={styles.profileLabel}>Ім'я</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={e => setName(e.target.value)}
                                className={styles.profileInput}
                            />
                            <label htmlFor="email" className={styles.profileLabel}>Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                className={styles.profileInput}
                            />
                            {/* Кнопка смены аватарки теперь только на аватарке, input file остається для роботи */}
                        </>
                    )}
                    {activeTab === 'password' && (
                        <>
                            <label htmlFor="current-password" className={styles.profileLabel}>Поточний пароль</label>
                            <input
                                type="password"
                                id="current-password"
                                value={currentPassword}
                                onChange={e => setCurrentPassword(e.target.value)}
                                className={styles.profileInput}
                            />
                            <label htmlFor="new-password" className={styles.profileLabel}>Новий пароль</label>
                            <input
                                type="password"
                                id="new-password"
                                value={newPassword}
                                onChange={e => setNewPassword(e.target.value)}
                                className={styles.profileInput}
                            />
                        </>
                    )}
                    <button type="submit" className={styles.profileButton}>Зберегти зміни</button>
                </form>
                <button onClick={handleLogout} className={`${styles.profileButton} ${styles.profileLogout}`}>Вийти з акаунту</button>
                {message && <div className={styles.profileMessage}>{message}</div>}
                {error && <div className={styles.profileError}>{error}</div>}
            </div>
        </div>
    );
}