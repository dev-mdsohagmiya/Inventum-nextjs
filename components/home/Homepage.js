import AboutUssummary from "./sections/AboutUssummary";
import BookaCall from "./sections/BookaCall";
import ContactUs from "./sections/Contactus";
import Hero from "./sections/Hero";
import Mission from "./sections/Mission";
import Services from "./sections/Services";
import Stats from "./sections/Stats";
import Tierspin from "./sections/Tierspin";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Mission />
      <Services />
      <AboutUssummary />
      <Tierspin />
      <BookaCall />
      <ContactUs />
    </>
  );
}
