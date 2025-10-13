"use client";
import { useTemplate } from "@/context/TemplateContext";
import { useRouter } from "next/navigation";
import { pdfTemplates } from "@/lib/pdf-registry";
import type { PdfTemplateEntry } from "@/lib/pdf-registry"; // Adjust path if needed

export default function TemplatePage() {
  const { selectedTemplate, setSelectedTemplate } = useTemplate();
  const router = useRouter();

  const handleSelect = (id: string) => {
    setSelectedTemplate(id);
    // Navigate back to resume editor after selection
    router.push("/resume");
  };

  const handleCancel = () => {
    // Go back to dashboard if no template selected, otherwise go to resume editor
    if (selectedTemplate) {
      router.push("/resume");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-8 text-gray-900">Select Your Resume Template</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {Object.entries(pdfTemplates).map(([id, template]: [string, PdfTemplateEntry]) => (
          <button
            key={id}
            onClick={() => handleSelect(id)}
            className={`border rounded-xl p-6 text-left transition-all shadow-sm hover:shadow-md ${
              selectedTemplate === id
                ? "border-blue-600 bg-blue-50"
                : "border-gray-200 hover:border-blue-400"
            }`}
          >
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{template.name}</h2>
            <p className="text-sm text-gray-600">{template.description}</p>
          </button>
        ))}
      </div>

      <button
        onClick={handleCancel}
        className="mt-10 px-6 py-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg transition-colors"
      >
        Cancel
      </button>
    </div>
  );
}