import { ClassicPdfTemplate } from "@/components/pdf-templates/classic-pdf"
import { MinimalPdfTemplate } from "@/components/pdf-templates/minimal-pdf" 
import { ModernPdfTemplate } from "@/components/pdf-templates/modern-pdf"
import type { ResumeData } from "./resume" // adjust path to your types file

// Type for each PDF template entry
export type PdfTemplateEntry = {
  name: string
  description: string
  component: React.FC<{ data: ResumeData }>
}

// Record type mapping string keys to template entries
export const pdfTemplates: Record<string, PdfTemplateEntry> = {
  "modern-2col": {
    name: "Modern 2-Column",
    description: "Clean and modern with sidebar layout",
    component: ModernPdfTemplate,
  },
  "classic-2col": {
    name: "Classic 2-Column",
    description: "Traditional professional format",
    component: ClassicPdfTemplate,
  },
  "minimal-2col": {
    name: "Minimal 2-Column",
    description: "Minimalist design with focus on content",
    component: MinimalPdfTemplate,
  }
}