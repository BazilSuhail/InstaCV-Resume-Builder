"use client"

import { useState, ChangeEvent } from "react"
import { User, Briefcase, GraduationCap, Code, Plus, Trash2, Mail, Phone, MapPin, FileText } from "lucide-react"

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

  const sections = [
    { id: "personal", label: "Personal", icon: User },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "skills", label: "Skills", icon: Code },
  ]

  return (
    <div className="flex flex-col bg-white rounded-xl pb-[680px] overflow-auto h-full border border-gray-200 shadow-lg">
      {/* Header */}
      <header className="bg-linear-to-r from-orange-600 to-orange-700 px-6 py-5 border-b border-orange-700">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <FileText className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Resume Builder</h1>
            <p className="text-orange-100 text-sm">Create your perfect resume</p>
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <nav className="flex gap-2">
          {sections.map((section) => {
            const Icon = section.icon
            const isActive = activeSection === section.id
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id as typeof activeSection)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg font-medium text-sm transition-all ${
                  isActive
                    ? "bg-white text-orange-600 shadow-md"
                    : "bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm"
                }`}
              >
                <Icon className="w-4 h-4" />
                {section.label}
              </button>
            )
          })}
        </nav>
      </header>

      {/* Editor Content */}
      <div className="flex w-full overflow-y-auto bg-linear-to-br from-gray-50 to-white px-6 pt-6 pb-[150px]">
        {activeSection === "personal" && (
          <section className="flex-1 space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
                <p className="text-sm text-gray-500">Tell us about yourself</p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  value={data.personal.fullName}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => updatePersonal("fullName", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4 text-orange-500" />
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    value={data.personal.email}
                    onChange={(e) => updatePersonal("email", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-orange-500" />
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={data.personal.phone}
                    onChange={(e) => updatePersonal("phone", e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  Location
                </label>
                <input
                  type="text"
                  placeholder="New York, NY"
                  value={data.personal.location}
                  onChange={(e) => updatePersonal("location", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Professional Summary</label>
                <textarea
                  placeholder="A brief overview of your professional background and key achievements..."
                  value={data.personal.summary}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) => updatePersonal("summary", e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all min-h-32 resize-none"
                />
              </div>
            </div>
          </section>
        )}

        {activeSection === "experience" && (
          <section className="flex-1 mb-[250px] space-y-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Work Experience</h2>
                  <p className="text-sm text-gray-500">Add your professional journey</p>
                </div>
              </div>
              <button
                onClick={addExperience}
                className="flex items-center gap-2 px-4 py-2.5 bg-linear-to-r from-orange-500 to-orange-600 text-white rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all shadow-md hover:shadow-lg"
              >
                <Plus className="w-4 h-4" />
                Add Experience
              </button>
            </div>

            <div className="space-y-4">
              {data.experience.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
                  <Briefcase className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-500 font-medium">No experience added yet</p>
                  <p className="text-sm text-gray-400 mt-1">Click "Add Experience" to get started</p>
                </div>
              ) : (
                data.experience.map((exp, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition-all space-y-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                        Experience #{i + 1}
                      </span>
                      <button
                        onClick={() => removeExperience(i)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition-all"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        Remove
                      </button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1.5">Company</label>
                        <input
                          type="text"
                          placeholder="Company Name"
                          value={exp.company}
                          onChange={(e) => updateExperience(i, "company", e.target.value)}
                          className="w-full px-3 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1.5">Position</label>
                        <input
                          type="text"
                          placeholder="Job Title"
                          value={exp.position}
                          onChange={(e) => updateExperience(i, "position", e.target.value)}
                          className="w-full px-3 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1.5">Start Date</label>
                        <input
                          type="text"
                          placeholder="Jan 2020"
                          value={exp.startDate}
                          onChange={(e) => updateExperience(i, "startDate", e.target.value)}
                          className="w-full px-3 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1.5">End Date</label>
                        <input
                          type="text"
                          placeholder="Present"
                          value={exp.endDate}
                          onChange={(e) => updateExperience(i, "endDate", e.target.value)}
                          className="w-full px-3 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1.5">Description</label>
                      <textarea
                        placeholder="Describe your responsibilities and achievements..."
                        value={exp.description}
                        onChange={(e) => updateExperience(i, "description", e.target.value)}
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent min-h-24 resize-none"
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        )}

        {activeSection === "education" && (
          <section className="flex-1 mb-[450px] space-y-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Education</h2>
                  <p className="text-sm text-gray-500">Add your academic background</p>
                </div>
              </div>
              <button
                onClick={addEducation}
                className="flex items-center gap-2 px-4 py-2.5 bg-linear-to-r from-orange-500 to-orange-600 text-white rounded-lg font-medium hover:from-orange-600 hover:to-orange-700 transition-all shadow-md hover:shadow-lg"
              >
                <Plus className="w-4 h-4" />
                Add Education
              </button>
            </div>

            <div className="space-y-4">
              {data.education.length === 0 ? (
                <div className="text-center py-12 bg-gray-50 rounded-xl border-2 border-dashed border-gray-300">
                  <GraduationCap className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-gray-500 font-medium">No education added yet</p>
                  <p className="text-sm text-gray-400 mt-1">Click "Add Education" to get started</p>
                </div>
              ) : (
                data.education.map((edu, i) => (
                  <div key={i} className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition-all space-y-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                        Education #{i + 1}
                      </span>
                      <button
                        onClick={() => removeEducation(i)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-red-50 text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition-all"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        Remove
                      </button>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1.5">School/University</label>
                      <input
                        type="text"
                        placeholder="University Name"
                        value={edu.school}
                        onChange={(e) => updateEducation(i, "school", e.target.value)}
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1.5">Degree</label>
                        <input
                          type="text"
                          placeholder="Bachelor's, Master's, etc."
                          value={edu.degree}
                          onChange={(e) => updateEducation(i, "degree", e.target.value)}
                          className="w-full px-3 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-gray-600 mb-1.5">Field of Study</label>
                        <input
                          type="text"
                          placeholder="Computer Science, etc."
                          value={edu.field}
                          onChange={(e) => updateEducation(i, "field", e.target.value)}
                          className="w-full px-3 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-gray-600 mb-1.5">Graduation Year</label>
                      <input
                        type="text"
                        placeholder="2024"
                        value={edu.graduationYear}
                        onChange={(e) => updateEducation(i, "graduationYear", e.target.value)}
                        className="w-full px-3 py-2.5 border border-gray-300 rounded-lg bg-white text-gray-900 text-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>
        )}

        {activeSection === "skills" && (
          <section className="flex-1 mb-[250px] space-y-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-linear-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
                <p className="text-sm text-gray-500">List your technical and soft skills</p>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Skills (separate with commas)
              </label>
              <textarea
                placeholder="React, TypeScript, Node.js, Project Management, Leadership..."
                value={data.skills.join(", ")}
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) => updateSkills(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-orange-500 focus:border-transparent min-h-32 resize-none"
              />
              <p className="mt-2 text-xs text-gray-500">
                Tip: Separate each skill with a comma for better formatting
              </p>
            </div>

            {data.skills.length > 0 && (
              <div className="bg-linear-to-br from-orange-50 to-orange-100/50 rounded-xl p-5 border border-orange-200">
                <h3 className="text-sm font-semibold text-orange-900 mb-3 flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  Preview
                </h3>
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill, i) => (
                    skill.trim() && (
                      <span
                        key={i}
                        className="px-3 py-1.5 bg-white text-orange-700 rounded-lg text-sm font-medium border border-orange-200 shadow-sm"
                      >
                        {skill}
                      </span>
                    )
                  ))}
                </div>
              </div>
            )}
          </section>
        )}
      </div>
    </div>
  )
}