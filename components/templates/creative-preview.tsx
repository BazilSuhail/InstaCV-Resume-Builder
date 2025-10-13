// components/html-templates/creative-html.tsx
import type { ResumeData } from "@/lib/resume";

export interface CreativePdfTemplateProps {
   data: ResumeData;
}

export function CreativeHtmlTemplate({ data }: CreativePdfTemplateProps) {
  const safe = (t?: string) => t || "-";

  return (
    <div className="p-8 bg-white text-gray-800 w-[210mm] min-h-[297mm] mx-auto font-sans">
      {/* Header with accent color */}
      <div className="bg-linear-to-r from-emerald-500 to-teal-600 text-white p-8 mb-6 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold tracking-wide">{safe(data.personal?.fullName)}</h1>
        <div className="flex flex-wrap gap-4 mt-2 text-emerald-100">
          <span>{safe(data.personal?.email)}</span> | 
          <span>{safe(data.personal?.phone)}</span> | 
          <span>{safe(data.personal?.location)}</span>
        </div>
      </div>

      <div className="flex gap-6">
        {/* Left Column */}
        <aside className="w-1/3">
          {/* About Section */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-emerald-500 pb-1 mb-3 flex items-center">
              <span className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
              About Me
            </h2>
            <p className="text-gray-600 italic leading-relaxed">
              {safe(data.personal?.summary)}
            </p>
          </section>

          {/* Skills Section */}
          <section className="mb-6">
            <h2 className="text-xl font-bold border-b-2 border-emerald-500 pb-1 mb-3 flex items-center">
              <span className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
              Skills
            </h2>
            <div className="space-y-2">
              {Array.isArray(data.skills) && data.skills.map((skill, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                  <span className="text-sm font-medium">{skill}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section>
            <h2 className="text-xl font-bold border-b-2 border-emerald-500 pb-1 mb-3 flex items-center">
              <span className="w-3 h-3 bg-emerald-500 rounded-full mr-2"></span>
              Education
            </h2>
            {Array.isArray(data.education) && data.education.map((edu, i) => (
              <div key={i} className="mb-4">
                <h3 className="font-bold text-emerald-700">{safe(edu.degree)}</h3>
                <p className="font-semibold">{safe(edu.school)}</p>
                <p className="text-sm text-gray-600">{safe(edu.graduationYear)}</p>
                <p className="text-sm italic">{safe(edu.field)}</p>
              </div>
            ))}
          </section>
        </aside>

        {/* Right Column */}
        <main className="w-2/3">
          {/* Experience Section */}
          <section className="mb-6">
            <h2 className="text-2xl font-bold border-b-2 border-emerald-500 pb-1 mb-4 flex items-center">
              <span className="w-4 h-4 bg-emerald-500 rounded-full mr-2"></span>
              Professional Experience
            </h2>
            
            {Array.isArray(data.experience) && data.experience.map((exp, i) => (
              <div key={i} className="mb-6 p-4 bg-emerald-50 rounded-lg border-l-4 border-emerald-500">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-bold text-emerald-700">{safe(exp.position)}</h3>
                    <p className="font-semibold text-gray-800">{safe(exp.company)}</p>
                  </div>
                  <span className="text-sm font-medium bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full">
                    {safe(exp.startDate)} – {safe(exp.endDate)}
                  </span>
                </div>
                <p className="mt-2 text-gray-600">{safe(exp.description)}</p>
              </div>
            ))}
          </section>

          {/* Portfolio Section */}
          <section>
            <h2 className="text-2xl font-bold border-b-2 border-emerald-500 pb-1 mb-4 flex items-center">
              <span className="w-4 h-4 bg-emerald-500 rounded-full mr-2"></span>
              Featured Projects
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2].map((item) => (
                <div key={item} className="border border-gray-200 rounded-lg p-3 bg-gray-50">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-24 mb-2" />
                  <h3 className="font-semibold">Project Title</h3>
                  <p className="text-sm text-gray-600">Brief description of the project</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>

      {/* Footer */}
      <div className="mt-8 pt-4 border-t border-emerald-200 text-center text-sm text-emerald-600">
        Designed with creativity • Updated: {new Date().toLocaleDateString()}
      </div>
    </div>
  );
}