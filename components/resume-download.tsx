// components/resume-download.tsx
'use client';

import { FiDownload } from 'react-icons/fi';
import { useState } from 'react';
import type { ResumeData } from '@/lib/resume';
import { pdfTemplates } from '@/lib/pdf-registry';

interface DownloadPdfButtonProps {
  data: ResumeData;
  template: string;
}

export function DownloadPdfButton({ data, template }: DownloadPdfButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);

    try {
      // Import only when needed
      const { pdf, Document } = await import('@react-pdf/renderer');
      const Template = pdfTemplates[template]?.component || pdfTemplates['classic-pdf'].component;
      console.log(Template)

      // Generate PDF buffer
      const blob = await pdf(<Document><Template data={data} /></Document>).toBlob();

      // Trigger browser download
      const link = document.createElement('a');
      const fullName = data.personal.fullName || 'Resume';
      const fileName = `${fullName.replace(/\s+/g, '-')}.pdf`;
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      link.click();
      URL.revokeObjectURL(link.href);
    } catch (err) {
      console.error('PDF generation failed:', err);
    }

    setLoading(false);
  };

  return (
    <button
      onClick={handleDownload}
      disabled={loading}
      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors disabled:opacity-60"
    >
      <FiDownload size={18} />
      {loading ? 'Generating PDF...' : 'Download PDF'}
    </button>
  );
}

// 'use client';

// import { FiDownload } from 'react-icons/fi';
// import { useEffect, useState } from 'react';
// import type { ResumeData } from '@/lib/resume'; // Adjust path as needed
// import { pdfTemplates } from '@/lib/registry'; // Adjust path as needed

// interface DownloadPdfButtonProps {
//    data: ResumeData;
//   template: string;
// }

// interface PdfRenderer {
//   PDFDownloadLink: React.ComponentType<any>;
//   Document: React.ComponentType<any>;
//   Page: React.ComponentType<any>;
//   Text: React.ComponentType<any>;
//   View: React.ComponentType<any>;
//   StyleSheet: any;
//   Font: any;
// }

// // Get PDF template function
// function getPdfTemplate(templateId: string) {
//   return pdfTemplates[templateId]?.component || pdfTemplates["modern-2col"].component;
// }

// export function DownloadPdfButton({ data, template }: DownloadPdfButtonProps) {
//   const [PdfRenderer, setPdfRenderer] = useState<PdfRenderer | null>(null);

//   // Dynamically import react-pdf only on the client
//   useEffect(() => {
//     (async () => {
//       const pdfLib = await import('@react-pdf/renderer');
//       const PdfTemplate = getPdfTemplate(template);

//       setPdfRenderer({
//         PDFDownloadLink: pdfLib.PDFDownloadLink,
//         Document: pdfLib.Document,
//         Page: pdfLib.Page,
//         Text: pdfLib.Text,
//         View: pdfLib.View,
//         StyleSheet: pdfLib.StyleSheet,
//         Font: pdfLib.Font,
//       });
//     })();
//   }, [template]);

//   if (!PdfRenderer || !data) return null;

//   const { PDFDownloadLink, Document, StyleSheet } = PdfRenderer;
//   const PdfTemplate = getPdfTemplate(template);

//   // Create styles for the document wrapper
//   const styles = StyleSheet.create({
//     page: {
//       flexDirection: 'column',
//       backgroundColor: '#E4E4E4',
//     },
//     section: {
//       margin: 10,
//       padding: 10,
//       flexGrow: 1
//     }
//   });

//   const fullName = data?.personal?.fullName || 'Resume';
//   const fileName = `${fullName.replace(/\s+/g, '-')}.pdf`;

//   return (
//     <PDFDownloadLink
//       document={
//         <Document>
//           <PdfTemplate data={data} />
//         </Document>
//       }
//       fileName={fileName}
//       className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
//     >
//       {({ loading }: { loading: boolean }) => (
//         <>
//           <FiDownload size={18} />
//           {loading ? 'Generating PDF...' : 'Download PDF'}
//         </>
//       )}
//     </PDFDownloadLink>
//   );
// }