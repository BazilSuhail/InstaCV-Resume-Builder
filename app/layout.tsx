import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata = {
  title: "InstaCV",
  description: "Smart Resume Builder",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <Sidebar>{children}</Sidebar>
      </body>
    </html>
  );
}
