export const SKILL_CATEGORIES = [
  { number: "01", name: "Languages", items: ["C++", "JavaScript", "SQL", "Python"] },
  {
    number: "02",
    name: "Software Development",
    items: ["React.js", "Node.js", "Express.js", "FastAPI", "REST APIs", "WebSockets", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    number: "03",
    name: "AI and Machine Learning",
    items: ["AI Chatbots", "Hugging Face Transformers", "Scikit-learn", "TensorFlow", "Pandas", "NumPy"],
  },
  { number: "04", name: "Developer Tools", items: ["Git", "GitHub", "VS Code", "MySQL"] },
] as const;

export const SKILLS_COPY = {
  heading: "The Toolkit",
  intro: "Tools I use to turn ideas into working products.",
} as const;