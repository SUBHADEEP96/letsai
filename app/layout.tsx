import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Let Sprinkle AI",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
        style={{
          fontFamily: `'Mooli', 'Neucha', 'SUSE Mono', monospace, sans-serif`,
        }}
      >
        {children}
      </body>
    </html>
  );
}
