import Layout from "../Components/Layout";
import { ContextProvider } from "../Components/Context/Context";
import type { AppProps } from "next/app";

import "../styles/globals.scss";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ContextProvider>
  );
}

export default MyApp;
