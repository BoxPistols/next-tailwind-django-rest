// import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Layout title="Home" h1="Hell?" />
      <footer className={styles.footer}>
        <a href="#" rel="noopener noreferrer">
          Powered by{' '}
          <span className={styles.logo}>
            <Image
              src="vercel.svg"
              alt="Vercel Logo"
              width={72 / 2}
              height={16 / 2}
            />
          </span>
        </a>
      </footer>
    </div>
  )
}
