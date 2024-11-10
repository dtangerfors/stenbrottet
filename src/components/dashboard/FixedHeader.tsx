"use client";
import React, { useRef, useEffect } from "react";
import { useCalendarContext } from "@/app/dashboard/calendar/context";

type FixedHeaderProps = {
  label?: string;
  contentRight?: React.ReactNode;
  contentLeft?: React.ReactNode;
  invisibleFromStart?: boolean;
  children?: React.ReactNode;
};

export default function FixedHeader({
  children,
  label,
  contentRight,
  contentLeft,
  invisibleFromStart,
}: FixedHeaderProps) {
  const headerRef = useRef<HTMLHeadingElement | null>(null);
  const { currentMonth } = useCalendarContext();

  // scroll event handler
  const handleScroll = () => {
    if (invisibleFromStart) {
      const elem: HTMLHeadingElement | null = headerRef.current;
      const scrolled = document.documentElement.scrollTop;

      if (scrolled > 176) {
        if (elem) {
          elem.classList.add("opacity-100");
          elem.classList.remove("opacity-0");
        }
      } else {
        if (elem) {
          elem.classList.add("opacity-0");
          elem.classList.remove("opacity-100");
        }
      }
    }
  };

  useEffect(() => {
    if (invisibleFromStart) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  });

  return (
    <header
      className={`fixed w-full z-20 top-0 pt-safe-top px-6 bg-primary transition-all duration-300 ${
        invisibleFromStart ? "opacity-0" : "opacity-100"
      }`}
      ref={headerRef}
    >
      <div className="flex items-center w-full h-14 max-w-screen-xl mx-auto">
        <span className="grow">{contentLeft}</span>
        <span className="text-base text-white font-sans font-medium">
          {children || label || currentMonth}
        </span>
        <span className="grow">{contentRight}</span>
      </div>
    </header>
  );
}
