import Image from "next/image";

const footerLinks = [
  { title: "Terms & conditions", href: "/en" },
  { title: "Privacy notice", href: "/en" },
  { title: "Accessibility statement", href: "/en" },
  { title: "Sitemap", href: "/en" },
  { title: "Cookies", href: "/en" },
  { title: "Cookie preferences", href: "/en" },
];

export const Footer = () => (
  <footer className="mt-8">
    <div className="bg-white border-t border-gray-400">
      <div className="container mx-auto flex flex-row md:items-center gap-12 py-8">
        <Image
          src="/footer/gov.svg"
          width="220"
          height="62"
          alt="H.M. Government logo"
        />
        <Image
          src="/maps-logo-en.svg"
          width="147"
          height="47"
          alt="MaPS logo"
        />
      </div>
      <div className="border-t py-6 bg-gray-800 text-gray-200 text-sm">
        <div className="container mx-auto">
          <p>
            © {new Date().getFullYear()} Money and Pensions Service, Bedford
            Borough Hall, 138 Cauldwell Street, Bedford, MK42 9AB. All rights
            reserved.
          </p>
          <ul className="flex flex-col md:flex-row gap-2 md:gap-4 mt-4">
            {footerLinks.map(({ href, title }, index) => (
              <li
                key={index}
                className="md:border-l md:border-gray-600 md:pl-4 first:md:border-l-0 first:md:pl-0"
              >
                <a href={href} title={title} className="hover:underline">
                  {title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </footer>
);
