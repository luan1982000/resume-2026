"use client";

import moonSvg from "@/assest/image/svg/moon.svg";
import sunSvg from "@/assest/image/svg/sun.svg";
import { Particales } from "@/components/particales/Particales";
import { THEMES } from "@/constants";
import Image from "next/image";
import {
  FC,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import "./styles.css";

type Props = {
  children: ReactNode;
  menus: {
    label: string | ReactElement;
    icon?: string | ReactElement;
    value: string;
    active?: boolean;
  }[];
  onClickMenu?: (value: string) => void;
};
export const isBrowser = (): boolean => {
  return typeof window !== "undefined";
};

export const HomeLayout: FC<Props> = ({ children, onClickMenu, menus }) => {
  const timeOutRef = useRef<any>();
  const [init, setInit] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(
    isBrowser() ? localStorage.getItem("THEME") || THEMES.DARK : THEMES.DARK,
  );
  const changeTheme = () => {
    const currentTheme = localStorage.getItem("THEME");
    const newTheme = currentTheme === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK;
    setCurrentTheme(newTheme);
    isBrowser() && localStorage.setItem("THEME", newTheme);
    document.querySelector("html")?.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    document.querySelector("html")?.setAttribute("data-theme", currentTheme);
    const customCursor = document.getElementById("custom-cursor") as any;
    const customCursorDot = document.getElementById("custom-cursor-dot") as any;

    const updateCursorPosition = (event: any) => {
      setTimeout(() => {
        customCursor.style.top = `${event.clientY - 12.5}px`;
        customCursor.style.left = `${event.clientX - 12.5}px`;
      }, 100);
      customCursorDot.style.top = `${event.clientY}px`;
      customCursorDot.style.left = `${event.clientX}px`;
    };

    const moveCursor = (e: any) => {
      if (
        !(customCursor && customCursor?.style) ||
        !(customCursorDot && customCursorDot?.style)
      ) {
        return;
      }
      updateCursorPosition(e);
    };

    window.addEventListener("mousemove", moveCursor);

    timeOutRef.current = setTimeout(() => {
      setInit(true);
    }, 500);

    return () => {
      timeOutRef.current = undefined;
      clearTimeout(timeOutRef.current);
    };
  }, []);

  return (
    <div className="relative">
      {!init ? (
        <div className="overlay-global bg-overlay z-50">
          <div className="lds-heart">
            <div></div>
          </div>
        </div>
      ) : null}
      <Particales theme={currentTheme} />
      <div className="basis-9/12">{init && children}</div>
      <div className="toggle-theme" onClick={() => changeTheme()}>
        <Image
          priority
          src={currentTheme === THEMES.DARK ? sunSvg : moonSvg}
          alt="toggle svg"
        />
      </div>

      <div id="custom-cursor" />
      <div id="custom-cursor-dot" />

      <ul className="absolute header">
        {menus?.map((menu) => (
          <li
            key={menu.value}
            className={menu.active ? "active" : ""}
            onClick={() => {
              onClickMenu?.(menu.value);
            }}
          >
            {menu?.icon}
            <div className="name">{menu.label}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};
