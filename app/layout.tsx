"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/theme-provider";
import { RightSidebar } from "@/components/layout/rightSidebar";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(true);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true);

  const toggleLeftSidebar = () => {
    setIsLeftSidebarOpen(!isLeftSidebarOpen);
  };

  const toggleRightSidebar = () => {
    setIsRightSidebarOpen(!isRightSidebarOpen);
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex h-screen overflow-hidden">
            <div className={`${isLeftSidebarOpen ? "block" : "hidden"}`}>
              <Sidebar />
            </div>
            <div className="flex flex-1 flex-col">
              <Header toggleLeftSidebar={toggleLeftSidebar} toggleRightSidebar={toggleRightSidebar} />
              <main className="flex-1 overflow-y-auto p-4">
                {children}
              </main>
            </div>
            <div className={`${isRightSidebarOpen ? "block" : "hidden"}`}>
              <RightSidebar />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
