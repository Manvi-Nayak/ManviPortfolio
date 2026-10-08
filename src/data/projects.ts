export interface PortfolioProject {
  id: string;
  name: string;
  description: string;
  details: string;
  technologies: readonly string[];
  githubUrl: string;
}

/** Verified Manvi-Nayak repository URLs; keep all project configuration here. */
export const PROJECTS: readonly PortfolioProject[] = [
  {
    id: "01",
    name: "Mahakumbh",
    description: "An AI-powered emergency response platform designed to analyze incidents, recommend resources and support coordinated response.",
    details: "Analyzes emergency incidents and recommends resources to support coordinated response. Real-time communication helps keep incident information available as situations evolve. Built around a live dashboard, it brings incident reports, resource suggestions and team updates into one shared view so responders can act faster with clearer context.",
    technologies: ["React.js", "FastAPI", "Gemini API", "WebSockets", "SQLite"],
    githubUrl: "https://github.com/Manvi-Nayak/Mahakumbh-AI-Powered-ERCP",
  },
  {
    id: "02",
    name: "Last-Mile Delivery Tracker",
    description: "A full-stack delivery tracking system designed to improve visibility across the final mile between dispatch and arrival.",
    details: "Tracks deliveries across the final leg from dispatch to arrival. The full-stack system brings delivery information together to improve visibility into that journey. Status updates, route stages and delivery records stay connected through a REST API, giving dispatchers and recipients a consistent, reliable picture at every step.",
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "REST APIs"],
    githubUrl: "https://github.com/Manvi-Nayak/last-mile-delivery",
  },
  {
    id: "03",
    name: "TalkEase",
    description: "An AI-powered language learning platform for real-time conversation, interactive learning and personalized practice.",
    details: "Supports real-time conversation and interactive language learning. AI-powered practice helps learners develop their language skills through personalized sessions. Learners speak with an AI partner, receive instant feedback and revisit progress over time, turning practice into natural, low-pressure everyday conversation.",
    technologies: ["JavaScript", "FastAPI", "Firebase", "WebSockets", "Hugging Face"],
    githubUrl: "https://github.com/Manvi-Nayak/TalkEase",
  },
  {
    id: "04",
    name: "PCOS IntelliDetect",
    description: "A machine learning screening system that analyzes clinical data to support PCOS risk assessment.",
    details: "Analyzes clinical data using machine learning to support PCOS risk assessment. It explores screening support, rather than replacing a clinical diagnosis. The workflow covers data cleaning, feature selection and model comparison, then serves predictions through a simple Flask interface designed for clarity.",
    technologies: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "Flask"],
    githubUrl: "https://github.com/Manvi-Nayak/PCOS-IntelliDetect",
  },
  {
    id: "05",
    name: "Customer Churn Prediction",
    description: "A machine learning project that analyzes customer data to identify patterns associated with churn.",
    details: "Analyzes customer data to identify patterns associated with churn. Machine learning is used to explore which customers may be at risk of leaving. The pipeline includes exploratory analysis, feature engineering and model evaluation, surfacing the factors that most influence whether a customer stays or leaves.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Machine Learning"],
    githubUrl: "https://github.com/Manvi-Nayak/Customer-Churn-Prediction",
  },
];

export const PROJECTS_COPY = {
  heading: "Things I've Built",
  intro: "Projects that turned ideas into something real.",
} as const;