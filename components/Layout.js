import Head from 'next/head'
// import Link from 'next/link'

function Layout({ children, h1 = 'Hell', title = 'HP by Next.js' }) {
  return (
    <div className="flex jusify-center items-center flex-col min-h-screen text-gray-600 text-sm front-mono">
      <Head>
        <title>{title}</title>
      </Head>
      <header>
        <nav className="bg-gray-800 w-screen">
          <div className="flex item-center pl-8 h-14">
            xx
            <div className="flex item-center pl-8 h-14">xx</div>
          </div>
        </nav>
      </header>

      <main className="flex flex-1 justify-center item-center flrx-col w-screen">
        <h1 className="text-4xl text-stone-700 font-bold ">{h1}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout
