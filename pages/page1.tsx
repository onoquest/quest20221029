import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ProgressBar from './compornents/ProgressBar'

// import GoogleMapReact from 'google-map-react';

export default function Home() {
  const defaultLatLng = {
    lat: 35.7022589,
    lng: 139.7744733,
  };

  const progress_contents = {
    bgcolor: "#6a1b9a",
    completed: 33
  }
  

  return (
    <div className={styles.container}>
      <Head>
        <title>set001</title>
        <meta name="description" content="set001" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      
        <h1 className={styles.title}>
          Welcome to <a href="https://www.info-ono.jp/">Ono Quest</a>
        </h1>

        <Image src="/images/imagetest01.png"  alt="My avatar "width={320} height={132} />

      <ProgressBar bgcolor={progress_contents.bgcolor} completed={progress_contents.completed}/>
        <h1>1/3 完了</h1>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
