import Nav from "../components/Nav"
import Footer from '../components/Footer'
import layoutStyles from '../styles/Layout.module.css'

const Layout = ({children}) => {
  return (
    <div className={layoutStyles.layout}>
      <Nav />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
