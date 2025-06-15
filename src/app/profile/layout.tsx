import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata = {
  title: 'HyperByte | Профиль ',
};


export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">{children}</main>
      </div>
      <Footer />
    </>
  );
}