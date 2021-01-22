import s from '../styles/Divider.module.css'

const Divider = ({text})=>{
  return (
    <div className={s.divider_container}>
      <h1 className={s.divider_text}>
        {text}
      </h1>
      <span className={s.divider_line}>{/*kosongkan untuk style garis */}</span>
    </div>
  )
}

export default Divider;