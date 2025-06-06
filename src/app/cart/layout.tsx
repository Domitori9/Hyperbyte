import Headers from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

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