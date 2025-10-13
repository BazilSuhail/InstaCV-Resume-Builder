// components/html-templates/creative-html.tsx
import type { ResumeData } from "@/lib/resume";

export interface CreativePdfTemplateProps {
   data: ResumeData;
}

export function CreativeHtmlTemplate({ data }: CreativePdfTemplateProps) {
  const safe = (t?: string) => t || "-";

  return (
    <div className="p-6 bg-white text-gray-800 w-[210mm] min-h-[297mm] mx-auto font-sans">
      {/* Header with accent color */}
      <div className="bg-linear-to-r from-emerald-500 to-teal-600 text-white p-6 mb-4 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold tracking-wide">{safe(data.personal?.fullName)}</h1>
        <div className="flex flex-wrap gap-3 mt-2 text-emerald-100 text-sm">
          <span>{safe(data.personal?.email)}</span> | 
          <span>{safe(data.personal?.phone)}</span> | 
          <span>{safe(data.personal?.location)}</span>
        </div>
      </div>

      <div className="flex gap-4">
        {/* Left Column */}
        <aside className="w-1/3">
          {/* About Section */}
          <section className="mb-4">
            <h2 className="text-lg font-bold border-b-2 border-emerald-500 pb-1 mb-2 flex items-center">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
              About Me
            </h2>
            <p className="text-sm text-gray-600 italic leading-relaxed">
              {safe(data.personal?.summary)}
            </p>
          </section>

          {/* Skills Section */}
          <section className="mb-4">
            <h2 className="text-lg font-bold border-b-2 border-emerald-500 pb-1 mb-2 flex items-center">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
              Skills
            </h2>
            <div className="flex flex-wrap gap-1">
              {Array.isArray(data.skills) && data.skills.map((skill, i) => (
                <span key={i} className="text-xs bg-emerald-100 text-emerald-800 px-2 py-1 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-lg font-bold border-b-2 border-emerald-500 pb-1 mb-2 flex items-center">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></span>
              Education
            </h2>
            {Array.isArray(data.education) && data.education.map((edu, i) => (
              <div key={i} className="mb-3">
                <h3 className="font-bold text-emerald-700 text-sm">{safe(edu.degree)}</h3>
                <p className="font-semibold text-xs">{safe(edu.school)}</p>
                <p className="text-xs text-gray-600">{safe(edu.graduationYear)}</p>
                <p className="text-xs italic">{safe(edu.field)}</p>
              </div>
            ))}
          </section>
        </aside>

        {/* Right Column */}
        <main className="w-2/3">
          {/* Experience Section */}
          <section className="mb-4">
            <h2 className="text-xl font-bold border-b-2 border-emerald-500 pb-1 mb-3 flex items-center">
              <span className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
              Professional Experience
            </h2>
            
            {Array.isArray(data.experience) && data.experience.map((exp, i) => (
              <div key={i} className="mb-4 p-3 bg-emerald-50 rounded border-l-4 border-emerald-500">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-base font-bold text-emerald-700">{safe(exp.position)}</h3>
                    <p className="font-semibold text-sm">{safe(exp.company)}</p>
                  </div>
                  <span className="text-xs font-medium bg-emerald-100 text-emerald-800 px-2 py-1 rounded">
                    {safe(exp.startDate)} – {safe(exp.endDate)}
                  </span>
                </div>
                <p className="mt-1 text-sm text-gray-600">{safe(exp.description)}</p>
              </div>
            ))}
          </section>

          {/* Portfolio Section */}
          <section>
            <h2 className="text-xl font-bold border-b-2 border-emerald-500 pb-1 mb-3 flex items-center">
              <span className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
              Featured Projects
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {[1, 2].map((item) => (
                <div key={item} className="border border-gray-200 rounded p-2 bg-gray-50">
                  <div className="bg-gray-200 border border-dashed rounded w-full h-16 mb-1" />
                  <h3 className="font-semibold text-xs">Project Title</h3>
                  <p className="text-xs text-gray-600">Brief description</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-emerald-200 text-center text-xs text-emerald-600">
        Designed with creativity • Updated: {new Date().toLocaleDateString()}
      </div>
    </div>
  );
}