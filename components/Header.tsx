import Head from "next/head";
import React, { JSX } from "react";

export default function Header(): JSX.Element {
  return (
    <Head>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Portfolio de Natalia Salazar, Front‑end Developer"
      />
      <meta name="author" content="Natalia Salazar" />

      <meta property="og:type" content="website" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <meta property="og:title" content="Natalia Salazar" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="shortcut icon" href="images/n.svg" />
      <title>Natalia Salazar - Desarrolladora Frontend</title>
    </Head>
  );
}
