import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function About() {
  const { ref, isVisible } = useScrollAnimation();

  const skills = [
    "Python", "PyTorch", "TensorFlow", "LangChain", "HuggingFace", "OpenAI",
    "AWS", "Azure", "Kubernetes", "Docker", "MLflow", "SageMaker",
    "Java", "Bash", "Spark", "MongoDB", "CI/CD", "GitHub Actions"
  ];

  return (
    <section id="about" className="py-20 px-4 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating AI solutions that make a real-world impact
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glassmorphism p-8 rounded-2xl hover-tilt">
              <img 
                src="/attached_assets/Tanmay Profile Picture.jpeg" 
                alt="Tanmay Joshi - Professional headshot" 
                className="w-full rounded-xl shadow-2xl"
                loading="lazy"
              />
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a results-driven Software Engineer with <span className="text-[hsl(var(--neon))] font-semibold">4-5+ years of experience building AI applications</span>, 
                currently pursuing my Master's in Software Engineering Systems at <span className="text-[hsl(var(--neon))] font-semibold">Northeastern University</span>. 
                My passion lies in creating innovative Generative AI solutions and scalable MLOps frameworks 
                that accelerate business objectives and drive measurable impact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Recently completed my role as an <span className="text-[hsl(var(--neon))] font-semibold">ML Engineer Intern</span> at 
                The American Board of Anesthesiology, where I delivered production RAG systems, led LLM 
                fine-tuning initiatives, and architected multimodal evaluation platforms that transformed 
                operational efficiency for thousands of users.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans <span className="text-[hsl(var(--neon))] font-semibold">Python, Java, Kubernetes</span>, 
                and multi-cloud environments, with a proven track record of advancing digital transformation through 
                emerging technologies and collaborative innovation in enterprise settings.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-8">
                {skills.map((skill) => (
                  <span 
                    key={skill}
                    className="skill-badge px-3 py-2 rounded-lg text-sm font-medium text-center"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
