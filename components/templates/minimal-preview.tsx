// components/html-templates/one-col-html.tsx
import React from "react";
import type { ResumeData } from "@/lib/resume";

export interface OneColHtmlProps {
  data: ResumeData;
}

export function MinimalHtmlTemplate({ data }: OneColHtmlProps) {
  const safe = (t?: string) => t || "-";

  return (
    <div className="p-10 bg-white text-black font-serif w-[210mm] min-h-[297mm] mx-auto">
      <h1 className="text-4xl font-bold mb-2">
        {safe(data.personal?.fullName)}
      </h1>

      <div className="text-sm mb-6">
        <p>{safe(data.personal?.email)}</p>
        <p>{safe(data.personal?.phone)}</p>
        <p>{safe(data.personal?.location)}</p>
      </div>

      {data.personal?.summary && (
        <p className="text-sm text-gray-700 mb-6">
          {data.personal.summary}
        </p>
      )}

      {Array.isArray(data.skills) && data.skills.length > 0 && (
        <section className="mb-6">
          <h2 className="uppercase text-sm font-bold mb-3">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {data.skills.map((s, i) => (
              <span key={i} className="text-xs bg-gray-200 rounded px-2 py-1">
                {s}
              </span>
            ))}
          </div>
        </section>
      )}

      {Array.isArray(data.experience) && data.experience.length > 0 && (
        <section className="mb-6">
          <h2 className="uppercase text-sm font-bold mb-3">Experience</h2>
          {data.experience.map((exp, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between text-sm font-bold">
                <span>{safe(exp.position)}</span>
                <span className="text-gray-600">
                  {safe(exp.startDate)} – {safe(exp.endDate)}
                </span>
              </div>
              <div className="text-sm font-semibold">
                {safe(exp.company)}
              </div>
              <p className="text-sm text-gray-700">{safe(exp.description)}</p>
            </div>
          ))}
        </section>
      )}

      {Array.isArray(data.education) && data.education.length > 0 && (
        <section>
          <h2 className="uppercase text-sm font-bold mb-3">Education</h2>
          {data.education.map((edu, i) => (
            <div key={i} className="mb-3">
              <div className="flex justify-between text-sm font-bold">
                <span>{safe(edu.school)}</span>
                <span className="text-gray-600">
                  {safe(edu.graduationYear)}
                </span>
              </div>
              <div className="text-sm">
                {safe(edu.degree)} in {safe(edu.field)}
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
}
