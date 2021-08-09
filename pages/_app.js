import '../styles/globals.css'
import Layout  from '../components/Layout'
import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import {useState} from 'react'
const MyApp = ({Component, pageProps}) => {
  const [sidebarState, setSidebarState] = useState(false)
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Sidebar {...{sidebarState, setSidebarState}}/>
      <Layout {...{sidebarState, setSidebarState}}>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
