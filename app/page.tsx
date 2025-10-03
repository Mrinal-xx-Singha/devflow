import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <div>
      <h1 className="h1-bold font-inter text-light-400">
        Welcome to Next.js Inter Font
      </h1>
      <h1 className="h1-bold font-space-grotesk">Welcome to Next.js Grotesk</h1>
      <Image src="/images/logo.png" alt="Site Logo" width={100} height={100} />
    </div>
  );
};

export default Home;
