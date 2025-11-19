// components/resume-preview.tsx
"use client"

import { DownloadPdfButton } from "./resume-download"
import type { ResumeData } from "@/lib/resume"
import { htmlTemplates } from "@/lib/html-registry"
import { FiFileText } from "react-icons/fi"
import { BiZoomIn, BiZoomOut } from "react-icons/bi"

type ResumePreviewProps = {
  data: ResumeData
  template: string
}


export function ResumePreview({ data, template }: ResumePreviewProps) {
  const TemplateComponent = htmlTemplates[template]?.component || htmlTemplates["modern-2col"].component

  return (
    <div className="bg-linear-to-br from-gray-50 to-gray-100 flex flex-col h-full">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-2 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-linear-to-br from-orange-400 to-orange-600 flex items-center justify-center">
            <FiFileText className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Preview</h2>
            <p className="text-xs text-gray-500">Live preview of your resume</p>
          </div>
        </div>
        <DownloadPdfButton data={data} template={template} />
      </div>

      {/* Preview Container */}
      <div className="flex-1 overflow-auto py-6">
        <div className="max-w-4xl mx-auto">
         {/* Resume Preview */}

          <div className="bg-gray-100 w-full rounded-xl shadow-lg border border-gray-200 py-3 overflow-y-auto">
            <div className="flex justify-center">
              <div
                className="origin-top"
                style={{
                  width: "816px",        // fixed resume width
                  transform: "scale(0.5)",
                  transformOrigin: "top center"
                }}
              >
                <TemplateComponent data={data} />
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  )
}