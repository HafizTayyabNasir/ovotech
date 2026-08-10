import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Solutions from "../components/Solutions";
import HowItWorks from "../components/HowItWorks";
import Benefits from "../components/Benefits";
import Trusted from "../components/Trusted";
import Testimonial from "../components/Testimonial";
import Cta from "../components/Cta";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <Solutions />
      <HowItWorks />
      <Benefits />
      <Trusted />
      <Testimonial />
      <Cta />
      <Footer />
    </>
  );
}
