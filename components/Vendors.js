import { VENDORS } from '../data'
import Slider from "react-slick";
import VendorsStyles from '../styles/Vendors.module.css'
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';


const settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear"
};

const Vendors = () => {
  return (
    <>
      <div className={VendorsStyles.section}>
        <div className={VendorsStyles.container}>
          <Slider {...settings} className={VendorsStyles.slide_wrapper}>
            {
              VENDORS.map(item => <div><img src={item.img} alt="vendor_logos" /></div>)
            }
          </Slider>
        </div>
      </div>
    </>
  )
}

export default Vendors
