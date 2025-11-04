import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center" style={{ backgroundColor: "hsl(var(--hero-bg))" }}>
      <div className="container mx-auto px-6 text-white py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="text-white">Shubham </span>
              <span className="text-primary">Golghate</span>
            </h1>
            
            <p className="text-3xl md:text-4xl text-white/90 font-medium">
              Product Manager
            </p>
            
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed pt-4">
              With 7 years of experience in Fintech and Payments, I've built products at scale at Booking.com 
              and led payment infrastructure initiatives. I specialize in turning complex problems into elegant 
              solutions that drive business impact.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-foreground transition-smooth text-lg px-8 py-6"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
          </div>

          <div className="flex gap-6 pt-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-smooth">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-primary transition-smooth">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="mailto:contact@example.com" className="text-white/70 hover:text-primary transition-smooth">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
