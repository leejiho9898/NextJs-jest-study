import Layout from "components/Layout";
import { AppProps } from "next/app";
import React from "react";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

export default App;
