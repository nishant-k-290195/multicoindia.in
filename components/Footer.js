import Link from 'next/link'
import FooterStyles from '../styles/Footer.module.css'

const Footer = () => {
  return (
    <>
    <div className={`${FooterStyles.section} ${FooterStyles.section_A}`}>
        <div className={FooterStyles.container}>
          <Link href='/'><img src="logo.png" alt="logo" /></Link>
          
          <div className={FooterStyles.social}>
            <h3>Social</h3>
            <Link href='/'>Facebook</Link>
            <Link href='/facebook.com'>Instagram</Link>
            <Link href='/twitter.com'>Twitter</Link>
            <Link href='/linkedin.com'>LinkedIn</Link>
          </div>

          <div className={FooterStyles.navigation}>
            <h3>Navigation</h3>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/products'>Products & Services</Link>
            <Link href='/career'>Career</Link>
            <Link href='/contact'>Contact</Link>
            <Link href='/privacy'>Privacy</Link>
            <Link href='/terms'>Terms & Conditions</Link>
            <Link href='/disclaimer'>Disclaimer</Link>
          </div>

          <div className={FooterStyles.contact}>
            <h3>Multico Constructive Pvt. Ltd.</h3>
            <address>
              <Link href='tel:+91-9709815555'>+91-9709815555 </Link><br />
              <Link href='mailto: info@multicoindia.in'>info@multicoindia.in</Link><br /><br />
              Vivek Vihar, Lane No-06, Mithanpura<br />
              Muzaffarpur, Bihar, India – 842002<br /><br />
            </address>

            <iframe 
              className={FooterStyles.map}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7620659.11475179!2d78.79689766092358!3d21.151405014377122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed11c86a4bddcf%3A0x19ede4256fe211b8!2sMULTICO%20CONSTRUCTIVE%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1628400205751!5m2!1sen!2sin"
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
      <div className={`${FooterStyles.section} ${FooterStyles.section_B}`}>
        <div className={FooterStyles.container}>
          <p>Copyright © {new Date().getFullYear()} Multico Constructive Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Footer
