import Image from "next/image"
import Link from "next/link"

export default function TrashPage() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 pt-20 pb-24">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold text-white mb-8">Корзина</h1>
                
                {/* Empty cart state */}
                <div className="bg-[#1e293b]/80 p-8 rounded-2xl shadow-lg border border-[#1e3a8a] text-center">
                    <div className="w-20 h-20 bg-blue-900/40 rounded-xl flex items-center justify-center mx-auto mb-6">
                        <Image 
                            src="/icon/cart.svg" 
                            alt="cart" 
                            width={40} 
                            height={40} 
                            className="brightness-0 invert"
                        />
                    </div>
                    <h2 className="text-xl font-bold text-white mb-4">Ваша корзина пуста</h2>
                    <p className="text-gray-300 mb-6">
                        Добавьте товары в корзину, чтобы оформить заказ
                    </p>
                    <Link 
                        href="/" 
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-colors"
                    >
                        Перейти к покупкам
                    </Link>
                </div>

                {/* Cart items would go here */}
                {/* <div className="space-y-4">
                    <div className="bg-[#1e293b]/80 p-4 rounded-xl shadow-lg border border-[#1e3a8a] flex items-center gap-4">
                        <div className="w-24 h-24 bg-gray-700 rounded-lg"></div>
                        <div className="flex-1">
                            <h3 className="text-white font-semibold">Название товара</h3>
                            <p className="text-gray-300 text-sm">Количество: 1</p>
                            <p className="text-blue-400 font-semibold">1000 ₴</p>
                        </div>
                        <button className="text-red-400 hover:text-red-300">
                            <Image 
                                src="/icon/trash.svg" 
                                alt="remove" 
                                width={24} 
                                height={24} 
                                className="brightness-0 invert"
                            />
                        </button>
                    </div>
                </div> */}
            </div>
        </div>
    )
} 