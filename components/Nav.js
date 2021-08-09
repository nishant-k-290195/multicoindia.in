import Link from 'next/link'
import NavStyles from '../styles/Nav.module.css'
import {GiHamburgerMenu} from 'react-icons/gi'

const Nav = (props) => {
  const {sidebarState, setSidebarState} = props
  
  return (
    <div className={NavStyles.section} >
      <div className={NavStyles.container}>
        <GiHamburgerMenu onClick ={() => {setSidebarState(!sidebarState)}} className={NavStyles.menuIcon}/>
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
