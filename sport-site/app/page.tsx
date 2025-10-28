import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PlansSection from "./components/PlansSection";
import CoachSection from "./components/CoachSection";
import TransformationsSection from "./components/TransformationsSection";
import Footer from "./components/Footer";
import RequestFormSection from "./components/RequestFormSection";
import ContactButton from "./components/ContactButton";

export default function Home() {
  return (
    <main className="bg-black text-white font-sans">
      <Navbar />
      <HeroSection />
      <PlansSection />
      <CoachSection />
      <TransformationsSection />
      <RequestFormSection />
      <ContactButton />
      <Footer />
    </main>
  );
}
