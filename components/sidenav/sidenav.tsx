"use client";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Logo from "../../public/logo2 (1).jpg";
import Logo2 from "../../public/logooo.png";
import { usePathname } from "next/navigation";
import Link from "next/link";
import XT from "../../public/X.svg";
import Pinterest from "../../public/Pinterest.svg";
import useNavStore from "../../store/store";
import {
  Home,
  Building2,
  Images,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Gem,
} from "lucide-react";

// Navigation Links Data
const navLinks = [
  { label: "Home", icon: Home, path: "/" },
  { label: "About", icon: Building2, path: "/about" },
  { label: "Services", icon: Gem, path: "/services" },
  { label: "Gallery", icon: Images, path: "/gallery" },
  { label: "Contact", icon: Mail, path: "/contact" },
];

// Socials Data
const socialLinks = [
  { icon: Facebook, path: "/", isLucid: true },
  { icon: XT, path: "/about", isLucid: false },
  { icon: Instagram, path: "/services", isLucid: true },
  { icon: Youtube, path: "/gallery", isLucid: true },
  { icon: Pinterest, path: "/gallery", isLucid: false },
  { icon: Linkedin, path: "/contact", isLucid: true },
];

const Sidebar = () => {
  const pathname = usePathname();
  const { isNavOpen, toggleNav } = useNavStore();

  return (
    <nav
      className={cn(
        "fixed z-50 min-h-full w-full min-w-[255px] overflow-auto bg-black/50 xl:relative xl:w-[255px] xl:bg-none",
        isNavOpen ? "left-0" : "-left-full xl:left-0",
      )}
      onClick={toggleNav}
    >
      <div
        className={cn(
          "fixed flex h-full w-[255px] flex-col justify-between border-r border-neutral-800 bg-black",
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Logo Section */}
        <div className="flex items-center justify-between border-b border-white/10 px-6">
          <Image
            className="mx-auto my-4 hidden object-cover xl:block"
            src={Logo}
            alt="Sidebar logo"
            width={100}
            height={100}
          />

          <Image
            src={Logo2}
            alt=""
            className="my-4 w-[150px] brightness-200 grayscale filter xl:hidden"
          />

          <X
            className="cursor-pointer rounded-md border border-white/20 bg-zinc-800 p-[3px] text-gray-400 xl:hidden"
            onClick={toggleNav}
          />
        </div>

        {/* Navigation Links */}
        <div className="my-8 overflow-auto px-4">
          {navLinks.map(({ label, icon: Icon, path }) => {
            const isActive = pathname.startsWith(path);

            return (
              <Link
                href=""
                key={path}
                className={cn(
                  "my-1 flex cursor-pointer items-center gap-x-6 rounded-[4px] px-3 py-[6px] text-[16px] transition-colors hover:bg-white/5",
                  isActive
                    ? "bg-gradient-to-bl from-neutral-900 via-white/20 to-neutral-900 font-bold"
                    : "font-normal text-white/50",
                )}
              >
                <Icon className="size-5 drop-shadow-sm" />
                <span>{label}</span>
              </Link>
            );
          })}
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap items-center justify-center gap-2 border-t border-white/10 px-4 py-6">
          {socialLinks.map(({ icon: Icon, path, isLucid }) => (
            <Link
              href=""
              key={path}
              className={cn(
                "flex size-[50px] cursor-pointer items-center justify-center p-2 font-bold",
                "border border-white/5 hover:bg-white/5",
              )}
            >
              {isLucid ? (
                <Icon className="size-5 text-white/50 drop-shadow-sm" />
              ) : (
                <Image
                  src={Icon}
                  alt=""
                  className="size-5 text-white/50 opacity-[.5] drop-shadow-sm"
                />
              )}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
