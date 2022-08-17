import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import Main from '../components/Main'
import Second from '../components/Second'
import Subscription from '../components/Subscription'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Zeus Power</title>
        <meta name="description" content="Zeus Power" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Navbar />
      <Main />
      <Second />
      <Subscription />
      
    </div>
  )
}

