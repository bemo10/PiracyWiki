import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/NavBar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Next Js 14 Project",
    description: "Next Js 14 learning project",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <NavBar />

                <div className="flex justify-center">
                    <div className="bg-gray-200  mt-2 w-[80%]">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
