"use client"

import { useState } from "react"
import { ResumeEditor } from "@/components/resume-editor"
import { ResumePreview } from "@/components/resume-preview"
import { defaultResumeData } from "@/lib/defaults"
import { useTemplate } from "@/context/TemplateContext"

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

export type ResumeData = {
  personal: PersonalInfo
  experience: Experience[]
  education: Education[]
  skills: string[]
}

export default function Home() {
  const [resumeData, setResumeData] = useState<ResumeData>(defaultResumeData)
  const { selectedTemplate } = useTemplate()

  return (
    <div className="flex flex-col h-screen bg-background text-foreground">
      <div className="grid grid-cols-2 overflow-hidden gap-6 p-6">
        <ResumeEditor data={resumeData} onChange={setResumeData} />
        <ResumePreview data={resumeData} template={selectedTemplate} />
      </div>
    </div>
  )
}
