import React from "react";
import NavLinks from "./navbar/NavLinks";
import Link from "next/link";
import ROUTES from "@/constants/routes";
import { Button } from "../ui/button";
import Image from "next/image";

const LeftSideBar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border sticky left-0 top-0 h-screen flex flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-3">
        {/* Reusable navLink to render the routes onto the side bar */}
        <NavLinks />
      </div>
      {/* Buttons to log out  or signup and sign in*/}
      <div className="flex flex-col gap-6">
        <Button
          className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none mt-2"
          asChild
        >
          <Link href={ROUTES.SIGN_IN}>
            <Image
              width={20}
              height={20}
              className="invert-colors lg:hidden"
              src="/icons/account.svg"
              alt="Account"
            />
            <span className="primary-text-gradient max-lg:hidden">Log In</span>
          </Link>
        </Button>

        <Button
          className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3  shadow-none"
          asChild
        >
          <Link href={ROUTES.SIGN_UP}>
            <Image
              width={20}
              height={20}
              className="invert-colors lg:hidden"
              src="/icons/sign-up.svg"
              alt="Account"
            />
            <span className="max-lg:hidden">Sign Up</span>
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default LeftSideBar;
