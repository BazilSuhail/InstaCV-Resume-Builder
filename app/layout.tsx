import "./globals.css";
import SidebarLayout from "@/components/SidebarLayout";

export const metadata = {
  title: "InstaCV",
  description: "Smart Resume Builder",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <SidebarLayout>{children}</SidebarLayout>
      </body>
    </html>
  );
}
