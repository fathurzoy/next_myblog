import Layouts from '../components/Layouts'
import styles from '../styles/Home.module.css'
import Head from 'next/head'
import Divider from '../components/Divider'
import SilabusCard from "../components/SilabusCard"

export default function Home() {
  return (
    <>
    <Head>
      <title>Home</title>
      <meta name="description" content="page home fathurzoy"/>
      <meta property="og:title" content="page home fathurzoy"/>
      <meta property="og:description" content="selamat datang di website fathurzoy"/>
      <meta property="og:image" content="https://miro.medium.com/max/2560/0*mTyZ2bIciY5_eTFm.jpg"/>
    </Head>
    {/* <Layouts> */}
      <div className={styles.container}>
        <div className={styles.hero}>
          <h1>Komunistas Parkour Depok Gratis</h1>
        </div>

        <section className={styles.wellcome}>
          <img
            src="https://images.unsplash.com/photo-1495160101476-62b90f5fc1c1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGFya291cnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt="section image"
            className={styles.wellcome_image}
          />

          <div className={styles.wellcome_content}>
            <h3>Komunitas Parkour Gratis Untuk Semua</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusamus suscipit amet, animi consectetur earum iusto iste vitae
              minima sequi, officia, recusandae molestiae quo fuga sapiente?
              Tempore adipisci earum accusantium culpa.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
              excepturi dolorem ipsa nihil odit, quod blanditiis non tempora
              quasi. Nisi modi dicta, blanditiis officiis cupiditate aliquid
              iusto corrupti rem. Consectetur!
            </p>
          </div>
        </section>

        <Divider text="HISTORY"/>

        <section className={styles.history}>
          <div className={styles.history_left}>
            <h3>Sejarah Fakur</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptas ducimus delectus! Veniam distinctio illum ex vel rem blanditiis itaque.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta autem blanditiis sapiente eos error tempore, repudiandae consectetur! Voluptas, quibusdam cumque.</p>
          </div>
          <div className={styles.history_right}>
            <h1>SEMUA BERAWAL DARI SINI..</h1>
            <img src="https://images.unsplash.com/photo-1523559745981-a34343b81db2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8cGFya291cnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="history image"/>
          </div>
        </section>

        <Divider text="SILABUS"/>

        <div className={styles.silabus}>
          <SilabusCard img="https://images.unsplash.com/photo-1554889914-a5c84570ea3e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fHBhcmtvdXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" title="BackFlip" content={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptas ducimus delectus! Veniam distinctio illum ex vel rem blanditiis itaque.`}/>
          <SilabusCard img="https://images.unsplash.com/photo-1573766917336-4ce32afd1907?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZnJvbnRmbGlwfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" title="FrontFlip" content={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptas ducimus delectus! Veniam distinctio illum ex vel rem blanditiis itaque.`}/>
          <SilabusCard img="https://olahragapedia.com/wp-content/uploads/2017/07/Wall-Flip-300x181.jpg" title="WallFlip" content={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptas ducimus delectus! Veniam distinctio illum ex vel rem blanditiis itaque.`}/>
          <SilabusCard img="https://olahragapedia.com/wp-content/uploads/2017/07/Vaulting-300x168.jpg" title="Vaulting" content={`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptas ducimus delectus! Veniam distinctio illum ex vel rem blanditiis itaque.`}/>
        </div>


      </div>
    {/* </Layouts> */}
    </>
  )
}
