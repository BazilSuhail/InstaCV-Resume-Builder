import ResumePreview from "@/components/ResumePreview";

export default function CVPage() {
  const dummyData = {
    name: "Bazil Suhail",
    title: "Software Engineer",
    summary:
      "Passionate developer with a focus on building scalable web applications and optimizing system design.",
    contact: {
      email: "bazil@example.com",
      phone: "+1 234 567 890",
      location: "Bangalore, India",
      linkedin: "https://linkedin.com/in/bazilsuhail",
      github: "https://github.com/bazilsuhail",
    },
    experience: [
      {
        role: "Frontend Developer",
        company: "TechCorp",
        duration: "2022 - Present",
        description:
          "Developed high-performance web applications using React, TypeScript, and Tailwind CSS.",
      },
      {
        role: "Software Engineer Intern",
        company: "CloudSoft",
        duration: "2021 - 2022",
        description:
          "Contributed to API integrations and UI enhancements across multiple client projects.",
      },
    ],
    education: [
      {
        degree: "B.Tech in Computer Science",
        institution: "MIT University",
        year: "2022",
      },
    ],
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB"],
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-8 bg-muted">
      <ResumePreview data={dummyData} />
    </div>
  );
}
