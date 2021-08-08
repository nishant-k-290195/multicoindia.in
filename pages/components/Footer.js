import Link from 'next/link'

const Footer = () => {
  return (
    <>
    <div>
      <Link href='/'><img src="logo.png" alt="logo" /></Link>
      <div>
        <h1>Social</h1>
        <Link href='/'>Facebook</Link>
        <Link href='/facebook.com'>Instagram</Link>
        <Link href='/twitter.com'>Twitter</Link>
        <Link href='/linkedin.com'>LinkedIn</Link>
      </div>
      <div>
        <h1>Navigation</h1>
        <Link href='/'>Home</Link>
        <Link href='/about'>About</Link>
        <Link href='/products'>Products & Services</Link>
        <Link href='/career'>Career</Link>
        <Link href='/contact'>Contact</Link>
      </div>
    </div>
    <div>
      <h3>Multico Constructive Pvt. Ltd.</h3>
      <Link href='tel:+91-9709815555'>+91-9709815555 </Link>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7620659.11475179!2d78.79689766092358!3d21.151405014377122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed11c86a4bddcf%3A0x19ede4256fe211b8!2sMULTICO%20CONSTRUCTIVE%20PVT.%20LTD.!5e0!3m2!1sen!2sin!4v1628400205751!5m2!1sen!2sin"
        width="400" 
        height="150" 
        allowfullscreen="" 
        loading="lazy">
      </iframe>
      <Link href='/privacy'>Privacy</Link>
      <Link href='/terms'>Terms & Conditions</Link>
      <Link href='/disclaimer'>Disclaimer</Link>
    </div>
    <div>
      Copyright © {new Date().getFullYear()} Multico Constructive Pvt. Ltd. All rights reserved.
    </div>
    </>
  )
}

export default Footer
