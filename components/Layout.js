import Nav from "../components/Nav"
import Footer from '../components/Footer'
import layoutStyles from '../styles/Layout.module.css'
import Sidebar from '../components/Sidebar'
import { useState } from "react"

const Layout = (props) => {
  const [sidebarState, setSidebarState] = useState(false)
  
  return (
    <>
      <Nav {...{sidebarState, setSidebarState}} />
      <Sidebar {...{sidebarState, setSidebarState}} />
      <div className={layoutStyles.layout} onClick={() => {setSidebarState(false)}} >
        { props.children }
        <Footer />
      </div>
    </>
  )
}

export default Layout
