import s from  '../styles/Navbar.module.css'

const Navbar = ()=>{
  return (
  <nav className={s.navbar}>
    <img src="/image/logo.png" onClick={()=>{
      window.location.href='/'
    }}/>
    <h3 className={s.brand} onClick={()=>{
      window.location.href='/'
    }}>FAKUR</h3>
    <ul className={s.menu}>
      <li><a href="/">home</a></li>
      <li><a href="/about">about</a></li>
      <li><a href="/blog">blog</a></li>
      <li><a href="/contact">contact</a></li>
    </ul>
  </nav>
  )
}
export default Navbar;