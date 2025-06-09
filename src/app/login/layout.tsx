import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'HyperByte | Войти',
  description: 'Войдите в свою учетную запись HyperByte для доступа к персонализированным функциям и услугам.',
};


export default function LoginLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  
  return (
    <>
    {children}
    </>
          
  );
}
