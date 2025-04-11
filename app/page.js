import HomePage from "@/components/home/Homepage";
import FAQSection from "@/components/ui/FAQSection";
import Footer from "@/components/ui/Footer";
import Navbar from "@/components/ui/Navbar";
import Image from "next/image";

export default function Home() {
  return (
   <>
   <Navbar/>
   <HomePage/>
   <FAQSection/>
   <Footer/>
   </>
  );
}
