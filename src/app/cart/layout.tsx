import Headers from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { Metadata } from "next";

const metadata: Metadata = {
    title: "HyperByte | Корзина",   
    description: "Корзина интернет-магазина HyperByte",
}

export default function TrashLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Headers />
            {children}
            <Footer />
        </>
    );
} 