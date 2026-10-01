"use client";

import achivementSvg from "@/assest/image/svg/achivement.svg";
import projectSvg from "@/assest/image/svg/brief-case.svg";
import coffeeSvg from "@/assest/image/svg/coffee.svg";
import contactSvg from "@/assest/image/svg/contact.svg";
import homeSvg from "@/assest/image/svg/home.svg";
import aboutSvg from "@/assest/image/svg/user.svg";
import { ROUTES, TABS } from "@/constants";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { HomeLayout, isBrowser } from "./HomeLayout";

const MENUS = [
  { label: TABS.HOME, href: ROUTES.HOME, icon: homeSvg, alt: "home svg" },
  { label: TABS.ABOUT, href: ROUTES.ABOUT, icon: aboutSvg, alt: "about svg" },
  {
    label: TABS.PROJECT,
    href: ROUTES.PROJECT,
    icon: projectSvg,
    alt: "project svg",
  },
  {
    label: TABS.ACHIVEVEMENT,
    href: ROUTES.ACHIEVEMENT,
    icon: achivementSvg,
    alt: "ACHIVEVEMENT svg",
  },
  {
    label: TABS.CONTACT,
    href: ROUTES.CONTACT,
    icon: contactSvg,
    alt: "project svg",
    width: 20,
  },
  {
    label: TABS.BUY_ME_COFFEE,
    href: ROUTES.DONATE,
    icon: coffeeSvg,
    alt: "coffee svg",
    width: 20,
  },
];

export const MainLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (isBrowser()) {
      window.scroll(0, 0);
    }
  }, [pathname]);

  return (
    <HomeLayout
      onClickMenu={(href) => router.push(href)}
      menus={MENUS.map((menu) => ({
        label: menu.label,
        value: menu.href,
        active: pathname === menu.href,
        icon: (
          <Image
            priority
            src={menu.icon}
            width={menu.width}
            alt={menu.alt}
          />
        ),
      }))}
    >
      <div className="wrap bg-wrap">
        <div>{children}</div>
      </div>
    </HomeLayout>
  );
};
