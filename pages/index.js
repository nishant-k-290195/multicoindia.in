import HomeStyles from '../styles/Home.module.css'
import { GiGrowth } from 'react-icons/gi';
import { FaServicestack, FaOpencart } from 'react-icons/fa';
import Link from 'next/link'
import {HOME} from '../components/textData'
import Testimonial from '../components/Testimonial';
import Vendors from '../components/Vendors'
import Vendors2 from '../components/Vendors2'

const Section_A = () => {
  return (
    <div className={`${HomeStyles.section} ${HomeStyles.section_A}`}>
      <div className={HomeStyles.container}>
        <div className={HomeStyles.container_right}>
          <h1>Welcome to Multico</h1>
          <h3>The leading Supplier of Adhesive Products & Quality aHead <span style={{color: 'coral', display:'inline-block'}}>Cement - Solvent.</span></h3>
          <h3>We cover both industrial and direct customer needs.</h3>
        </div>
      </div>
    </div>
  )
}

const Section_B = () => {
  return (
    <div className={`${HomeStyles.section} ${HomeStyles.section_B}`}>
      <div className={HomeStyles.container}>
        <div>
          <GiGrowth className={HomeStyles.section_b_icon}/>
          <h3>Leadership Moto</h3>
          <p>We believe in leading the market through sustainable approaches and principles to attain the consumer satisfaction.</p>
        </div>
        <div>
          <FaServicestack className={HomeStyles.section_b_icon}/>
          <h3>Vision and Mission</h3>
          <p>We're committed towards providing a single platform for a wide range of constructive & engineering products.</p>
        </div>
        <div>
          <FaOpencart className={HomeStyles.section_b_icon}/>
          <h3>Quality and assurance</h3>
          <p>We are offering reasonably priced quality Products & services with the excellence in quality.</p>
        </div>
      </div>
    </div>
  )
}

const Section_C = () => {
  return (
    <div className={`${HomeStyles.section} ${HomeStyles.section_C}`}>
      <div className={HomeStyles.container}>
        <div>
          <h3>Our product range</h3>
          <div className={HomeStyles.services}>
            {
              HOME.Section_C.services.map(item => {
                return <p key ={item.id}>{item.service}</p>
              })
            }
          </div>
        </div>
        <img className={HomeStyles.section_c_img} src="section_c.jpg" alt="img" />
      </div>
    </div>
  )
}


const Section_D = () => {
  return (
    <div className={`${HomeStyles.section} ${HomeStyles.section_D}`}>
      <div className={HomeStyles.container}>
        <img className={HomeStyles.section_d_img} src="section_d1.jpg" alt="img" />
        <div>
          <h2>Call us now for a sample product</h2>
          <Link href='tel:+91-9709815555'>+91-9709815555</Link>
          <p>The vast knowledge and experience of the management and staffs at MULTICO makes us invaluable to our clients.</p>
        </div>
      </div>
    </div>
  )
}

const Section_E = () => {
  return (
    <div className={`${HomeStyles.section} ${HomeStyles.section_E}`}>
      <div className={HomeStyles.container}>
        <h2>Areas we serve</h2>
        <p>As of now, we can supply our products all across India and we're working our best to expand ourselves to the global market.</p>
      </div>
    </div>
  )
}

const Section_F = () => {
  return <Testimonial />
}

const Section_G = () => {
  return <Vendors />
}

const Home = () => {
  return (
    <div>
      <Section_A />
      <Section_B />
      <Section_C />
      <Section_D />
      <Section_E />
      <Section_F />
      <Section_G />
      {/* <Vendors2 /> */}
    </div>
  )
}

export default Home
