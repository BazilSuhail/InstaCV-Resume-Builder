"use client";

import { useState } from "react";
import ResumePreview from "@/components/ResumePreview";
import { defaultResumeData } from "@/lib/defaults";

export default function ResumeEditor() {
  const [resumeData, setResumeData] = useState(defaultResumeData);

  const handleChange = (section: string, field: string, value: string) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen bg-muted">
      {/* Editor Panel */}
      <div className="w-full lg:w-1/2 border-r border-border p-6 overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-6">Resume Editor</h2>

        {/* Personal Information */}
        <section className="mb-6 space-y-3">
          <h3 className="text-lg font-medium text-foreground">Personal Info</h3>

          {Object.entries(resumeData.personal).map(([key, value]) => (
            <div key={key} className="flex flex-col">
              <label className="text-sm text-muted-foreground capitalize">
                {key.replace(/([A-Z])/g, " $1")}
              </label>
              <input
                type="text"
                value={value}
                onChange={(e) => handleChange("personal", key, e.target.value)}
                className="p-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary"
              />
            </div>
          ))}
        </section>

        {/* Skills */}
        <section className="mb-6">
          <h3 className="text-lg font-medium text-foreground">Skills</h3>
          <textarea
            value={resumeData.skills.join(", ")}
            onChange={(e) =>
              setResumeData((prev) => ({
                ...prev,
                skills: e.target.value.split(",").map((s) => s.trim()),
              }))
            }
            className="w-full p-2 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary"
            rows={3}
          />
        </section>

        <p className="text-sm text-muted-foreground">
          Changes update instantly in the preview.
        </p>
      </div>

      {/* Preview Panel */}
      <div className="w-full lg:w-1/2 p-6 overflow-y-auto bg-background">
        <ResumePreview
          data={{
            name: resumeData.personal.fullName,
            title: resumeData.personal.field || "Software Engineer",
            summary: resumeData.personal.summary,
            contact: {
              email: resumeData.personal.email,
              phone: resumeData.personal.phone,
              location: resumeData.personal.location,
            },
            experience: resumeData.experience.map((exp) => ({
              role: exp.position,
              company: exp.company,
              duration: `${exp.startDate} - ${exp.endDate}`,
              description: exp.description,
            })),
            education: resumeData.education.map((edu) => ({
              degree: `${edu.degree} in ${edu.field}`,
              institution: edu.school,
              year: edu.graduationYear,
            })),
            skills: resumeData.skills,
          }}
        />
      </div>
    </div>
  );
}
