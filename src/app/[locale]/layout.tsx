import "../globals.css";
import { Footer, Header, Navigation } from "../_components";
import { Breadcrumb } from "../_components/Breadcrumb";
import { ReactNode } from "react";
import localFont from "next/font/local";

const font = localFont({
  src: [
    {
      path: "../../../public/fonts/roobert/Roobert-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../../public/fonts/roobert/Roobert-Bold.ttf",
      weight: "700",
    },
  ],
  display: "swap",
  variable: "--font-roobert",
});

type Props = {
  children: ReactNode;
  breadcrumbs?: Breadcrumb[];
};

export default function RootLayout({ children, breadcrumbs }: Props) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
