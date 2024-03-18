import type { Metadata } from "next";
import Image from "next/image";
import "./globals.scss";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Spider-Verse",
  description: "Creating carrosel parallax of spiderverse with React, Next.js and Framer Motion",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <header>
          <Image
            src="/icons/menu.svg"
            alt="Menu Options"
            width={36}
            height={25} />
          <Link href={"/"}>
            <Image
              src="/spider-logo.svg"
              alt="Spiderman"
              width={260}
              height={70} />
          </Link>
          <Image
            src="/icons/user.svg"
            alt="Login"
            width={36}
            height={36} />
        </header>

        {children}

      </body>
    </html>
  );
}
