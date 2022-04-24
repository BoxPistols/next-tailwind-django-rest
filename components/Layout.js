import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

function Layout({ children, h1, h2, title = 'HP by Next.js' }) {
  return (
    <div className="flex flex-col min-h-screen font-mono text-sm text-gray-600 ">
      <Head>
        <title>{title}</title>
      </Head>
      {/* Nav */}
      <header>
        <nav className="w-screen bg-gray-800">
          <div className="flex h-12 pl-4 place-items-center">
            <div className="pl-4">
              <Link href="/">
                <a className="text-gray-300 pd-2 hover:text-gray-100">Home</a>
              </Link>
            </div>
            <div className="pl-4">
              <Link href="/blog-page">
                <a className="text-gray-300 pd-2 hover:text-gray-100">Blog</a>
              </Link>
            </div>
            <div className="pl-4">
              <Link href="/contact-page">
                <a className="text-gray-300 pd-2 hover:text-gray-100">
                  Contact
                </a>
              </Link>
            </div>
          </div>
        </nav>
      </header>
      {/* Main */}
      <main className="flex flex-1 w-screen place-content-center place-items-center">
        {h1 ? <h1 className="text-6xl text-stone-700 ">{h1}</h1> : ''}
        {h2 ? <h2 className="text-3xl text-stone-400 ">{h2}</h2> : ''}
        {children}
      </main>
      {/* footer */}
      <footer className="grid w-full h-12 border-t place-items-center">
        <a
          href="https://nextjs.org/"
          rel="noopener noreferrer"
          target="_blank"
          className="flex items-center"
        >
          Powered by{' '}
          <span className="">
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Layout
