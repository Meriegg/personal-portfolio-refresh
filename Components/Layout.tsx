import React from "react";
import Nav from "./Nav/Nav";
import SectionManager from "./Sections/SectionManager";
import { ToastContainer, toast } from "react-toastify";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
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
