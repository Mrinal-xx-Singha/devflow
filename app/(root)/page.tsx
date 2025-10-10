import { auth, signOut } from "@/auth";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

const Home = async () => {
  const session = await auth();
  console.log(session);

  return (
    <>
      <h1 className="text-light-800">Welcome to the world of next js</h1>
    </>
  );
};

export default Home;
