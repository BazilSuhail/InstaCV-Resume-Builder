import "./globals.css"
import Sidebar from "@/components/Sidebar"
import { TemplateProvider } from "@/context/TemplateContext" // adjust path if needed

export const metadata = {
  title: "InstaCV",
  description: "Smart Resume Builder",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <TemplateProvider>
          <Sidebar >
            {children}
          </Sidebar>
        </TemplateProvider>
      </body>
    </html>
  )
}
