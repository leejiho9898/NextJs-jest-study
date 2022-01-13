import Head from "next/head";
import React from "react";

export interface SeoProps {
  title: string;
}
const Seo = ({ title }: SeoProps) => {
  return (
    <div>
      <Head>
        <title> {title} | Next Movies</title>
      </Head>
    </div>
  );
};

export default Seo;
