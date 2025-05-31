import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useGitHubProjects } from "@/hooks/useGitHubProjects";

interface ProjectData {
  title: string;
  description: string;
  image: string;
  icon: string;
  technologies: string[];
  githubUrl: string;
}

export default function Projects() {
  const { ref, isVisible } = useScrollAnimation();
  const { projects, isLoading, error } = useGitHubProjects();

  const featuredProjects: ProjectData[] = [
    {
      title: "README Generator Agent",
      description: "Pip installable agent that crawls repositories and generates production-level README.md files automatically. Streamlines documentation workflow for developers and open-source projects.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      icon: "fas fa-file-code",
      technologies: ["Python", "NLP", "Git API", "Markdown", "CI/CD"],
      githubUrl: "https://github.com/Tanmayjoshi-3601/read-me"
    },
    {
      title: "Medical Image-to-Text Report Generation",
      description: "Advanced deep learning system using Latent Diffusion models to automatically generate detailed medical reports from medical images, improving diagnostic workflow efficiency.",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      icon: "fas fa-x-ray",
      technologies: ["Jupyter Notebook", "Latent Diffusion", "Computer Vision", "Medical AI", "PyTorch"],
      githubUrl: "https://github.com/Tanmayjoshi-3601/Medical-Image-to-Text-Report-Generation-using-Latent-Diffusion"
    },
    {
      title: "Draftly - UI Designer AI Agent",
      description: "AI-powered UI/UX design assistant that converts natural language into production-ready code, cutting design-to-implementation time by 80% and enabling non-technical users to contribute without coding.",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      icon: "fas fa-magic",
      technologies: ["GPT-4", "React", "Tailwind", "UI/UX", "AI Agents"],
      githubUrl: "https://github.com/Tanmayjoshi-3601/Draftly-UI-Designer-AI-Agent"
    },
    {
      title: "unQuery",
      description: "Advanced natural language query system that transforms complex questions into actionable insights. Leverages modern NLP techniques for intelligent data interaction.",
      image: "https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      icon: "fas fa-search",
      technologies: ["NLP", "Query Processing", "AI", "Data Analytics", "Python"],
      githubUrl: "https://github.com/Tanmayjoshi-3601/unQuery"
    },
    {
      title: "Pneumonia Detection using Parallel Deep Learning",
      description: "High-performance pneumonia detection system utilizing parallel deep learning architectures and GPU programming for real-time medical image analysis.",
      image: "https://images.unsplash.com/photo-1427751840561-9852520f8ce8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      icon: "fas fa-lungs",
      technologies: ["Deep Learning", "GPU Programming", "Medical AI", "Parallel Computing", "CNN"],
      githubUrl: "https://github.com/Tanmayjoshi-3601/Pneumonia-Detection-using-Parallel-Deep-Learning-and-GPU-programming"
    },
    {
      title: "AQI Impact on Covid-19 Hospitalizations",
      description: "Comprehensive data-driven study analyzing the correlation between Air Quality Index and COVID-19 hospitalization rates using advanced statistical modeling.",
      image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
      icon: "fas fa-chart-line",
      technologies: ["Data Science", "Statistical Analysis", "COVID-19 Research", "Environmental Health", "Python"],
      githubUrl: "https://github.com/Tanmayjoshi-3601/AQI-Impact-on-Covid-19-Hospitalizations-A-Data-Driven-Study-"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              AI-powered solutions that solve real-world problems and drive innovation
            </p>
          </div>

          {isLoading && (
            <div className="text-center text-muted-foreground">
              <i className="fas fa-spinner fa-spin text-2xl mb-4"></i>
              <p>Loading projects from GitHub...</p>
            </div>
          )}

          {error && (
            <div className="text-center text-red-400 mb-8">
              <p>Unable to fetch live projects. Showing featured projects.</p>
            </div>
          )}

          {/* Hackathon Achievement */}
          <div className="mb-12">
            <div className="glassmorphism p-6 rounded-2xl border-2 border-[hsl(var(--neon))] hover-tilt">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                  <i className="fas fa-trophy text-background text-xl"></i>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[hsl(var(--neon))]">🏆 Hackathon Achievement</h3>
                  <p className="text-muted-foreground text-sm">Runner-up • National MINED Hackathon 2022</p>
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2">Netflix for Research - Re-Search</h4>
              <p className="text-muted-foreground mb-4">
                Innovative research discovery platform that revolutionizes how researchers find and access academic content. 
                Built during the National MINED Hackathon 2022, securing runner-up position among hundreds of participants.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Research Platform", "Data Mining", "Search Algorithms", "Academic Discovery", "Innovation"].map((tech) => (
                  <span key={tech} className="skill-badge px-2 py-1 text-xs rounded">
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href="https://github.com/Tanmayjoshi-3601/-Netflix-for-Research-Re-Search-National-MINED-Hackathon-2022"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--neon))] hover:text-white transition-colors text-sm"
              >
                <i className="fab fa-github mr-1"></i>View Project
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div 
                key={index} 
                className="glassmorphism p-6 rounded-2xl hover-tilt group transition-all duration-300"
              >
                <img 
                  src={project.image} 
                  alt={`${project.title} - AI/ML project interface`}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                  loading="lazy"
                />
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-[hsl(var(--neon))] to-blue-500 rounded-lg flex items-center justify-center">
                    <i className={`${project.icon} text-background text-sm`}></i>
                  </div>
                  <h3 className="text-xl font-semibold group-hover:text-[hsl(var(--neon))] transition-colors">
                    {project.title}
                  </h3>
                </div>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="skill-badge px-2 py-1 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[hsl(var(--neon))] hover:text-white transition-colors text-sm"
                  >
                    <i className="fab fa-github mr-1"></i>GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* GitHub Projects Section */}
          {projects && projects.length > 0 && (
            <div className="mt-16">
              <h3 className="text-2xl font-semibold mb-8 text-[hsl(var(--neon))] text-center">
                Latest GitHub Projects
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.slice(0, 6).map((repo) => (
                  <div key={repo.id} className="glassmorphism p-4 rounded-xl hover-tilt">
                    <h4 className="text-lg font-semibold mb-2 text-[hsl(var(--neon))]">
                      {repo.name}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-3">
                      {repo.description || "No description available"}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        {repo.language && (
                          <span className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-[hsl(var(--neon))] rounded-full"></div>
                            {repo.language}
                          </span>
                        )}
                        <span className="flex items-center gap-1">
                          <i className="fas fa-star"></i>
                          {repo.stargazers_count}
                        </span>
                      </div>
                      <a 
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[hsl(var(--neon))] hover:text-white transition-colors"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
