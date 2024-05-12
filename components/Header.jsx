import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <nav class="flex items-center justify-between w-11/12 lg:w-10/12 max-w-7xl py-5 lg:py-6 mx-auto">
      <div class="flex gap-5 items-center justify-between lg:w-8/12 text-[#1A1A1A]">
        <div class="flex items-center gap-2">
          <Image
            src="/assets/svg/menu.svg"
            class="lg:hidden w-5 h-5"
            width={5}
            height={5}
            alt=""
          />
          <Link href="/">
            <Image
              width={80}
              height={60}
              src="/assets/lws-logo-black.svg"
              class="h-10"
              alt=""
            />
          </Link>
        </div>
      </div>
      <div class="flex items-center justify-end gap-2 lg:gap-5 lg:w-4/12">
        <Image
          width={20}
          height={20}
          src="/assets/svg/avatar.svg"
          class="hidden lg:block w-[18px] h-[18px]"
          alt="login acount avatar"
        />
        <Image
          width={20}
          height={20}
          src="/assets/svg/shopping-Cart.svg"
          class="block w-5 h-5"
          alt="shopping cart icon"
        />
      </div>
    </nav>
  );
};

export default Header;
