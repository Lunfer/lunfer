import "@fontsource/dosis";
import Head from "next/head";
import TopBar from "../components/topBar";
import CustomFooter from "../components/customFooter";
import BoxGridder from "../components/boxGridder";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zoi Kousteni | Software Engineer</title>
        <meta name="description" content="Portfolio & Resume of Zoi Kousteni — Software Engineer, Data Scientist, and ML enthusiast based in Greece." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="layout">
        <div className="hero-bg">
          <TopBar />
        </div>
        <div className="content-bg">
          <BoxGridder />
        </div>
        <CustomFooter />
      </div>
    </>
  );
}
