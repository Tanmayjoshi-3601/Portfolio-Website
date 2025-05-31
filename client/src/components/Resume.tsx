import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
  icon: string;
}

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  location: string;
  gpa: string;
  icon: string;
}

export default function Resume() {
  const { ref, isVisible } = useScrollAnimation();

  const experiences: ExperienceItem[] = [
    {
      title: "Machine Learning Engineer Intern",
      company: "The American Board of Anesthesiology",
      period: "August 2024 – May 2025",
      location: "Raleigh, USA",
      icon: "fas fa-brain",
      achievements: [
        "Led the transformation of medical assessment systems for 5K+ healthcare professionals by deploying production RAG systems using GPT-4, Python, LangChain, and MLflow. Fine-tuned LLMs with Q-LoRA and PEFT techniques on 5TB+ domain-specific medical corpora, achieving 99% cost reduction in exam question generation ($50K→$500) and 55% improvement in retrieval precision. Architected multimodal evaluation platform with ASR/Whisper and LLM/GPT-4 scoring that automated feedback for 6K+ annual oral exams. Deployed high-availability ML inference APIs on Kubernetes (AKS), reducing deployment latency by 40% and directly transforming medical certification processes."
      ]
    },
    {
      title: "Software Development Research Assistant",
      company: "Department of Research Computing (Northeastern University)",
      period: "June 2024 – August 2024",
      location: "Boston, USA",
      icon: "fas fa-university",
      achievements: [
        "Optimized GPU resource allocation for hundreds of university researchers by implementing a comprehensive data processing pipeline using PySpark and R for statistical analysis of 170M+ SLURM job records. Applied time series modeling and predictive analytics algorithms, achieving 25% improvement in GPU allocation efficiency. Developed containerized AI infrastructure using Docker and Podman in Linux environments, integrating Llama2 and Llama3 models with distributed computing frameworks in Python and Scala. Reduced AI model deployment time by 40%, significantly accelerating research workflows across multiple departments."
      ]
    },
    {
      title: "Software Engineer",
      company: "IQSpatial",
      period: "January 2023 – August 2023",
      location: "New York, USA",
      icon: "fas fa-code",
      achievements: [
        "Architected and launched a comprehensive RFP recommendation engine on AWS using EKS, SageMaker Endpoints, OpenSearch for vector search, and DynamoDB, driving 100% product revenue uplift with sub-second latency through advanced semantic matching. Built and automated complete MLOps pipeline using Airflow, MLflow, and SageMaker Pipelines for model CI/CD and real-time data ingestion from 200+ sources processing 10K+ documents daily. Led end-to-end development of sophisticated recommendation algorithms on AWS SageMaker including two-tower models and LambdaMART for re-ranking, achieving 35% improvement in relevance metrics (NDCG@10, Recall@50) and significant business impact. Engineered robust data pipeline on AWS using EMR/Spark, S3 data lake, Glue, and Kinesis with Python for high-volume RFP extraction and processing, maintaining 99.95%+ uptime and data integrity."
      ]
    },
    {
      title: "Student Researcher",
      company: "State University of New York, Binghamton",
      period: "September 2022 – January 2023",
      location: "Binghamton, USA",
      icon: "fas fa-microscope",
      achievements: [
        "Elevated epitope prediction accuracy in vaccine development by designing a custom Bidirectional-LSTM model with PyTorch, implementing self-attention mechanisms with JAX to capture long-range dependencies in sequence data. Enhanced feature extraction efficiency by 15% and achieved 87% prediction accuracy through advanced deep learning architectures. Leveraged SMOTE for data augmentation to address class imbalance, increasing recall by 64% and precision by 4x for minority classes, significantly improving overall model robustness for critical vaccine development applications."
      ]
    },
    {
      title: "Machine Learning Research Intern",
      company: "Bhaskarcharya National Institute for Space Applications and Geoinformatics (BISAG-N)",
      period: "May 2022 – July 2022",
      location: "Gandhinagar, India",
      icon: "fas fa-satellite",
      achievements: [
        "Developed a novel image steganography architecture using Generative Adversarial Networks (GANs), optimizing model parameters for real-time inference on NVIDIA GPUs with custom CUDA kernels for faster encoding/decoding operations. Achieved 90% improved encoding capacity while maintaining 99.99% decoding accuracy through advanced model architecture optimization including layer freezing and quantization. Created a PyQt-based UI with GPU-accelerated image processing, enabling efficient deployment on resource-constrained devices and decreasing data transmission time by 50%."
      ]
    }
  ];

  const education: EducationItem[] = [
    {
      degree: "Master of Science in Software Engineering Systems",
      institution: "Northeastern University, College of Engineering",
      period: "September 2023 – Present",
      location: "Boston, MA",
      gpa: "3.80/4.0",
      icon: "fas fa-graduation-cap"
    },
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Institute of Technology, Nirma University",
      period: "July 2019 – May 2023",
      location: "Ahmedabad, India",
      gpa: "8.02/10.0",
      icon: "fas fa-graduation-cap"
    }
  ];

  const downloadResume = () => {
    // Download the actual resume PDF
    const link = document.createElement('a');
    link.href = '/Tanmay Joshi.pdf';
    link.download = 'Tanmay_Joshi_Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div 
          ref={ref}
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              My path through AI, machine learning, and software engineering
            </p>
            <Button
              onClick={downloadResume}
              className="magnetic-btn bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
            >
              <i className="fas fa-download mr-2"></i>
              Download Resume PDF
            </Button>
          </div>

          {/* Experience Timeline */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8 text-[hsl(var(--neon))] text-center">Professional Experience</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[hsl(var(--neon))] to-transparent"></div>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-12 glassmorphism p-6 rounded-xl hover-tilt">
                    <div className="absolute left-0 top-6 w-8 h-8 bg-[hsl(var(--neon))] rounded-full flex items-center justify-center">
                      <i className={`${exp.icon} text-background text-sm`}></i>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <h4 className="text-xl font-semibold text-[hsl(var(--neon))]">{exp.title}</h4>
                      <span className="text-muted-foreground text-sm">{exp.period}</span>
                    </div>
                    <p className="text-foreground font-medium mb-3">{exp.company} • {exp.location}</p>
                    <ul className="text-muted-foreground space-y-2 text-sm">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i}>• {achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education Timeline */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-[hsl(var(--neon))] text-center">Education</h3>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[hsl(var(--neon))] to-transparent"></div>
              
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-12 glassmorphism p-6 rounded-xl hover-tilt">
                    <div className="absolute left-0 top-6 w-8 h-8 bg-[hsl(var(--neon))] rounded-full flex items-center justify-center">
                      <i className={`${edu.icon} text-background text-sm`}></i>
                    </div>
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                      <h4 className="text-xl font-semibold text-[hsl(var(--neon))]">{edu.degree}</h4>
                      <span className="text-muted-foreground text-sm">{edu.period}</span>
                    </div>
                    <p className="text-foreground font-medium mb-2">{edu.institution}</p>
                    <p className="text-muted-foreground text-sm">{edu.location}</p>
                    <p className="text-[hsl(var(--neon))] font-semibold mt-2">GPA: {edu.gpa}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
