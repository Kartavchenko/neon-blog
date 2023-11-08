import type { Metadata } from "next";
import { popins } from "@/app/fonts";
import "./globals.css";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export const metadata: Metadata = {
  title: "Neon",
  description: "Neon serves for creating, adding and sharing posts ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <UserProvider>
        <body className={`${popins.className} antialiased font-normal`} suppressHydrationWarning={true}>
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
