"use client";
import SocialAuthForm from "@/components/forms/SocialAuthForm";
import { useTheme } from "next-themes";
import Image from "next/image";
import React from "react";

// route grouping for auth
// takes children as a prop

const backgroundImage = {
  "auth-dark": 'url("/images/auth-dark.png")',
  "auth-light": 'url("/images/auth-light.png")',
};

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useTheme();

  const bg =
    theme === "dark"
      ? backgroundImage["auth-dark"]
      : backgroundImage["auth-light"];
  return (
    <main
      className="flex min-h-screen items-center justify-center"
      style={{
        backgroundImage: bg,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      suppressHydrationWarning
    >
      <section
        className="light-border background-light800_dark200
      shadow-light100_dark100 min-w-full
      rounded-[10px ] border px-4 py-10 shadow-md sm:min-w-[520px] sm:px-8
      "
      >
        <div className="flex items-center justify-between gap-2">
          <div className="spoace-y-2.5 ">
            <h1 className="h2-bold text-dark100_light900">Join DevFlow</h1>
            <p className="paragraph-regular text-dark500_light400">
              To get your questions answered
            </p>
          </div>
          <Image
            src="/images/site-logo.svg"
            alt="DevFlow logo"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
        {children}
       <SocialAuthForm />
      </section>
    </main>
  );
};

export default AuthLayout;
