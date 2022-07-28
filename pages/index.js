import Head from 'next/head'
import Navbar from '../components/Navbar'
import Homepage from '../components/Homepage'
import Footer from '../components/Footer';


export default function Home() {
return (
   <>
      <Head>
         <title>Financial firm</title>
         <meta name="demo website for a financial firm" content="financial firm" /> 
      </Head>
      <Navbar />
      <Homepage />
      <Footer />
      
   </>
)
}
