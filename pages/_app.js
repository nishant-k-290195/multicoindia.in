import '../styles/globals.css'
import Layout  from '../components/Layout'
import Head from 'next/head'

const MyApp = ({Component, pageProps}) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="manifest.json" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
