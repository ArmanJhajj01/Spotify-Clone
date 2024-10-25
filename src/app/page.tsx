import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen p-8 bg-black text-white">
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Spotify Clone</h1>
        <button className="bg-[#1db954] text-white py-2 px-4 rounded-full hover:bg-[#1ed760] transition duration-200">
          Log In
        </button>
      </header>
      <main className="flex flex-col items-center">
        <Image
          className="dark:invert mb-4"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
        />
        <h2 className="text-2xl mb-4">Welcome to Your Music Hub</h2>
        <ol className="list-inside list-decimal text-center mb-8">
          <li className="mb-2">Discover new music.</li>
          <li>Curate your playlists.</li>
          <li>Enjoy uninterrupted streaming.</li>
        </ol>
        <div className="flex gap-4">
          <a
            className="bg-[#1db954] text-white py-2 px-4 rounded-full hover:bg-[#1ed760] transition duration-200"
            href="https://vercel.com/new"
            target="_blank"
            rel="noopener noreferrer"
          >
            Deploy Now
          </a>
          <a
            className="border border-[#1db954] text-[#1db954] py-2 px-4 rounded-full hover:bg-[#1db954] hover:text-white transition duration-200"
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read Docs
          </a>
        </div>
      </main>
      <footer className="mt-auto flex justify-center gap-8">
        <a className="hover:underline" href="https://nextjs.org/learn" target="_blank" rel="noopener noreferrer">
          Learn
        </a>
        <a className="hover:underline" href="https://vercel.com/templates" target="_blank" rel="noopener noreferrer">
          Examples
        </a>
      </footer>
    </div>
  );
}