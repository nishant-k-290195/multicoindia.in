import SidebarStyles from '../styles/Sidebar.module.css'
import {BsBoxArrowInLeft} from 'react-icons/bs'
import Link from 'next/link'

const Sidebar = (props) => {
  const {sidebarState, setSidebarState} = props
  return (
    <div 
      className={`${SidebarStyles.section} ${sidebarState? SidebarStyles.open:SidebarStyles.close}`}>
      <BsBoxArrowInLeft onClick ={() => {setSidebarState(!sidebarState)}} className={SidebarStyles.menuIcon}/>
      <div className={SidebarStyles.container}>
        <Link href='/'><img src="logo.png" alt="logo" /></Link>
        <div className={SidebarStyles.nav}>
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

export default Sidebar
