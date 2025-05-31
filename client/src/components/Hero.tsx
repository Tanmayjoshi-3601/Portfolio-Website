import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; delay: number }>>([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 6,
    }));
    setParticles(newParticles);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    // Download the actual resume PDF
    const link = document.createElement('a');
    link.href = '/Tanmay Joshi.pdf';
    link.download = 'Tanmay_Joshi_Resume.pdf';
    link.click();
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden gradient-bg">
      {/* Animated Particles */}
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
            }}
          />
        ))}
      </div>
      
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Tanmay <span className="text-gradient">Joshi</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Results-driven AI Engineer specializing in Generative AI solutions and scalable MLOps frameworks that drive innovation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              onClick={scrollToProjects}
              className="magnetic-btn bg-[hsl(var(--neon))] text-background px-8 py-3 rounded-full font-semibold hover:bg-white transition-all"
            >
              <span>View My Work</span>
              <i className="fas fa-arrow-down ml-2"></i>
            </Button>
            <Button 
              onClick={downloadResume}
              variant="outline"
              className="glassmorphism px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all border-[hsl(var(--neon))] text-[hsl(var(--neon))]"
            >
              <i className="fas fa-download mr-2"></i>
              Download Resume
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[hsl(var(--neon))] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[hsl(var(--neon))] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
