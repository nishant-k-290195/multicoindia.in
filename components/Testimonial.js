import {TESTIMONIAL} from '../components/textData'
import testimonialStyles from '../styles/Testimonial.module.css'

const Testimonial = () => {
  return (
    <>
      <div className={testimonialStyles.section}>
      <h2 style={{textAlign:'center', marginBottom:'2rem'}}>What do our clients and customers say...</h2>
      <div className={testimonialStyles.container}>
        {      
          TESTIMONIAL.map((item) => {
            return <>
              <div className={testimonialStyles.card}>
                <h4 style={{textAlign:'center'}}>{item.name}</h4>
                <p style={{textAlign:'center'}}>{item.comment}</p>
              </div>
            </>
          })
        }
      </div>
      </div>

    </>
  )
}

export default Testimonial
