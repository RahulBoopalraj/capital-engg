import MarqueeComponent from "@/components/common/Marquee";
import Footer8 from "@/components/footers/Footer8";
import Header3 from "@/components/headers/Header3";
import ServiceDetails from "./ServiceDetails";



export const metadata = {
    title:
      "Architecture & Design",
  };
  
  export default function ServicePageDetails({ params }) {
    return (
      <>
        <Header3 />
        <ServiceDetails />
        <MarqueeComponent />
        <Footer8 />
      </>
    );
  }
  