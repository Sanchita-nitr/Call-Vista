import Footer from "./1stpage/footer/page";
import Hero from "./1stpage/hero/page";
import Navbar from "./1stpage/navbar/page";
import Services from "./1stpage/services/page";
import Features from './1stpage/features/page';
// import CallDetails from "./1stpage/calldetails/page";


export default function Home() {
  return (
   <div>
    <Navbar/>
    <Hero/>
    <Services/>
    <Features/>
    {/* <CallDetails/> */}
    <Footer/>
   </div>
  );
}