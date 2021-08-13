import styles from '../styles/about.module.css'
import { ABOUT } from '../data'
import Vendors from '../components/Vendors'

const Top = () => {
  return <>
    <div className={`${styles.section} ${styles.section_A}`}>
      <div className={styles.container}>
        <h1>About us</h1>
      </div>
    </div>
  </>
}

const AboutUs = () => {
  return <>
    <div className={`${styles.section} ${styles.section_B}`}>
      <div className={styles.container}>
        <div>
          <h3>{ABOUT.aboutUs.title}</h3>
          <p>{ABOUT.aboutUs.p1}</p>
          <p>{ABOUT.aboutUs.p2}</p>
          <img src={ABOUT.aboutUs.img} alt="img" />
          <p><span><b>Sanjeev K Suman</b></span>, Founder</p>
          <i>MULTICO CONSTRUCTIVE PVT. LTD.</i>
        </div>
      </div>
    </div>
  </>
}

const Leadership = () => {
  return (
    <div className={`${styles.section} ${styles.section_C}`}>
      <div className={styles.container}>
        <h2>Leadership</h2>
        <div className={styles.leadership_wrapper}>
          {
            ABOUT.leadership.map((item) => {
              return <div key={item.id} className={styles.card}>
                <img src={item.img} alt="img" />
                <h3>{item.name}</h3>
                <i>{item.designation}</i>
              </div>
            })
          }
        </div>
      </div>
    </div>
  )
}


const about = () => {
  return (
    <>
      <Top />
      <AboutUs />
      <Leadership />
      <Vendors style={{background: 'black'}}/>
    </>
  )
}

export default about
