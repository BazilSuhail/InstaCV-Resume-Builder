"use client"

import { useState, ChangeEvent } from "react"

type PersonalInfo = {
  fullName: string
  email: string
  phone: string
  location: string
  summary: string
}

type Experience = {
  company: string
  position: string
  startDate: string
  endDate: string
  description: string
}

type Education = {
  school: string
  degree: string
  field: string
  graduationYear: string
}

type ResumeData = {
  personal: PersonalInfo
  experience: Experience[]
  education: Education[]
  skills: string[]
}

type ResumeEditorProps = {
  data: ResumeData
  onChange: (data: ResumeData) => void
}

export function ResumeEditor({ data, onChange }: ResumeEditorProps) {
  const [activeSection, setActiveSection] = useState<"personal" | "experience" | "education" | "skills">("personal")

  const updatePersonal = (field: keyof PersonalInfo, value: string) => {
    onChange({
      ...data,
      personal: { ...data.personal, [field]: value },
    })
  }

  const updateExperience = (index: number, field: keyof Experience, value: string) => {
    const updated = [...data.experience]
    updated[index] = { ...updated[index], [field]: value }
    onChange({ ...data, experience: updated })
  }

  const updateEducation = (index: number, field: keyof Education, value: string) => {
    const updated = [...data.education]
    updated[index] = { ...updated[index], [field]: value }
    onChange({ ...data, education: updated })
  }

  const updateSkills = (value: string) => {
    onChange({ ...data, skills: value.split(",").map((s) => s.trim()) })
  }

  const addExperience = () => {
    onChange({
      ...data,
      experience: [...data.experience, { company: "", position: "", startDate: "", endDate: "", description: "" }],
    })
  }

  const removeExperience = (index: number) => {
    const updatedExperience = [...data.experience]
    updatedExperience.splice(index, 1)
    onChange({ ...data, experience: updatedExperience })
  }

  const addEducation = () => {
    onChange({
      ...data,
      education: [...data.education, { school: "", degree: "", field: "", graduationYear: "" }],
    })
  }

  const removeEducation = (index: number) => {
    const updatedEducation = [...data.education]
    updatedEducation.splice(index, 1)
    onChange({ ...data, education: updatedEducation })
  }

  return (
    <div className="flex flex-col bg-white text-black rounded-lg overflow-hidden h-full border border-gray-200 shadow-sm">
      {/* Header Navigation */}
      <header className="flex justify-between items-center bg-gray-100 border-b border-gray-300 p-3">
        <h1 className="text-lg font-semibold">Resume Editor</h1>
        <nav className="flex space-x-2">
          {["personal", "experience", "education", "skills"].map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section as typeof activeSection)}
              className={`px-3 py-1 rounded text-sm font-medium ${
                activeSection === section
                  ? "bg-black text-white"
                  : "bg-white border border-gray-300 text-black hover:bg-gray-200"
              }`}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
      </header>

      {/* Editor Content */}
      <div className="flex-1 overflow-y-auto bg-white p-6 space-y-6">
        {activeSection === "personal" && (
          <section>
            <h2 className="text-lg font-semibold mb-4">Personal Information</h2>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                value={data.personal.fullName}
                onChange={(e: ChangeEvent<HTMLInputElement>) => updatePersonal("fullName", e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
              />
              <input
                type="email"
                placeholder="Email"
                value={data.personal.email}
                onChange={(e) => updatePersonal("email", e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
              />
              <input
                type="tel"
                placeholder="Phone"
                value={data.personal.phone}
                onChange={(e) => updatePersonal("phone", e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
              />
              <input
                type="text"
                placeholder="Location"
                value={data.personal.location}
                onChange={(e) => updatePersonal("location", e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
              />
            </div>
            <textarea
              placeholder="Professional Summary"
              value={data.personal.summary}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => updatePersonal("summary", e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black mt-4 min-h-24"
            />
          </section>
        )}

        {activeSection === "experience" && (
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Experience</h2>
              <button
                onClick={addExperience}
                className="px-3 py-1 bg-gray-100 border border-gray-300 text-black rounded text-sm hover:bg-gray-200"
              >
                Add
              </button>
            </div>
            <div className="space-y-4">
              {data.experience.map((exp, i) => (
                <div key={i} className="border border-gray-300 rounded p-4 bg-gray-50 space-y-2">
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Company"
                      value={exp.company}
                      onChange={(e) => updateExperience(i, "company", e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
                    />
                    <input
                      type="text"
                      placeholder="Position"
                      value={exp.position}
                      onChange={(e) => updateExperience(i, "position", e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Start Date"
                      value={exp.startDate}
                      onChange={(e) => updateExperience(i, "startDate", e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
                    />
                    <input
                      type="text"
                      placeholder="End Date"
                      value={exp.endDate}
                      onChange={(e) => updateExperience(i, "endDate", e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
                    />
                  </div>
                  <textarea
                    placeholder="Description"
                    value={exp.description}
                    onChange={(e) => updateExperience(i, "description", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black min-h-16"
                  />
                  <button
                    onClick={() => removeExperience(i)}
                    className="px-3 py-1 bg-red-100 border border-red-300 text-black rounded text-sm hover:bg-red-200"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === "education" && (
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Education</h2>
              <button
                onClick={addEducation}
                className="px-3 py-1 bg-gray-100 border border-gray-300 text-black rounded text-sm hover:bg-gray-200"
              >
                Add
              </button>
            </div>
            <div className="space-y-4">
              {data.education.map((edu, i) => (
                <div key={i} className="border border-gray-300 rounded p-4 bg-gray-50 space-y-2">
                  <input
                    type="text"
                    placeholder="School/University"
                    value={edu.school}
                    onChange={(e) => updateEducation(i, "school", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input
                      type="text"
                      placeholder="Degree"
                      value={edu.degree}
                      onChange={(e) => updateEducation(i, "degree", e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
                    />
                    <input
                      type="text"
                      placeholder="Field of Study"
                      value={edu.field}
                      onChange={(e) => updateEducation(i, "field", e.target.value)}
                      className="px-3 py-2 border border-gray-300 rounded bg-white text-black"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Graduation Year"
                    value={edu.graduationYear}
                    onChange={(e) => updateEducation(i, "graduationYear", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black"
                  />
                  <button
                    onClick={() => removeEducation(i)}
                    className="px-3 py-1 bg-red-100 border border-red-300 text-black rounded text-sm hover:bg-red-200"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {activeSection === "skills" && (
          <section>
            <h2 className="text-lg font-semibold mb-4">Skills (comma-separated)</h2>
            <textarea
              placeholder="React, TypeScript, Node.js, etc."
              value={data.skills.join(", ")}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) => updateSkills(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded bg-white text-black min-h-20"
            />
          </section>
        )}
      </div>
    </div>
  )
}