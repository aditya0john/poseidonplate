import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import About from "@/components/About";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main>
      <MaxWidthWrapper>
        <FloatingNav navItems={navItems} />
        <Hero />
        <About />
        <Clients />
        <Footer />
      </MaxWidthWrapper>
    </main>
  );
}
