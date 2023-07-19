import Image from 'next/image'
import styles from './page.module.css'
import Productos from './productos/page'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        
           <Productos />

        </div>
         
    </main>
  )
}
