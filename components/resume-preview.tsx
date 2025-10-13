// components/resume-preview.tsx
"use client"

import { DownloadPdfButton } from "./resume-download"
import type { ResumeData } from "@/lib/resume"
import { ClassicHtmlTemplate } from "./templates/classic-preview" 
import { htmlTemplates } from "@/lib/html-registry"

type ResumePreviewProps = {
  data: ResumeData
  template: string
}

export function ResumePreview({ data, template }: ResumePreviewProps) {
    const TemplateComponent = htmlTemplates[template]?.component || htmlTemplates["modern-2col"].component
  return (
    <div className="bg-gray-500 py-2 px-8 flex flex-col items-center h-full overflow-y-auto">
      {/* <div className="sticky top-0 z-10 bg-white shadow p-2 w-full flex justify-end">
        <DownloadPdfButton data={data} template={template} />
      </div> */}
<div className=" bg-white shadow p-2 w-full flex justify-end">
        <DownloadPdfButton data={data} template={template} />
      </div> 
      <div className="scale-[0.7] px-[50px] p-3 bg-gray-200">
        {/* <ClassicHtmlTemplate data={data} /> */}
         <TemplateComponent data={data} />
      </div>
    </div>
  )
}

// "use client"

// import { useState, useEffect } from "react"
// import { Document, PDFViewer } from "@react-pdf/renderer"
// import type { ResumeData } from "@/lib/resume"
// import { pdfTemplates } from "@/lib/registry"
// import { DownloadPdfButton } from "./resume-download"

// type ResumePreviewProps = {
//   data: ResumeData
//   template: string
// }

// export function ResumePreview({ data, template }: ResumePreviewProps) {
//   const [loading, setLoading] = useState<boolean>(true)
//   const [renderKey, setRenderKey] = useState<number>(0)
//   const [PdfRenderer, setPdfRenderer] = useState<any>(null)

//   useEffect(() => {
//     // Dynamically import react-pdf only on the client
//     (async () => {
//       const pdfLib = await import('@react-pdf/renderer')
//       setPdfRenderer(pdfLib)
//     })();
//   }, []);

//   useEffect(() => {
//     setLoading(true)
//     const timeout = setTimeout(() => {
//       setRenderKey((prev) => prev + 1)
//       setLoading(false)
//     }, 300)
//     return () => clearTimeout(timeout)
//   }, [data, template])

//   if (!PdfRenderer) {
//     return (
//       <div className="relative overflow-hidden bg-white h-screen w-full flex flex-col items-center justify-center">
//         <div className="flex flex-col items-center text-gray-600">
//           <svg
//             className="animate-spin h-8 w-8 mb-2 text-gray-500"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//           >
//             <circle
//               className="opacity-25"
//               cx="12"
//               cy="12"
//               r="10"
//               stroke="currentColor"
//               strokeWidth="4"
//             />
//             <path
//               className="opacity-75"
//               fill="currentColor"
//               d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
//             />
//           </svg>
//           <p className="text-sm">Loading PDF renderer...</p>
//         </div>
//       </div>
//     );
//   }

//   const { PDFViewer, Document } = PdfRenderer;
//   const TemplateComponent =
//     pdfTemplates[template]?.component || pdfTemplates["modern-2col"].component

//   return (
//     <div className="relative overflow-hidden bg-white h-screen overflow-y-auto w-full flex flex-col items-center justify-center">
//       {!loading &&
//       <DownloadPdfButton data={data} template={template} />
// }
//       {loading ? (
//         <div className="relative w-full flex items-center justify-center  h-full">
//           <div className="flex flex-col items-center text-gray-600">
//             <svg
//               className="animate-spin h-8 w-8 mb-2 text-gray-500"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="4"
//               />
//               <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 100 16v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
//               />
//             </svg>
//             <p className="text-sm">Rendering preview...</p>
//           </div>
//         </div>
//       ) : (
//         <div className="relative w-full h-full">
//           <PDFViewer width="100%" height="100%">
//             <Document>
//               <TemplateComponent data={data} key={renderKey} />
//             </Document>
//           </PDFViewer>
//           <div className="absolute top-0 left-0 w-full h-[60px] bg-white z-10"></div>
//           <div className="absolute inset-0 border-12 border-white pointer-events-none z-10"></div>
//         </div>
//       )}
//     </div>
//   )
// }