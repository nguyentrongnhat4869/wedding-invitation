import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import {Providers} from "@/app/provider";

const geistSans = localFont({
    src: "./fonts/ResistenzaCopperlove.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
 const geistMono = localFont({
    src: "./fonts/DancingScript-VariableFont_wght.ttf",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "Thảo Anh & Trọng Nhật",
    description: "Đám cưới của Thảo Anh và Trọng Nhật",
    openGraph: {
        images: [
            {
                url: '/shared-image.webp',
                width: 1200,
                height: 630,
            },
        ],
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistMono.className} ${geistMono.variable}`}
            >
                <Providers>
                    {children}
                </Providers>
            </body>
        </html>
    )
}