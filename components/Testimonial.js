import {TESTIMONIAL} from '../components/textData'
import testimonialStyles from '../styles/Testimonial.module.css'
import { useState } from 'react'
import {IoIosArrowDropleftCircle, IoIosArrowDroprightCircle} from 'react-icons/io'
const Testimonial = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [testimonialLength, setTestionialLenngth] = useState(TESTIMONIAL.length)


  setTimeout(() => {
    setActiveSlide(() => {
      if(activeSlide === TESTIMONIAL.length -1){
        return 0
      }else{
        return activeSlide + 1
      }
    })
  }, 2000)
  return (
    <>
      <div className={testimonialStyles.section}>
      <h2 style={{textAlign:'center', marginBottom:'2rem'}}>What do our clients and customers say...</h2>
      <div className={testimonialStyles.container}>
        <IoIosArrowDropleftCircle className={testimonialStyles.arrow_icons} onClick={ () => { setActiveSlide(() => {
          if(activeSlide === 0){
            return TESTIMONIAL.length -1
          }else{
            return activeSlide - 1
          }
        }) } }/>

        <div className={testimonialStyles.mainSlide}>
        {      
          TESTIMONIAL.map((item, index) => {
            if(activeSlide === index){
              return (
                <>
                  <div className={testimonialStyles.card}>
                    <h4 style={{textAlign:'center'}}>{item.name}</h4>
                    <p style={{textAlign:'center'}}>{item.comment}</p>
                  </div>
                </>
              )
            }
          })
        }
        </div>

        <IoIosArrowDroprightCircle className={testimonialStyles.arrow_icons} onClick={() => { setActiveSlide(() => {
          if(activeSlide === TESTIMONIAL.length -1){
            return 0
          }else{
            return activeSlide + 1
          }
        }) } } />
      </div>
      </div>

    </>
  )
}

export default Testimonial
