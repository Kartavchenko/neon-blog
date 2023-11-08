"use clien";

import { BsFillFilePersonFill, BsSearch } from "react-icons/bs";
import { BiMessageSquareAdd, BiHome } from "react-icons/bi";
import Link from 'next/link';

export default function NavBar() {
  const links = [
    { name: "home", href: "/", icon: <BiHome /> },
    { name: "post", href: "/post", icon: <BiMessageSquareAdd /> },
    { name: "search", href: "/search", icon: <BsSearch /> },
    { name: "profile", href: "/profile", icon: <BsFillFilePersonFill /> },
  ];

  return (
    <aside className="flex border-solid border-t-2 border-Neutral-50 p-4">
      {links.map(({ name, href, icon }) => (
        <Link key={name} href={href}>
          {icon}
        </Link>
      ))}
    </aside>
  );
}
