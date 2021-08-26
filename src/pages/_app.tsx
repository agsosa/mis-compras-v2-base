import type { AppProps } from "next/app";
import Head from "next/head";

import GlobalStyle from "../styles/globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "../styles/theme";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Next.js</title>
        <meta name="description" content="Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default App;
