import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";
import { ThemeProvider } from "@/components/theme-provider";
import { RightSidebar } from "@/components/layout/rightSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Juspay Dashboard",
  description: "Dashboard design using Next.js, Tailwind CSS, Shadcn UI and Visx",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
            <Sidebar />
            <div className="flex flex-1 flex-col">
              <Header />
              <main className="flex-1 overflow-y-auto p-4">
                {children}
              </main>
            </div>
            <RightSidebar/>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
