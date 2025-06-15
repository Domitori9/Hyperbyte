// Получение профиля пользователя с API
export async function fetchProfileApi() {
  try {
    const res = await fetch('/api/auth/profile');
    if (res.ok) {
      const data = await res.json();
      return {
        username: data.profile?.name || data.user?.user_metadata?.name || data.user?.email || 'Профіль',
        avatarUrl: data.profile?.avatar_url || data.user?.user_metadata?.avatar_url || undefined,
      };
    }
    return null;
  } catch {
    return null;
  }
}
