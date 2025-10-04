import React from "react";

// route grouping for auth 
// takes children as a prop

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default AuthLayout;
