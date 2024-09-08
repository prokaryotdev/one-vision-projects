"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import Logo from "../../public/logooo.png";
import Image from "next/image";
import useNavStore from "../../store/store";

const Navbar = () => {
  const { toggleNav } = useNavStore();

  return (
    <header className="border-b border-white/30 xl:hidden">
      <div className="mx-auto flex w-full max-w-[1000px] items-center justify-between px-5 py-4 sm:px-10">
        <Link href="/">
          <Image
            src={Logo}
            alt=""
            className="w-[150px] brightness-200 grayscale filter"
          />
        </Link>
        <button
          onClick={toggleNav}
          className="flex items-center gap-x-2 text-sm font-bold text-white/80"
        >
          <Menu className="size-[26px]" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
