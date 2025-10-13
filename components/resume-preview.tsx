// components/resume-preview.tsx
"use client"

import { DownloadPdfButton } from "./resume-download"
import type { ResumeData } from "@/lib/resume"
import { htmlTemplates } from "@/lib/html-registry"

type ResumePreviewProps = {
  data: ResumeData
  template: string
}

export function ResumePreview({ data, template }: ResumePreviewProps) {
  const TemplateComponent = htmlTemplates[template]?.component || htmlTemplates["modern-2col"].component

  return (
    <div className="bg-gray-500 py-2 px-4 flex flex-col items-center h-full overflow-auto">
      <div className="bg-white shadow p-2 w-full flex justify-end mb-2">
        <DownloadPdfButton data={data} template={template} />
      </div>
      
      <div className="bg-gray-900 p-4 w-full flex justify-center items-center overflow-auto ">
        <div className="scale-[0.7] mt-[250px]">
          <TemplateComponent data={data} />
        </div>
      </div>
    </div>
  )
}
