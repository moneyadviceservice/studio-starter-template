import Link from "next/link";

export const Navigation = () => (
  <div id="main" className="bg-blue-800 px-4 text-white">
    <div className="container">
      <nav>
        <Link className="inline-block py-2 px-4 hover:bg-pink-800" href="/en/benefits">Benefits</Link>
      </nav>
    </div>
  </div>
);
