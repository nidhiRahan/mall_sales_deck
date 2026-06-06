import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Stats from "../components/Stats";
import Retail from "../components/Retail";
import Entertainment from "../components/Entertainment";
import Dining from "../components/Dining";
 import EventsPlatform from "../components/EventsPlatform";
 import CTA from "../components/CTA";
import ScrollProgress from "../components/ScrollProgress";
 import Footer from "../components/Footer";
import Luxury from "../components/Luxury";
import WhyProperty from "../components/WhyProperty";
import LeasingOpportunities from "../components/LeasingOpportunities";
import SponsorshipOpportunities from "../components/SponsorshipOpportunities";
import EventBooking from "../components/EventBooking";
 function Home() {
  return (
    <>
    <ScrollProgress />

      <Navbar />
      <Hero />
      <WhyProperty/>
      <Stats />
      <Retail />
      <Luxury />
      <LeasingOpportunities />
      <Entertainment />
      <SponsorshipOpportunities/>
      <EventBooking />
      <Dining />
      <EventsPlatform />
      <CTA />
      <Footer />
      
    </>
  );
}

export default Home;