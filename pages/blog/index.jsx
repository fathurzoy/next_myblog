import s from "../../styles/Home.module.css"
import Head from "next/head"

const Blog = () =>{
  return (
    <>
    <Head>
      <title>Blog</title>
      <meta name="description" content="page blog fathurzoy"/>
      <meta property="og:title" content="page blog fathurzoy"/>
      <meta property="og:description" content="selamat datang di website fathurzoy"/>
      <meta property="og:image" content="https://miro.medium.com/max/2560/0*mTyZ2bIciY5_eTFm.jpg"/>
    </Head>
    <main className={s.container}>
      <h1>ini Blog saya</h1>
      <p style={{maxWidth: '50%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum magni magnam architecto tempora, enim, ipsum praesentium libero dolor quibusdam sed assumenda aut ratione nihil vitae id, repudiandae nisi rem accusamus?</p>
    </main>
    </>
  )
}

export default Blog;