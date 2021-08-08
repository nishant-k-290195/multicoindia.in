import Link from 'next/link'
import NavStyles from '../styles/Nav.module.css'

const Nav = () => {
  return (
    <div className={NavStyles.section}>
      <div className={NavStyles.container}>
        <Link href='/'><img src="logo.png" alt="logo" /></Link>
        <div className={NavStyles.nav}>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/products'>Products & Services</Link>
          <Link href='/career'>Career</Link>
          <Link href='/contact'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Nav
