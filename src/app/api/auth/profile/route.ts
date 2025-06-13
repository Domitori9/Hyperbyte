import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function GET(req: NextRequest) {
  // Получаем access_token из cookies (или заголовка)
  const access_token = req.cookies.get('sb-access-token')?.value || req.headers.get('authorization')?.replace('Bearer ', '');
  if (!access_token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }
  const { data, error } = await supabase.auth.getUser(access_token);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
  return NextResponse.json({ user: data.user });
}
