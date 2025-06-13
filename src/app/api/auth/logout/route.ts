import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  // Получаем access_token из cookies (или заголовка)
  const access_token = req.cookies.get('sb-access-token')?.value || req.headers.get('authorization')?.replace('Bearer ', '');
  if (!access_token) {
    return NextResponse.json({ error: 'Not authenticated' }, { status: 401 });
  }
  const { error } = await supabase.auth.signOut();
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
  // Очищаем cookie
  const response = NextResponse.json({ message: 'Logged out' });
  response.cookies.set('sb-access-token', '', { maxAge: 0 });
  return response;
}
