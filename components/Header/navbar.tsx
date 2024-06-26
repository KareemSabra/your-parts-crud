import React from "react";
import Link from "next/link";
import { Paths } from "@/routes/paths";

const Navbar: React.FC = () => {
  return (
    <nav className=" bg-opacity-70 backdrop-blur-md shadow-lg fixed w-full z-50 border-b-2 border-blue-900">
      <div className="container mx-auto p-4 flex justify-between items-center flex-row-reverse	">
        <div className="space-x-4">
          {Paths.map((path, index) => (
            <Link key={index} href={path.path}>
              {path.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
