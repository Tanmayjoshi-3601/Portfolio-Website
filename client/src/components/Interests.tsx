import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Interest {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

export default function Interests() {
  const { ref, isVisible } = useScrollAnimation();

  const interests: Interest[] = [
    {
      title: "AI Research",
      description: "Exploring cutting-edge developments in generative AI, LLMs, and multimodal systems",
      icon: "fas fa-robot",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Cloud Architecture",
      description: "Designing scalable, resilient systems on AWS, Azure, and Kubernetes platforms",
      icon: "fas fa-cloud",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Open Source",
      description: "Contributing to machine learning libraries and developer tools that advance the community",
      icon: "fas fa-code",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Adventure",
      description: "Hiking, photography, and exploring new places to fuel creativity and perspective",
      icon: "fas fa-mountain",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "Machine Learning",
      description: "Deep learning architectures, neural networks, and cutting-edge ML research",
      icon: "fas fa-brain",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: "Data Science",
      description: "Statistical analysis, data visualization, and extracting insights from complex datasets",
      icon: "fas fa-chart-line",
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "Innovation",
      description: "Exploring emerging technologies and their potential to solve real-world problems",
      icon: "fas fa-lightbulb",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      title: "Music & Arts",
      description: "Finding inspiration in music, photography, and creative expression",
      icon: "fas fa-music",
      gradient: "from-teal-500 to-cyan-500"
    }
  ];

  const technologies = [
    "Transformers", "LangChain", "Vector Databases", "Edge AI", 
    "MLOps", "Distributed Systems", "AutoML", "Quantum ML",
    "Computer Vision", "NLP", "Reinforcement Learning", "Federated Learning"
  ];

  return (
    <section id="interests" className="py-20 px-4 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Interests & <span className="text-gradient">Passion</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Beyond code and algorithms - what drives my curiosity and creativity
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {interests.map((interest, index) => (
              <div 
                key={index} 
                className="glassmorphism p-6 rounded-xl text-center hover-tilt group transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${interest.gradient} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${interest.icon} text-white text-2xl`}></i>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[hsl(var(--neon))] transition-colors">
                  {interest.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {interest.description}
                </p>
              </div>
            ))}
          </div>

          {/* Technologies I'm Excited About */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-8">
              Technologies I'm <span className="text-gradient">Excited About</span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech) => (
                <span 
                  key={tech}
                  className="skill-badge px-4 py-2 rounded-full hover:neon-glow transition-all cursor-pointer transform hover:scale-105"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Fun Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            <div className="glassmorphism p-6 rounded-xl text-center hover-tilt">
              <div className="text-3xl font-bold text-[hsl(var(--neon))] mb-2">5TB+</div>
              <p className="text-muted-foreground text-sm">Data Processed</p>
            </div>
            <div className="glassmorphism p-6 rounded-xl text-center hover-tilt">
              <div className="text-3xl font-bold text-[hsl(var(--neon))] mb-2">50+</div>
              <p className="text-muted-foreground text-sm">AI Models Trained</p>
            </div>
            <div className="glassmorphism p-6 rounded-xl text-center hover-tilt">
              <div className="text-3xl font-bold text-[hsl(var(--neon))] mb-2">99%</div>
              <p className="text-muted-foreground text-sm">Cost Reduction Achieved</p>
            </div>
            <div className="glassmorphism p-6 rounded-xl text-center hover-tilt">
              <div className="text-3xl font-bold text-[hsl(var(--neon))] mb-2">6K+</div>
              <p className="text-muted-foreground text-sm">Assessments Automated</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
