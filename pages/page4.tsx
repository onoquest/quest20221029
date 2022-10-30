import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ProgressBar from './compornents/ProgressBar'
import ImageDescription from './compornents/ImageDescription'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'


// import GoogleMapReact from 'google-map-react';

export default function Home() {
  const defaultLatLng = {
    lat: 35.7022589,
    lng: 139.7744733,
  };

  const progress_contents = {
    bgcolor: "#6a1b9a",
    completed: 100
  }

  const { width, height } = useWindowSize()

  console.log(width, height)

  return (
    <div className={styles.container}>
      <Head>
        <title>set001</title>
        <meta name="description" content="set001" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <main className={styles.main}>
      
      <Confetti width={2000} height={1200} ></Confetti>
      <Image src="/images/logo.png"  alt="My avatar" width={880*1.2} height={277*1.2} />
        
      <ProgressBar bgcolor={progress_contents.bgcolor} completed={progress_contents.completed}/>
      <h1>4/4 完了</h1>
      
      <h1>お宝GET!</h1>
      <Image src="/images/tresure.png"  alt="My avatar "width={500} height={300}></Image>
      <h2>よく頑張った！
      スタート地点に帰還し、係員に
      </h2>
      <h1 style={{color:"red"}}>小野LOVE!</h1>
      <h2>と伝えよ！</h2>
      </main>


      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
