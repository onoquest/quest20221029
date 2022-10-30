import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  const paths = ['/images/top_1.png', '/images/top_2.png', '/images/top_3.png']

  return (
    <div className={styles.container}>
      <Head>
      </Head>

      <main className={styles.main}>
        <Image src="/images/logo.png"  alt="My avatar" width={880*1.2} height={277*1.2} />

        {paths.map((el, index) => {
          return <Image src={el} key={index} alt={`top_img_${index}`} width={1200} height={800}/>
        })}

      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
