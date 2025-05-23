export default function Search() {  
    return (
        <form role="search" aria-label="Поиск по сайту" className="w-full">
            <input
                className="w-full rounded-2xl border border-gray-300 bg-white/80 px-4 py-2 text-gray-900 placeholder-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition"
                type="search"
                name="q"
                placeholder="Поиск..."
                aria-label="Поиск"
            />
        </form>
    )
}