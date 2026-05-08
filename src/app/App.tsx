import { Routes, Route } from "react-router";
import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { Currently } from './components/Currently';
import { Contact, Footer } from './components/Contact';
import { BreamDesignLab } from './pages/BreamDesignLab';
import { BurbotBreamDesignLab } from './pages/BurbotBreamDesignLab';

function HomePage() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Hero />
      <Work />
      <Currently />
      <Contact />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/bream-design-lab" element={<BreamDesignLab />} />
      <Route path="/burbot-bream-design-lab" element={<BurbotBreamDesignLab />} />
    </Routes>
  );
}
