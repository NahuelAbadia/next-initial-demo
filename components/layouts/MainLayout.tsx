import { LayoutProps } from '../../globalInterfaces';
import { Navbar } from "../Navbar"
import Head from "next/head"
import styles from "./MainLayout.module.css"

export const MainLayout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>

      <Head>
        <title>Home - Nahue</title>
        <meta name="description" content="Contact Page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className={styles.main}>
        {children}
      </main>

    </div>
  )
}
