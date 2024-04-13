import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/layout/NavBar";
import SideNavBar from "@/app/components/layout/SideNavBar";
import HomeButton from "@/app/components/layout/HomeButton";
import SideBarFooter from "@/app/components/layout/SideBarFooter";

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
        <html lang="en" data-theme="cmyk">
            <body >
                <div className="flex flex-row justify-start h-screen">
                    <div className="flex flex-col z-10">
                        <HomeButton />
                        <SideNavBar />
                        <SideBarFooter />
                    </div>

                    <div className="flex flex-col w-full">
                        <NavBar />
                        <div className="flex justify-start overflow-y-scroll">
                            <div className="mx-4 w-full">
                                <div className="">
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </html>
    );
}
