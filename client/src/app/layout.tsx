import "../app/globals.css";
import  Navbar  from "@/components/Navbar";
import Sidebar  from "@/components/Sidebar";
import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="eng">
      <body className=" h-screen bg-gray-100 dark:bg-primary flex">
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {/* Sidebar fixe avec ProfileCard */}
        
        <Sidebar />

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1  md:overflow-y-auto">{children}</main>
       
        </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
