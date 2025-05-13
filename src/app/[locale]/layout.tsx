import "../globals.css";
import { Footer, Header, Navigation } from "../_components";
import { Breadcrumb } from "../_components/Breadcrumb";
import { ReactNode } from "react";
import localFont from "next/font/local";

const font = localFont({
  src: [
    {
      path: "../../../assets/fonts/roobert/Roobert-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../../assets/fonts/roobert/Roobert-Bold.ttf",
      weight: "700",
    },
  ],
});

type Props = {
  children: ReactNode;
  breadcrumbs?: Breadcrumb[];
};

export default function RootLayout({ children, breadcrumbs }: Props) {
  return (
    <html lang="en" className={font.className}>
      <body>
        <Header />
        <Navigation />
        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
