export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="sm:text-4xl text-2xl font-bold text-blue-500 mb-4">404 — Страница не найдена</h1>
      <p className="text-gray-500 mb-8">Извините, такой страницы не существует.</p>
      <a href="/" className="text-blue-600 underline">На главную</a>
    </div>
  );
}
