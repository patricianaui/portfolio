import { Hero } from './components/Hero';
import { Work } from './components/Work';
import { Currently } from './components/Currently';
import { Contact, Footer } from './components/Contact';

export default function App() {
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