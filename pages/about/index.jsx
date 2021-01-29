import { useState } from "react";
import styles from "../../styles/Home.module.css";
import Head from 'next/head'
import Hero from "../../components/Hero";
import CardContent from "../../components/CardContent"

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
    <Hero title="Tentang Kami" image="/image/background.jpg"/>
    <main className={styles.container}>
      {/* <h1>Ini About</h1>
      <small>{data}</small> */}

      <CardContent 
        image="https://images.unsplash.com/photo-1495160101476-62b90f5fc1c1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGFya291cnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
        title="Tentang Parkour Depok" 
        content={`
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta autem blanditiis sapiente eos error tempore, repudiandae consectetur! Voluptas, quibusdam cumque.
          </p>
          <a href="/contact">Daftar</a>
        `}
      />

      <CardContent 
        image="https://images.unsplash.com/photo-1602424845444-60c87a5bb0fb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8cGFya291cnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
        title="Kegiatan Parkour Depok" 
        content={`
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta autem blanditiis sapiente eos error tempore, repudiandae consectetur! Voluptas, quibusdam cumque.
          </p>
        `}
        tuker={true}
      />

      <CardContent 
        image="https://images.unsplash.com/photo-1527525443983-6e60c75fff46?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fHBhcmtvdXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
        title="Sistem Komunitas Parkour Depok" 
        content={`
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta autem blanditiis sapiente eos error tempore, repudiandae consectetur! Voluptas, quibusdam cumque.
          </p>
        `}
      />
    </main>
    </>
  )
}

export default About;