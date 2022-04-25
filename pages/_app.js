
import "../styles/globals.css"
import Navbar from '../componets/Navbar'
import Crasel from '../componets/Crasel'
function MyApp({ Component, pageProps }) {
  return <>
   <Navbar />
   <Crasel />
  <Component {...pageProps} />
  </> 
 
  
}

export default MyApp
