import { Navbar } from '@/components/Navbar';
import { BackgroundGrid } from '@/components/ui-custom/Background';
import { Hero } from '@/sections/Hero';
import { Skills } from '@/sections/Skills';
import { SystemMap } from '@/sections/SystemMap';
import { Projects } from '@/sections/Projects';
import { Highlights } from '@/sections/Highlights';
import { Contact } from '@/sections/Contact';

function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <BackgroundGrid />
      
      {/* Navigation */}
      <Navbar />
      
      {/* Main Content */}
      <main className="relative z-10">
        <Hero />
        <Skills />
        <SystemMap />
        <Projects />
        <Highlights />
        <Contact />
      </main>
    </div>
  );
}

export default App;
