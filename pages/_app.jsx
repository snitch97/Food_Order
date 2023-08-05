import "slick-carousel/slick/slick.css";
import "react-toastify/dist/ReactToastify.css";
import "../styles/globals.css";
import "slick-carousel/slick/slick-theme.css";
import "nprogress/nprogress.css";

import Layout from "../layout/Layout";

import { Provider } from "react-redux";
import store from "../redux/store";
import { SessionProvider } from "next-auth/react";

import { ToastContainer } from "react-toastify";

import { Router } from "next/router";

import nProgress from "nprogress";

Router.events.on("routeChangeStart", () => nProgress.start());
Router.events.on("routeChangeComplete", () => nProgress.done());
Router.events.on("routeChangeError", () => nProgress.done());
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <Layout>
          <div className="pt-[88px]">
            <ToastContainer />
            <Component {...pageProps} />
          </div>
        </Layout>
      </Provider>
    </SessionProvider>
  );
}

export default MyApp;
