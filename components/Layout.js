import Nav from "../components/Nav"
import Footer from '../components/Footer'
import layoutStyles from '../styles/Layout.module.css'

const Layout = (props) => {
  const {sidebarState, setSidebarState} = props
  return (
    <>
      <Nav {...props}/>
      <div className={layoutStyles.layout} onClick={() => {setSidebarState(false)}}>
        {props.children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
