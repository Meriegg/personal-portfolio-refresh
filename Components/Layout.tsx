import React from "react";
import Nav from "./Nav/Nav";
import Head from "next/head";
import { ToastContainer, toast } from "react-toastify";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Mariodev | Developer | Designer</title>
      </Head>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Nav />
      <main>{children}</main>
    </>
  );
};

export default Layout;
