export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-8 px-4 shadow-inner">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-lg">О нас</span>
          <a href="/about" className="text-sm text-gray-400 hover:text-white transition">О компании</a>
          <a href="/team" className="text-sm text-gray-400 hover:text-white transition">Наша команда</a>
          <a href="/careers" className="text-sm text-gray-400 hover:text-white transition">Вакансии</a>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-semibold text-lg">Поддержка</span>
          <a href="/help" className="text-sm text-gray-400 hover:text-white transition">Помощь</a>
          <a href="/faq" className="text-sm text-gray-400 hover:text-white transition">FAQ</a>
          <a href="/contact" className="text-sm text-gray-400 hover:text-white transition">Связаться с нами</a>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <span className="font-semibold text-lg">Соцсети</span>
          <a href="/Telegram" className="text-sm text-gray-400 hover:text-white transition">Telegram</a>
          <a href="/Instagram" className="text-sm text-gray-400 hover:text-white transition">Instagram</a>
          <a href="/X" className="text-sm text-gray-400 hover:text-white transition">X</a>
        </div>
      </div>
      <div className="max-w-5xl mx-auto mt-8 flex flex-col items-center gap-4">
        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} HyperByte. Все права защищены.
        </div>
      </div>
    </footer>
  );
}