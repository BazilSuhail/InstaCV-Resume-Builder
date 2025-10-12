'use client';

import { FiDownload } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import type { ResumeData } from '@/lib/resume'; // Adjust path as needed
import { pdfTemplates } from '@/lib/registry'; // Adjust path as needed

interface DownloadPdfButtonProps {
  data: ResumeData;
  template: string;
}

interface PdfRenderer {
  BlobProvider: React.ComponentType<any>;
  Document: React.ComponentType<any>;
  PdfTemplate: React.ComponentType<{ data: ResumeData }>;
}

// Get PDF template function
function getPdfTemplate(templateId: string) {
  return pdfTemplates[templateId]?.component || pdfTemplates["modern-2col"].component;
}

export function DownloadPdfButton({ data, template }: DownloadPdfButtonProps) {
  const [PdfRenderer, setPdfRenderer] = useState<PdfRenderer | null>(null);

  // Dynamically import react-pdf only on the client
  useEffect(() => {
    (async () => {
      const pdfLib = await import('@react-pdf/renderer');
      const PdfTemplate = getPdfTemplate(template);

      setPdfRenderer({
        BlobProvider: pdfLib.BlobProvider,
        Document: pdfLib.Document,
        PdfTemplate,
      });
    })();
  }, [template]);

  if (!PdfRenderer || !data) return null;

  const { BlobProvider, Document, PdfTemplate } = PdfRenderer;

  return (
    <BlobProvider document={<Document><PdfTemplate data={data} /></Document>}>
      {({ url, loading, error }: { url: string | null; loading: boolean; error: Error | null }) => {
        const handleDownload = () => {
          if (!url) return;
          const fullName = data?.personal?.fullName || 'Resume';
          const link = document.createElement('a');
          link.href = url;
          link.download = `${fullName.replace(/\s+/g, '-')}.pdf`;
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        };

        return (
          <button
            onClick={handleDownload}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white rounded-lg font-medium transition-colors"
          >
            <FiDownload size={18} />
            {loading ? 'Generating PDF...' : 'Download PDF'}
          </button>
        );
      }}
    </BlobProvider>
  );
}