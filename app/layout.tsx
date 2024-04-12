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
        <html lang="en" data-theme="retro">
            <body className={inter.className}>
                <NavBar />
                <div className="flex justify-start mt-[6rem] ">
                    <div className="ml-2 w-[18rem] rounded-lg bg-base-300">
                    
                    </div>
                    <div className="flex justify-center mx-4 bg-base-300 rounded-lg w-full">
                        <div className="">
                            {children}
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
