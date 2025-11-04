import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SkillsHighlights from "@/components/SkillsHighlights";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import SkillsProgress from "@/components/SkillsProgress";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <SkillsHighlights />
      <Experience />
      <Education />
      <SkillsProgress />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-card border-t border-border py-8">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2025 Shubham Golghate. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
