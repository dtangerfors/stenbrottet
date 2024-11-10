"use client"
import Link from "next/link";
import Logo from "@/components/Logo";
import Navigation from "./Navigation";

export default function DesktopNav() {

  return (
    <div className="flex flex-col gap-12">
      <Link
        className="flex gap-4 items-center"
        href="/"
      >
        <div className="w-8 fill-tertiary">
          <Logo />
        </div>
      </Link>
      <Navigation />
    </div>
  )
}