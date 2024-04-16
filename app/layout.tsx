import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/components/mainLayout/NavBar";
import SideNavBar from "@/app/components/mainLayout/SideNavBar";
import HomeButton from "@/app/components/mainLayout/HomeButton";
import SideBarFooter from "@/app/components/mainLayout/SideBarFooter";
import Footer from "@/app/components/mainLayout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "PiracyWiki",
    description: "The internet's wiki for all things piracy",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="cmyk">
            <body>
                {/* <div className="flex flex-col justify-start h-full w-full"> */}
                <div className="flex flex-col h-screen">
                    {/* navbar */}
                    <NavBar />

                    <div className="flex flex-row justify-start flex-grow overflow-y-hidden">

                        {/* sidebar */}
                        <div className="flex flex-col justify-start flex-none h-full w-[18rem] pr-1 border-r">
                            {/* <HomeButton /> */}
                            <div className="pt-11 overflow-y-auto">
                                <SideNavBar />
                            </div>
                            <div className="mt-auto border-t">
                                <SideBarFooter />
                            </div>
                        </div>

                        {/* content */}
                        <div className="flex-1 overflow-y-auto">
                            <div className="px-4">
                                {children}
                            </div>
                            <div className="divider mt-[5em] mb-11 px-11 text-slate-500">Sail the high seas 🌊 🏴‍☠️</div>
                            <Footer />
                        </div>

                    </div>

                </div>
            </body>
        </html>
    );
}
