export default function AboutPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-white px-4">
            <div className="bg-gray-800 bg-opacity-80 rounded-2xl shadow-2xl p-10 max-w-3xl w-full mt-16 mb-16">
                <h1 className="text-5xl font-extrabold mb-6 text-center text-cyan-400 drop-shadow-lg">
                    О нас
                </h1>
                <p className="text-lg text-gray-200 text-center mb-6 leading-relaxed">
                    Добро пожаловать в Hyperbyte! Мы специализируемся на продаже современной компьютерной техники и аксессуаров для дома и бизнеса. У нас вы найдёте широкий ассортимент ноутбуков, ПК, комплектующих и периферии от ведущих производителей.
                </p>
                <p className="text-lg text-gray-300 text-center mb-6 leading-relaxed">
                    Наша команда поможет подобрать оптимальное решение под ваши задачи — будь то рабочая станция, игровой компьютер или техника для офиса. Мы гарантируем качество, выгодные цены и профессиональную консультацию на каждом этапе покупки.
                </p>
                <p className="text-lg text-gray-400 text-center leading-relaxed">
                    Hyperbyte — это индивидуальный подход, честность и поддержка после покупки. Следим за новинками рынка, чтобы предложить вам только актуальные и надёжные устройства. Спасибо, что выбираете нас!
                </p>
            </div>
        </div>
    );
}