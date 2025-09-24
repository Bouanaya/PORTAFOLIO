import "../app/globals.css";
import  Navbar  from "@/components/Navbar";
import Sidebar  from "@/components/Sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="flex h-screen bg-gray-100">
        {/* Sidebar fixe avec ProfileCard */}
        <Sidebar />

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          <Navbar />
          <main className="flex-1 p-6 overflow-y-auto">{children}</main>
       
        </div>
      </body>
    </html>
  );
}
