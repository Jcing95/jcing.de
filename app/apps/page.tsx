import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function apps() {
  return (
    <main className={styles.main}>
      <div className={styles.introduction}>
        Hello There!
        Here you can see some of the Android Apps I developed over the last Years:
      </div>
    </main>
  )
}
