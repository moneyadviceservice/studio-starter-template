import { ReactNode } from "react";
import { Footer, Header, Navigation } from "@/app/_components";

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
