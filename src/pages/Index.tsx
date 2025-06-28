
import Hero from '../components/Hero';
import ValueProposition from '../components/ValueProposition';
import HowItWorks from '../components/HowItWorks';
import SocialProof from '../components/SocialProof';
import WaitlistCTA from '../components/WaitlistCTA';
import StickyBottomCTA from '../components/StickyBottomCTA';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Index = () => {
  return (
    <div className="min-h-screen font-inter">
      <Navbar />
      <Hero />
      <ValueProposition />
      <HowItWorks />
      <SocialProof />
      <WaitlistCTA />
      <Footer />
      <StickyBottomCTA />
    </div>
  );
};

export default Index;
