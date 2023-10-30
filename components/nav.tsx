"use client";
import {
  HiHome,
  HiUser,
  HiViewColumns,
  HiEnvelope,
  HiQuestionMarkCircle
} from "react-icons/hi2";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";

// Links
const links = [
  { name: "home", path: "/", icon: <HiHome /> },
  { name: "about", path: "#about-us", icon: <HiUser /> },
  { name: "FAQ", path: "/frequently-asked-questions", icon: <HiQuestionMarkCircle /> },
  { name: "Projects", path: "/projects", icon: <HiViewColumns /> },
  { name: "contact", path: "/contact", icon: <HiEnvelope /> },
];

const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <motion.nav
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.25 }}
      className="flex flex-col items-center p-8 lg:justify-center gap-y-4 md:fixed sticky bottom-0 mt-auto z-50 w-full lg:w-16 lg:max-w-md lg:h-screen"
    >
      <div className="flex md:ml-20 ml:0  lg:flex-col gap-8 bg-zinc-900 border-2 border-indigo-600 p-4 justify-center items-center text-2xl rounded-full">
        {links.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              aria-label="navbar items"
              className={`${
                link.path === pathname && "text-accent"
              } items-center hover:text-accent transition-all duration-300 flex group`}
            >
              <div className="absolute left-20 hidden xl:group-hover:flex">
                <div className="bg-white text-primary ml-2 text-[12px] p-[0.5rem] rounded-[0.5rem] relative leading-none capitalize">
                  {link.name}
                </div>
                <div className="top-1 border-solid border-r-white border-r-8 border-y-transparent ml-2 border-y-8 border-l-0 absolute -left-1"></div>
              </div>
              <div className="text-indigo-500 hover:text-blue-400">{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default Nav;
