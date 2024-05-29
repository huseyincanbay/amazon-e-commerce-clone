import React, { ReactElement } from "react";
import Header from "./Header";
import SecondHeader from "./SecondHeader";
import Footer from "./Footer";

interface Props {
  children: ReactElement;
}

const RootLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <SecondHeader />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;