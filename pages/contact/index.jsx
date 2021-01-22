import s from "../../styles/Home.module.css"
import Head from 'next/head'
import { useState } from "react"

const Contact = () =>{
  const [data, setData] = useState("page contact")
  return (
    <>
    <Head>
      <title>Contact</title>
      <meta name="description" content="page contact fathurzoy"/>
      <meta property="og:title" content="page contact fathurzoy"/>
      <meta property="og:description" content="selamat datang di website fathurzoy"/>
      <meta property="og:image" content="https://miro.medium.com/max/2560/0*mTyZ2bIciY5_eTFm.jpg"/>
    </Head>
    <main className={s.container}>
      <h1>{data}</h1>
    </main>
    </>
  )
}

export default Contact