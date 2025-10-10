"use client"

import { useState, useEffect } from "react"
import { Document, PDFViewer } from "@react-pdf/renderer" 
import type { ResumeData } from "@/app/page" // adjust if the path differs

type ResumePreviewProps = {
  data: ResumeData
  template: string
}

export function ResumePreview({ data, template }: ResumePreviewProps) {
  const [loading, setLoading] = useState<boolean>(true)
  const [renderKey, setRenderKey] = useState<number>(0)

  useEffect(() => {
    setLoading(true)
    const timeout = setTimeout(() => {
      setRenderKey((prev) => prev + 1)
      setLoading(false)
    }, 300)
    return () => clearTimeout(timeout)
  }, [data, template])

  const TemplateComponent =
    pdfTemplates[template]?.component || pdfTemplates["modern-2col"].component

  return (
    <div className="relative overflow-hidden bg-white h-screen overflow-y-auto w-full flex flex-col items-center justify-center">
     

      {loading ? (
        <div className="flex flex-col items-center text-gray-600">
          <svg
            className="animate-spin h-8 w-8 mb-2 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
            />
          </svg>
          <p className="text-sm">Rendering preview...</p>
        </div>
      ) : (
        <div className="relative w-full h-full">
          <PDFViewer width="100%" height="100%">
            <Document>
              <TemplateComponent data={data} key={renderKey} />
            </Document>
          </PDFViewer>
          <div className="absolute top-0 left-0 w-full h-[60px] bg-white z-10"></div>
          <div className="absolute inset-0 border-12 border-white pointer-events-none z-10"></div>
        </div>
      )}
    </div>
  )
}
