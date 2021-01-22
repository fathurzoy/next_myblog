import { useState } from "react";
import styles from "../../styles/Home.module.css";
import Head from 'next/head'

const About = () =>{
  const [data, setData] = useState("page about");

  return (
    <>
    <Head>
      <title>About</title>
      <meta name="description" content="page about fathurzoy"/>
      <meta property="og:title" content="page about fathurzoy"/>
      <meta property="og:description" content="selamat datang di website fathurzoy"/>
      <meta property="og:image" content="https://miro.medium.com/max/2560/0*mTyZ2bIciY5_eTFm.jpg"/>
    </Head>
    <main className={styles.container}>
      <h1>Ini About</h1>
      <small>{data}</small>
    </main>
    </>
  )
}

export default About;