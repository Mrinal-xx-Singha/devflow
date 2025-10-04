import Navbar from "@/components/navigation/navbar";
import React from "react";

// shows the navbar on root layout but not on the signin or signup page because of route grouping
const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default RootLayout;
