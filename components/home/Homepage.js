// import { Helmet } from "react-helmet-async";

import BookaCall from "./sections/BookaCall";
import ContactUs from "./sections/Contactus";
import Hero from "./sections/Hero";
import Mission from "./sections/Mission";
import Services from "./sections/Services";
import Stats from "./sections/Stats";
import Tierspin from "./sections/Tierspin";
import AboutUssummary from "./sections/AboutUssummary";

export default function HomePage() {
  return (
    <>
      {/* <Helmet>
        <title>Inventum International Online School</title>
        <meta
          name="description"
          content="Inventum International Online School provides future-focused, technology-driven study programme allowing learners to access innovative learning anywhere, anytime."
        />
      </Helmet> */}
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
