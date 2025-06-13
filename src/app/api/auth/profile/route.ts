import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(req: NextRequest) {
  // Получаем access_token из cookies (или заголовка)
  const access_token = req.cookies.get('sb-access-token')?.value || req.headers.get('authorization')?.replace('Bearer ', '');
  if (!access_token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }
  // Получаем пользователя из auth
  const { data, error } = await supabase.auth.getUser(access_token);
  if (error || !data.user) {
    return NextResponse.json({ error: error?.message || 'User not found' }, { status: 400 });
  }
  // Получаем профиль из таблицы profiles
  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', data.user.id)
    .single();
  // Возвращаем оба объекта
  return NextResponse.json({ user: data.user, profile: profile || null, profileError: profileError?.message });
}

export async function PUT(req: NextRequest) {
  // Получаем access_token из cookies (или заголовка)
  const access_token = req.cookies.get('sb-access-token')?.value || req.headers.get('authorization')?.replace('Bearer ', '');
  if (!access_token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }
  const body = await req.json();
  const { name, email, avatar_url, currentPassword, newPassword } = body;

  // Получаем текущего пользователя
  const { data: userData, error: userError } = await supabase.auth.getUser(access_token);
  if (userError || !userData.user) {
    return NextResponse.json({ error: userError?.message || 'User not found' }, { status: 400 });
  }
  const userId = userData.user.id;

  // Обновляем профиль в таблице profiles
  if (name || avatar_url) {
    const { error: profileError } = await supabase
      .from('profiles')
      .upsert({ id: userId, name, avatar_url }, { onConflict: 'id' });
    if (profileError) {
      return NextResponse.json({ error: profileError.message }, { status: 400 });
    }
  }

  // Обновляем email
  if (email && email !== userData.user.email) {
    const { error: emailError } = await supabase.auth.updateUser({ email });
    if (emailError) {
      return NextResponse.json({ error: emailError.message }, { status: 400 });
    }
  }

  // Обновляем пароль
  if (currentPassword && newPassword) {
    // Проверяем текущий пароль
    const { error: signInError } = await supabase.auth.signInWithPassword({
      email: userData.user.email || '',
      password: currentPassword,
    });
    if (signInError) {
      return NextResponse.json({ error: 'Current password is incorrect' }, { status: 400 });
    }
    const { error: passError } = await supabase.auth.updateUser({ password: newPassword });
    if (passError) {
      return NextResponse.json({ error: passError.message }, { status: 400 });
    }
  }

  return NextResponse.json({ success: true });
}
