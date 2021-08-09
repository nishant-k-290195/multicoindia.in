import Link from 'next/link'
import NavStyles from '../styles/Nav.module.css'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useRouter } from 'next/router';

const Nav = (props) => {
  const {sidebarState, setSidebarState} = props
  const router = useRouter()
  console.log(router.pathname)
  return (
    <div className={NavStyles.section} >
      <div className={NavStyles.container}>
        <GiHamburgerMenu onClick ={() => {setSidebarState(!sidebarState)}} className={NavStyles.menuIcon}/>
        <Link href='/'><img src="logo.png" alt="logo" /></Link>
        <div className={NavStyles.nav}>
          <Link href='/'><a className={router.pathname==='/'? NavStyles.routeActive:NavStyles.routeInactive }>Home</a></Link>
          <Link href='/about'><a className={router.pathname==='/about'? NavStyles.routeActive:NavStyles.routeInactive }>About</a></Link>
          <Link href='/products'><a className={router.pathname==='/products'? NavStyles.routeActive:NavStyles.routeInactive }>Products</a></Link>
          <Link href='/career'><a className={router.pathname==='/career'? NavStyles.routeActive:NavStyles.routeInactive}>Career</a></Link>
          <Link href='/contact'><a className={router.pathname==='/contact'? NavStyles.routeActive:NavStyles.routeInactive }>Contact</a></Link>
        </div>
      </div>
    </div>
  )
}

export default Nav
