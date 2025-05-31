import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface Publication {
  title: string;
  authors: string;
  journal: string;
  description: string;
  doi?: string;
  arxiv?: string;
  year: number;
}

export default function Publications() {
  const { ref, isVisible } = useScrollAnimation();

  const publications: Publication[] = [
    {
      title: "Forecasting and mitigation of global environmental carbon dioxide emission using machine learning techniques",
      authors: "Harsh Bhatt, Manan Davawala, Tanmay Joshi, Manan Shah, Ashish Unnarkat",
      journal: "Cleaner Chemical Engineering, 2023",
      description: "Carbon dioxide emission has emerged as a major concern in the 21st century. This research addresses the rising global average temperature and its impact on climate change, examining socioeconomic implications and developing ML-based forecasting models for CO2 emission mitigation strategies.",
      year: 2023
    },
    {
      title: "Compressive strength prediction of high-strength concrete using machine learning",
      authors: "Manan Davawala, Tanmay Joshi, Manan Shah",
      journal: "Emergent Materials, Springer, Volume 6, Issue 1, Pages 321-335, 2023",
      description: "For decades, concrete has been one of the most used materials in the construction industry. This research analyzes proportions of various chemical and mineral admixtures, plasticizers, and fibers to achieve high strength, satisfactory durability, and sustainable concrete using machine learning techniques for predicting mechanical properties.",
      year: 2023
    }
  ];

  return (
    <section id="publications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Publications & <span className="text-gradient">Research</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              Contributing to the advancement of AI and machine learning through research and innovation
            </p>
            <div className="glassmorphism p-4 rounded-xl max-w-3xl mx-auto">
              <p className="text-sm text-[hsl(var(--neon))] font-semibold mb-2">Current Research Interests</p>
              <p className="text-muted-foreground mb-3">
                Actively exploring <span className="text-[hsl(var(--neon))] font-medium">Large Language Models (LLMs)</span>, 
                <span className="text-[hsl(var(--neon))] font-medium"> AI Agents</span>, multimodal systems, and their applications 
                in healthcare, education, and enterprise environments. Focus on developing scalable, efficient AI solutions 
                that bridge the gap between research and real-world implementation.
              </p>
              <a 
                href="https://scholar.google.com/citations?user=O403qPAAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[hsl(var(--neon))] hover:text-white transition-colors text-sm flex items-center justify-center gap-2"
              >
                <i className="fab fa-google"></i>
                View Complete Publication Profile
              </a>
            </div>
          </div>

          <div className="space-y-8">
            {publications.map((pub, index) => (
              <div key={index} className="glassmorphism p-6 rounded-xl hover-tilt">
                <h3 className="text-xl font-semibold mb-3 text-[hsl(var(--neon))]">
                  {pub.title}
                </h3>
                <p className="text-muted-foreground mb-3 text-sm">
                  {pub.authors} ({pub.year}). <em>{pub.journal}</em>
                </p>
                <p className="text-foreground mb-4 leading-relaxed">
                  {pub.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  {index === 0 && (
                    <a 
                      href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=O403qPAAAAAJ&citation_for_view=O403qPAAAAAJ:u5HHmVD_uO8C"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[hsl(var(--neon))] hover:text-white transition-colors text-sm flex items-center gap-1"
                    >
                      <i className="fab fa-google"></i>
                      Google Scholar
                    </a>
                  )}
                  {index === 1 && (
                    <a 
                      href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=O403qPAAAAAJ&citation_for_view=O403qPAAAAAJ:d1gkVwhDpl0C"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[hsl(var(--neon))] hover:text-white transition-colors text-sm flex items-center gap-1"
                    >
                      <i className="fab fa-google"></i>
                      Google Scholar
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Research Stats */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="glassmorphism p-6 rounded-xl text-center hover-tilt">
              <div className="text-3xl font-bold text-[hsl(var(--neon))] mb-2">2</div>
              <p className="text-muted-foreground">Published Papers</p>
            </div>
            <div className="glassmorphism p-6 rounded-xl text-center hover-tilt">
              <div className="text-3xl font-bold text-[hsl(var(--neon))] mb-2">48</div>
              <p className="text-muted-foreground">Citations</p>
            </div>
            <div className="glassmorphism p-6 rounded-xl text-center hover-tilt">
              <div className="text-3xl font-bold text-[hsl(var(--neon))] mb-2">4+</div>
              <p className="text-muted-foreground">Research Areas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
