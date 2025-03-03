"use client";

import { useState } from "react";
import Link from "next/link";
import { LayoutTemplate, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "../Common-ui/button";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";
import { FaUserSecret } from "react-icons/fa";

const menuItems = [
  { href: "/find-wall-space", label: "Find Walls" },
  { href: "/post-wall", label: "List Your Wall" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 60 },
  transition: { duration: 0.6 },
};

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push("/sign-in");
    setIsOpen(false); // Mobile menu close on logout
  };

  return (
    <>
      <section className="border-b">
        <div className="container mx-auto">
          <header className="flex items-center relative py-[10px] md:px-0 px-5">
            <Link className="flex items-center justify-center" href="/">
              <LayoutTemplate className="h-8 w-8 mr-2 text-[#000]" />
              <span className="font-black text-[30px] text-[#000]">
                BannerXpress
              </span>
            </Link>

            {/* Desktop Menu */}
            <div className="ml-auto items-center gap-2 sm:gap-6 lg:flex hidden">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  className="text-base font-semibold hover:underline underline-offset-4 text-[#000]"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
              <Link href="/adcampaign">
                <Button className="text-[#000] text-base font-semibold">
                 AdCampaign
                </Button>
              </Link>
              {user ? (
                <>
                  <div className="flex items-center gap-1">
                    <span className="text-[#03A9AC]">
                      <FaUserSecret />
                    </span>
                    <span className="text-[#03A9AC] capitalize font-semibold truncate">
                      {user.username || "User"}
                    </span>
                  </div>

                  <Button
                    onClick={handleLogout}
                    className="text-base font-semibold border bg-red-600 py-1 px-3 text-white"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link href="/sign-in">
                    <div className="border border-[#000] rounded-lg py-1 px-3">
                      <Button className="text-base font-semibold text-[#000]">
                        Sign In
                      </Button>
                    </div>
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="ml-auto lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </button>

            {/* Mobile Menu */}
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  className="absolute top-full left-0 right-0 bg-white shadow-md lg:hidden z-50"
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={fadeInUp}
                >
                  <nav className="flex flex-col p-4">
                    {menuItems.map((item, index) => (
                      <motion.div
                        key={item.href}
                        variants={fadeInUp}
                        transition={{ delay: index * 0.1 }}
                      >
                        <Link
                          className="text-base font-medium hover:underline underline-offset-4 py-1 block text-[#000]"
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}

                   
                    {user ? (
                      <motion.div
                        variants={fadeInUp}
                        transition={{ delay: (menuItems.length + 1) * 0.1 }}
                      >
                        <Button
                          onClick={handleLogout}
                          className="justify-start text-white bg-red-600 text-base pb-2 p-2"
                        >
                          Logout
                        </Button>
                      </motion.div>
                    ) : (
                      <motion.div
                        variants={fadeInUp}
                        transition={{ delay: (menuItems.length + 2) * 0.1 }}
                      >
                        <Link href="/sign-in" onClick={() => setIsOpen(false)}>
                          <Button className="w-full justify-start text-[#000] text-base pb-2">
                            Sign In
                          </Button>
                        </Link>
                      </motion.div>
                    )}
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </header>
        </div>
      </section>
    </>
  );
};

export default Header;
