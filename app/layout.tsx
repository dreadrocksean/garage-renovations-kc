import "./globals.css";
import { twMerge } from "tailwind-merge";
import "aos/dist/aos.css"; // Import AOS CSS file

// Fonts from google fonts
import {
  dMSans,
  kumbhSans,
  spaceGrotesk,
  pacifico,
  poppins,
} from "@/fonts/fonts";

import AnimationProvider from "./AnimationProvider";
import Settings from "@/components/Settings";
import LayoutProvider from "./LayoutProvider";
import "@/styles/layout.css";
import React from "react";

// ✅ Required metadata export in App Router
export const metadata = {
  title: "Garage Renovations KC - Home",
  description:
    "Garage Renovations KC is a great Nextjs SPA designed to showcase a garage renovation business. It features a modern design, responsive layout, and easy navigation.",
};

// ✅ Required RootLayout type
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={twMerge(
          spaceGrotesk.className,
          dMSans.variable,
          kumbhSans.variable,
          pacifico.variable,
          poppins.variable
        )}
      >
        <AnimationProvider>
          <LayoutProvider>
            <>
              <Settings />
              {children}
            </>
          </LayoutProvider>
        </AnimationProvider>
      </body>
    </html>
  );
}
