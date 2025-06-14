import CategorySection from "@/components/categories/CategorySection";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";

export default function ProductsPage() {
    return (

        <>  
        
        <Header />
       
        <div className="flex justify-center mt-40">
            <h1 className="text-4xl">Каталог </h1>
        </div>
            <CategorySection />
     
        <Footer />
        
        </>
        
    )
}