import React from "react";
import Link from "next/link";
import { AiFillBug } from "react-icons/ai";

const NavBar = () => {
  return (
    <nav className="flex space-between space-x-6 p-4 border-b mb-5 px-5 h-14 items-center bg-gray-500 text-black">
      <Link href="/">Logo</Link>
      <ul className="flex space-x-6">
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/issues">Issues</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
