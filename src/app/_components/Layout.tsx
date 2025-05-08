import { ReactNode } from "react";
import { Header, Footer, Navigation } from "@/components";

type Props = {
  children: ReactNode;
};

export const Layout = ({ children }: Props) => (
  <>
    <Header />
    <Navigation />
    <div className="container p-4">{children}</div>
    <Footer />
  </>
);
