import AvatarUploader from "@/components/AvatarUploader";

export default function RegisterPage() {
  return (
    <div className="min-h-screen flex items-center justify-center animate-fade-in">
      <div className="w-full max-w-md p-8 rounded-3xl shadow-2xl bg-gray-900/90 backdrop-blur-md border border-gray-800 animate-slide-up">
        <h1 className="text-4xl font-extrabold mb-6 text-center text-blue-400 drop-shadow-lg tracking-wide">Регистрация</h1>
        <div className="flex justify-center mb-6">
          <AvatarUploader />
        </div>
        <form className="space-y-5">
          <div>
            <label htmlFor="username" className="block text-sm font-semibold text-gray-300 mb-1">Имя пользователя</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="w-full px-4 py-2 rounded-xl bg-gray-800 border border-gray-700 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition placeholder-gray-500 shadow-sm"
              placeholder="Введите имя пользователя"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-1">Электронная почта</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-xl bg-gray-800 border border-gray-700 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition placeholder-gray-500 shadow-sm"
              placeholder="Введите e-mail"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold text-gray-300 mb-1">Пароль</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-4 py-2 rounded-xl bg-gray-800 border border-gray-700 text-gray-100 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition placeholder-gray-500 shadow-sm"
              placeholder="Введите пароль"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-2 rounded-2xl bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold text-lg shadow-lg hover:from-blue-700 hover:to-green-600 transition-all duration-200 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          >
            Зарегистрироваться
          </button>
        </form>
      </div>
    </div>
  );
}

// Анимации (можно добавить в globals.css):
// .animate-fade-in { animation: fadeIn 0.7s ease; }
// .animate-slide-up { animation: slideUp 0.7s cubic-bezier(.4,2,.6,1); }
// @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
// @keyframes slideUp { from { transform: translateY(40px); opacity: 0; } to { transform: none; opacity: 1; } }