import { Breadcrumb } from "../../Breadcrumb";

const data = [
  { title: "Home", url: "/en" },
  { title: "Benefits", url: "/en/benefits" },
] as Breadcrumb[];

export const Header = () => (
  <header id="header" className="bg-black/10 p-4">
    <div className="container">HEADER</div>
    <Breadcrumb breadcrumbs={data} />
  </header>
);
