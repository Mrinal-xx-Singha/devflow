import Navbar from "@/components/navigation/navbar";
import React from "react";
import LeftSideBar from "@/components/navigation/LeftSideBar";
import RightSideBar from "@/components/navigation/RightSideBar";
// shows the navbar on root layout but not on the signin or signup page because of route grouping
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="background-light850_dark100 relative ">
      <Navbar />
      {/* Left Side Bar */}
      <div className="flex">
        <LeftSideBar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 max-md:pb-14 sm:px-14 ">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
        {/* Right Side bar */}
        <RightSideBar />
      </div>
    </main>
  );
};

export default RootLayout;
