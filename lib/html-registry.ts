import type { ResumeData } from "./resume" // adjust path to your types file
import { ModernPdfTemplate } from "@/components/pdf-templates/modern-pdf"
import { ClassicHtmlTemplate } from "@/components/templates/classic-preview"
import { CreativeHtmlTemplate } from "@/components/templates/creative-preview"
import { MinimalHtmlTemplate } from "@/components/templates/minimal-preview"

// Type for each PDF template entry
export type PdfTemplateEntry = {
  name: string
  description: string
  component: React.FC<{ data: ResumeData }>
}

// Record type mapping string keys to template entries
export const htmlTemplates: Record<string, PdfTemplateEntry> = {
  "modern-2col": {
    name: "Modern 2-Column",
    description: "Clean and modern with sidebar layout",
    component: ModernPdfTemplate,
  },
   "creative-2col": {
    name: "Creative 2-Column",
    description: "Clean and modern with sidebar layout",
    component: CreativeHtmlTemplate,
  },
  "classic-2col": {
    name: "Classic 2-Column",
    description: "Traditional professional format",
    component: ClassicHtmlTemplate,
  },
  "minimal-2col": {
    name: "Minimal 2-Column",
    description: "Minimalist design with focus on content",
    component: MinimalHtmlTemplate,
  }
}