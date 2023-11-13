"use client";

import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from "next/link";
import { BsPersonGear } from "react-icons/bs";
import { BiMessageSquareAdd, BiHome, BiSearch } from "react-icons/bi";

export default function NavBar() {
  const pathname = usePathname();

  const iconStyles = "w-6 h-6"

  const links = [
    {
      name: "home",
      href: "/",
      icon: <BiHome className={iconStyles} />
    },
    {
      name: "post",
      href: "/post",
      icon: <BiMessageSquareAdd className={iconStyles} />,
    },
    {
      name: "search",
      href: "/search",
      icon: <BiSearch className={iconStyles} />
    },
    {
      name: "profile",
      href: "/profile",
      icon: <BsPersonGear className={iconStyles} />,
    },
  ];

  return (
    <aside className="flex justify-between border-solid border-t-2 border-Neutral-50 p-4">
      {links.map(({ name, href, icon }) => (
        <Link
          className={clsx({ "scale-125": pathname === href })}
          key={name}
          href={href}
        >
          {icon}
        </Link>
      ))}
    </aside>
  );
}
