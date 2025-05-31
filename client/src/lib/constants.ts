export const RESUME_DATA = {
  name: "Tanmay Joshi",
  title: "AI Engineer & Software Developer",
  email: "joshi.tanm@northeastern.edu",
  location: "Boston, MA",
  linkedin: "https://linkedin.com/in/tanmay-joshi",
  github: "https://github.com/Tanmayjoshi-3601",
  
  summary: "Results-driven Software Engineer specializing in AI, focused on creating innovative Generative AI solutions and scalable MLOps frameworks that accelerate business objectives and enhance user experiences. Demonstrated success in architecting and deploying end-to-end AI systems that drive substantial operational efficiencies and user engagement, leveraging Python, Java, Kubernetes, and multi-cloud environments.",
  
  skills: {
    ml_llm: ["Transformers", "RAG", "PyTorch", "TensorFlow", "LangChain", "HuggingFace", "OpenAI", "LoRA/PEFT"],
    languages: ["Python", "Java", "Bash", "Spark"],
    mlops: ["MLflow", "SageMaker", "Azure ML", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"],
    cloud_data: ["AWS (SageMaker, EC2, Lambda)", "Azure (AI Studio, OpenAI)", "Spark", "Hadoop", "MongoDB", "Relational Databases"]
  }
};

export const GITHUB_CONFIG = {
  username: "Tanmayjoshi-3601",
  apiUrl: "https://api.github.com",
  // Add your GitHub token here if needed for higher rate limits
  token: import.meta.env.VITE_GITHUB_TOKEN || undefined
};

export const ANIMATION_CONFIG = {
  duration: {
    short: 300,
    medium: 600,
    long: 1000
  },
  ease: {
    default: "cubic-bezier(0.23, 1, 0.320, 1)",
    bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)"
  }
};

export const THEME_CONFIG = {
  colors: {
    neon: "#00eaff",
    dark: "#0a0a0a",
    card: "#1a1a1a",
    border: "#2a2a2a"
  }
};
