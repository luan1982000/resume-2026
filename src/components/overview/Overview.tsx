"use client";
import achivementSvg from "@/assest/image/svg/achivement.svg";
import projectSvg from "@/assest/image/svg/brief-case.svg";
import coffeeSvg from "@/assest/image/svg/coffee.svg";
import contactSvg from "@/assest/image/svg/contact.svg";
import homeSvg from "@/assest/image/svg/home.svg";
import aboutSvg from "@/assest/image/svg/user.svg";
import {
  About,
  Achievement,
  BuyMeCoffee,
  Contact,
  OverlayLoading,
  Project,
} from "@/components";
import { TABS } from "@/constants";
import { HomeLayout } from "@/layout";
import { isBrowser } from "@/layout/HomeLayout"; // Ensure this is imported
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Intro } from "../intro";

const renderTabContent = (
  activeTab: string,
  setActiveTab: (tab: string) => void,
) => {
  switch (activeTab) {
    case TABS.HOME:
      return <Intro setActiveTab={setActiveTab} />;
    case TABS.ABOUT:
      return <About />;
    case TABS.PROJECT:
      return <Project />;
    case TABS.ACHIVEVEMENT:
      return <Achievement />;
    case TABS.CONTACT:
      return <Contact />;
    case TABS.BUY_ME_COFFEE:
      return <BuyMeCoffee />;
    default:
      return (
        <>
          Home
          <OverlayLoading />
        </>
      );
  }
};

const VALID_TABS = Object.values(TABS);

export const Overview = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const tabFromUrl = searchParams.get("activeTab");
  const initialTab =
    tabFromUrl && VALID_TABS.includes(tabFromUrl) ? tabFromUrl : TABS.HOME;

  const [activeTab, setActiveTab] = useState(initialTab);

  const handleSetActiveTab = useCallback(
    (tab: string) => {
      setActiveTab(tab);
      const params = new URLSearchParams(searchParams.toString());
      params.set("activeTab", tab);
      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [searchParams, router, pathname],
  );

  const renderTabs = useMemo(
    () => renderTabContent(activeTab, handleSetActiveTab),
    [activeTab, handleSetActiveTab],
  );

  useEffect(() => {
    if (isBrowser()) {
      window.scroll(0, 0);
    }
  }, [activeTab]);

  return (
    <HomeLayout
      onClickMenu={(e) => handleSetActiveTab(e)}
      menus={[
        {
          label: TABS.HOME,
          active: activeTab === TABS.HOME,
          icon: (
            <Image
              priority
              src={homeSvg}
              alt="home svg"
            />
          ),
          value: TABS.HOME,
        },
        {
          label: TABS.ABOUT,
          active: activeTab === TABS.ABOUT,
          icon: (
            <Image
              priority
              src={aboutSvg}
              alt="about svg"
            />
          ),
          value: TABS.ABOUT,
        },
        {
          label: TABS.PROJECT,
          active: activeTab === TABS.PROJECT,
          icon: (
            <Image
              priority
              src={projectSvg}
              alt="project svg"
            />
          ),
          value: TABS.PROJECT,
        },
        {
          label: TABS.ACHIVEVEMENT,
          active: activeTab === TABS.ACHIVEVEMENT,
          icon: (
            <Image
              priority
              src={achivementSvg}
              alt="ACHIVEVEMENT svg"
            />
          ),
          value: TABS.ACHIVEVEMENT,
        },
        {
          label: TABS.CONTACT,
          active: activeTab === TABS.CONTACT,
          icon: (
            <Image
              priority
              src={contactSvg}
              width={20}
              alt="project svg"
            />
          ),
          value: TABS.CONTACT,
        },
        {
          label: TABS.BUY_ME_COFFEE,
          active: activeTab === TABS.BUY_ME_COFFEE,
          icon: (
            <Image
              priority
              src={coffeeSvg}
              width={20}
              alt="coffee svg"
            />
          ),
          value: TABS.BUY_ME_COFFEE,
        },
      ]}
    >
      <div className="wrap bg-wrap">
        <div>{renderTabs}</div>
      </div>
    </HomeLayout>
  );
};
