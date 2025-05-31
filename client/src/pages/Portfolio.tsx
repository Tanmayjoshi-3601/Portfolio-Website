import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Projects from "@/components/Projects";
import Publications from "@/components/Publications";
import Interests from "@/components/Interests";
import Contact from "@/components/Contact";

export default function Portfolio() {
  useEffect(() => {
    // Initialize dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <About />
      <Resume />
      <Projects />
      <Publications />
      <Interests />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-4 border-t border-border/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Tanmay Joshi. Built with ❤️ using React, Vite, and Tailwind CSS.
          </p>
          <p className="text-muted-foreground/60 text-sm mt-2">
            Crafting the future of AI, one algorithm at a time.
          </p>
        </div>
      </footer>
    </div>
  );
}
