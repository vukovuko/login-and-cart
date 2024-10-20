import React from "react";
import Header from "./Header";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="max-w-[1440px] md:mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
