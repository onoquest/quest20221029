import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ProgressBar from './compornents/ProgressBar'
import ImageDescription from './compornents/ImageDescription'

// import GoogleMapReact from 'google-map-react';

export default function Home() {
  const defaultLatLng = {
    lat: 35.7022589,
    lng: 139.7744733,
  };

  const progress_contents = {
    bgcolor: "#6a1b9a",
    completed: 50
  }
  

  return (
    <div className={styles.container}>
      <Head>
        <title>set001</title>
        <meta name="description" content="set001" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      
      <Image src="/images/logo.png"  alt="My avatar" width={880*1.2} height={277*1.2} />

      <ProgressBar bgcolor={progress_contents.bgcolor} completed={progress_contents.completed}/>
        <h1>2/4 完了</h1>

      <ImageDescription index={2} keyword={"mountain (漢字に直してみよう)"}></ImageDescription>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
