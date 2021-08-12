import { TESTIMONIAL } from '../components/textData'
import testimonialStyles from '../styles/Testimonial.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';
import 'swiper/swiper-bundle.css';
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import {useState, useEffect} from 'react'


SwiperCore.use([Pagination, Navigation, Autoplay]);

const Testimonial = () => {
  const [responsive, setResponsive] = useState('mobile')
  useEffect(() => {
    if(screen.width > 768) {
      setResponsive(() => `desktop`)
    }else
      return `mobile`
  })
  
  return (
    <>
    
      <div className={testimonialStyles.section}>
        <h2 style={{textAlign:'center', marginBottom:'2rem'}}>What do our clients and customers say...</h2>
        <div className={testimonialStyles.container}>
          <Swiper
            navigation={ responsive === `mobile`? false: true }
            slidesPerView={1}
            spaceBetween={30} 
            loop={true} 
            pagination={{"clickable": true}}
            autoplay={{ delay: 2000 }}
            >
            {
              TESTIMONIAL.map((item, index) =>{
                return <>
                    <SwiperSlide key={index}>
                      <div className={testimonialStyles.slide_wrapper}>
                        <div>
                          <h3>{item.name}</h3>
                          <h4>{item.comment}</h4>
                        </div>
                      </div>
                    </SwiperSlide>
                </>
              })
            }
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Testimonial
