import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaGithub } from "react-icons/fa";

interface CVData {
  name: string;
  title: string;
  summary: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    linkedin?: string;
    github?: string;
  };
  experience: {
    role: string;
    company: string;
    duration: string;
    description: string;
  }[];
  education: {
    degree: string;
    institution: string;
    year: string;
  }[];
  skills: string[];
}

export default function ResumePreview({ data }: { data: CVData }) {
  return (
    <div className="bg-white shadow-lg border border-gray-200 rounded-xl p-8 w-full max-w-3xl mx-auto">
      {/* Header */}
      <div className="border-b border-gray-200 pb-4 mb-4">
        <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
        <p className="text-lg text-primary font-medium">{data.title}</p>

        <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <FaEnvelope /> {data.contact.email}
          </div>
          <div className="flex items-center gap-2">
            <FaPhone /> {data.contact.phone}
          </div>
          <div className="flex items-center gap-2">
            <FaMapMarkerAlt /> {data.contact.location}
          </div>
          {data.contact.linkedin && (
            <a
              href={data.contact.linkedin}
              className="flex items-center gap-2 text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin /> LinkedIn
            </a>
          )}
          {data.contact.github && (
            <a
              href={data.contact.github}
              className="flex items-center gap-2 text-gray-800 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub /> GitHub
            </a>
          )}
        </div>
      </div>

      {/* Summary */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">Summary</h2>
        <p className="text-gray-700 leading-relaxed">{data.summary}</p>
      </section>

      {/* Experience */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3 text-gray-800">Experience</h2>
        <div className="space-y-4">
          {data.experience.map((exp, i) => (
            <div key={i}>
              <h3 className="font-medium text-gray-900">{exp.role}</h3>
              <p className="text-sm text-gray-600">
                {exp.company} • {exp.duration}
              </p>
              <p className="text-gray-700 mt-1">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3 text-gray-800">Education</h2>
        <div className="space-y-2">
          {data.education.map((edu, i) => (
            <div key={i}>
              <p className="font-medium text-gray-900">{edu.degree}</p>
              <p className="text-sm text-gray-600">
                {edu.institution} • {edu.year}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="text-xl font-semibold mb-3 text-gray-800">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {data.skills.map((skill, i) => (
            <span
              key={i}
              className="px-3 py-1 bg-primary text-primary-foreground text-sm rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}
