import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Professionals } from "@/components/sections/Professionals";
import { Treatments } from "@/components/sections/Treatments";
import { Experience } from "@/components/sections/Experience";
import { BeforeAfter } from "@/components/sections/BeforeAfter";
import { Testimonials } from "@/components/sections/Testimonials";
import { Technology } from "@/components/sections/Technology";
import { FAQ } from "@/components/sections/FAQ";
import { Location } from "@/components/sections/Location";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/sections/LoadingScreen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Treatments />
        <Professionals />
        <Experience />
        <BeforeAfter />
        <Testimonials />
        <Technology />
        <FAQ />
        <Location />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
