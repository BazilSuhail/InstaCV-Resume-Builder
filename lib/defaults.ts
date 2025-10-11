import type { ResumeData } from "./resume"

export const defaultResumeData: ResumeData = {
  personal: {
    fullName: "Bazil Suhail",
    email: "bazil.shuail@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    summary:
      "Experienced Full-Stack and Machine Learning Engineer with 5+ years of experience in building scalable web and AI-driven applications. Skilled in designing cloud-native architectures, optimizing ML models, and leading full-cycle development. Proficient in React, Node.js, and Python-based ML frameworks.",
  },
  experience: [
    {
      company: "Tech Innovations Inc.",
      position: "Senior Software Engineer",
      startDate: "Jan 2022",
      endDate: "Present",
      description:
        "Led development of microservices architecture serving 1M+ users. Improved system performance by 40% through optimization and caching strategies. Integrated ML-driven analytics to personalize user experiences.",
    },
    {
      company: "Digital Solutions Co.",
      position: "Full-Stack Developer",
      startDate: "Jun 2020",
      endDate: "Dec 2021",
      description:
        "Built responsive web applications using React and Node.js. Implemented CI/CD pipelines and reduced deployment time by 60%. Developed data-driven dashboards using Python and Flask APIs.",
    },
  ],
  education: [
    {
      school: "University of Technology",
      degree: "Bachelor of Science",
      field: "Computer Science",
      graduationYear: "2020",
    },
    {
      school: "Bay Area Community College",
      degree: "Associate Degree",
      field: "Information Technology",
      graduationYear: "2017",
    },
    {
      school: "Greenwood High School",
      degree: "High School Diploma",
      field: "Science and Mathematics",
      graduationYear: "2015",
    },
  ],
  skills: [
    // Frontend
    "React",
    "Next.js",
    "TypeScript",
    "Redux",
    "Tailwind CSS",
    "React Query",
    // Backend
    "Node.js",
    "Express.js",
    "GraphQL",
    "PostgreSQL",
    "MongoDB",
    "REST APIs",
    // Machine Learning
    "Python",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    // DevOps & Cloud
    "Docker",
    "Kubernetes",
    "AWS",
    "CI/CD Pipelines",
    "Nginx",
    // Other
    "System Design",
    "Git",
    "Jest",
    "Agile Development",
  ],
}