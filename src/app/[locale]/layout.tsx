
import "../globals.css";
import { Footer, Header, Navigation } from "../_components";
import { Breadcrumb } from "../_components/Breadcrumb";
import { ReactNode } from "react";

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
        <div className="container p-4">
          {breadcrumbs && <Breadcrumb breadcrumbs={breadcrumbs} />}
          <main className="py-4">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
