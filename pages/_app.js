import "../styles/main.scss";
import React from "react";
import Router from "next/router";
import nProgress from "nprogress";
function App({ Component, pageProps }) {
  React.useEffect(()=> {
    const start = () => nProgress.start();
    const end = () => nProgress.done();

    Router.events.on("routeChangeStart", start);
    Router.events.on("routeChangeComplete", end);
    Router.events.on("routeChangeError", end);

    return () => {
    Router.events.off("routeChangeStart", start);
    Router.events.off("routeChangeComplete", end);
    Router.events.off("routeChangeError", end);
    }


  }, [])
  return <Component {...pageProps} />;
}

export default App
