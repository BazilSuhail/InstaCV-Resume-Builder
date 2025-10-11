import "./globals.css"
import Sidebar from "@/components/Sidebar"
import { TemplateProvider } from "@/context/TemplateContext"
import LayoutWrapper from "@/components/layout-wrapper"

export const metadata = {
  title: "InstaCV",
  description: "Smart Resume Builder",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-background text-foreground">
        <TemplateProvider>
          <LayoutWrapper>
            <Sidebar>
              {children}
            </Sidebar>
          </LayoutWrapper>
        </TemplateProvider>
      </body>
    </html>
  )
}
// import "./globals.css"
// import Sidebar from "@/components/Sidebar"
// import { TemplateProvider } from "@/context/TemplateContext"
// import { useMediaQuery } from "react-responsive" // You'll need to install this package
// import { useEffect, useState } from "react"

// // 404 Component for small screens
// const SmallScreenError = () => (
//   <div className="min-h-screen flex items-center justify-center bg-gray-50">
//     <div className="text-center p-8 max-w-md">
//       <h1 className="text-3xl font-bold text-red-600 mb-4">Screen Too Small</h1>
//       <p className="text-gray-700 mb-6">
//         This application requires a screen width of at least 1024 pixels.
//         Please use a larger device or rotate your screen to landscape mode.
//       </p>
//       <div className="bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-3 rounded">
//         <p>Minimum required: 1024px width</p>
//         <p className="text-sm mt-2">Current screen size is too small for optimal experience</p>
//       </div>
//     </div>
//   </div>
// )

// export const metadata = {
//   title: "InstaCV",
//   description: "Smart Resume Builder",
// }

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   const [isClient, setIsClient] = useState(false)
  
//   // Check if screen width is at least 1024px
//   const isLargeScreen = useMediaQuery({ minWidth: 1024 })

//   useEffect(() => {
//     setIsClient(true)
//   }, [])

//   // Don't render anything on the server or if client is not ready
//   if (!isClient) {
//     return (
//       <html lang="en">
//         <body className="min-h-screen bg-background text-foreground">
//           <div className="min-h-screen flex items-center justify-center">
//             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//           </div>
//         </body>
//       </html>
//     )
//   }

//   // Render 404 component if screen is too small
//   if (!isLargeScreen) {
//     return (
//       <html lang="en">
//         <body className="min-h-screen bg-background text-foreground">
//           <SmallScreenError />
//         </body>
//       </html>
//     )
//   }

//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-background text-foreground">
//         <TemplateProvider>
//           <Sidebar>
//             {children}
//           </Sidebar>
//         </TemplateProvider>
//       </body>
//     </html>
//   )
// }