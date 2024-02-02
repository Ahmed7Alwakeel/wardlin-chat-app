import Layout from "@/components/layout/Layout";
import { store } from "@/store/redux/store";
import "@/styles/app.scss";
import Head from "next/head"
import NextNProgress from "nextjs-progressbar";
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
        <Layout>
          <NextNProgress color={"#0e306c"} options={{ showSpinner: false }} />
          <Component {...pageProps} />
        </Layout>
    </>
  )
}
