// components/html-templates/modern-minimal-html.tsx
import React from "react";
import type { ResumeData } from "@/lib/resume";

export interface ModernMinimalHtmlProps {
  data: ResumeData;
}

export function ModernHtmlTemplate({ data }: ModernMinimalHtmlProps) {
  const safe = (t?: string) => t || "-";

  return (
    <div className="p-10 bg-white text-black font-sans w-[210mm] min-h-[297mm] mx-auto">
      <h1 className="text-4xl font-semibold mb-1 tracking-tight">
        {safe(data.personal?.fullName)}
      </h1>

      <div className="text-sm text-gray-700 mb-8">
        <p>{safe(data.personal?.email)}</p>
        <p>{safe(data.personal?.phone)}</p>
        <p>{safe(data.personal?.location)}</p>
      </div>

      {data.personal?.summary && (
        <p className="text-sm leading-relaxed mb-10 text-gray-800">
          {data.personal.summary}
        </p>
      )}

      {Array.isArray(data.experience) && data.experience.length > 0 && (
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4 tracking-wide">
            Experience
          </h2>

          {data.experience.map((exp, i) => (
            <div key={i} className="mb-6">
              <div className="flex justify-between text-sm font-medium">
                <span>{safe(exp.position)}</span>
                <span className="text-gray-500">
                  {safe(exp.startDate)} – {safe(exp.endDate)}
                </span>
              </div>

              <p className="text-sm text-gray-700">
                {safe(exp.company)}
              </p>

              <p className="text-sm text-gray-700 mt-1">
                {safe(exp.description)}
              </p>
            </div>
          ))}
        </section>
      )}

      {Array.isArray(data.skills) && data.skills.length > 0 && (
        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-4 tracking-wide">
            Skills
          </h2>

          <div className="flex flex-wrap gap-2">
            {data.skills.map((s, i) => (
              <span
                key={i}
                className="text-xs border border-gray-300 px-3 py-1 rounded-full"
              >
                {s}
              </span>
            ))}
          </div>
        </section>
      )}

      {Array.isArray(data.education) && data.education.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold mb-4 tracking-wide">
            Education
          </h2>

          {data.education.map((edu, i) => (
            <div key={i} className="mb-5">
              <div className="flex justify-between text-sm font-medium">
                <span>{safe(edu.school)}</span>
                <span className="text-gray-500">
                  {safe(edu.graduationYear)}
                </span>
              </div>

              <p className="text-sm">
                {safe(edu.degree)} in {safe(edu.field)}
              </p>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
