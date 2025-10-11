"use client";
import React from "react";
import { sidebarLinks } from "@/context";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SheetClose } from "@/components/ui/sheet";

const NavLinks = ({ isMobileNav = false }: { isMobileNav?: boolean }) => {
  const pathname = usePathname();
  return (
    <>
      {sidebarLinks.map((item) => {
        const isActive =
          (pathname.includes(item.route) && item.route.length > 1) ||
          pathname === item.route;

        const linkComponent = (
          <Link
            href={item.route}
            key={item.label}
            className={cn(
              isActive
                ? "primary-gradient rounded-lg text-light-900"
                : "text-dark300_light900",
              "flex items-center justify-start gap-4 bg-transparent p-4"
            )}
          >
            <Image
              className={cn({ "invert-colors": !isActive })}
              src={item.imgURL}
              alt={item.label}
              width={20}
              height={20}
            />
            <p
              className={cn(
                isActive ? "base-bold" : "base-medium",
                !isMobileNav && "max-lg:hidden"
              )}
            >
              {item.label}
            </p>
          </Link>
        );
        // every time we click a link the sheet closes automatically
        // because we use sheetclose and map over the link component to check if isMobileNav true or false
        return isMobileNav ? (
          <SheetClose asChild key={item.route}>
            {linkComponent}
          </SheetClose>
        ) : (
          <React.Fragment key={item.route}>{linkComponent}</React.Fragment>
        );
      })}
    </>
  );
};

export default NavLinks;
