import About from "@/components/About";
import Main from "@/components/Main";
import { Figtree, Raleway } from "next/font/google";
import Head from "next/head";

const figtree = Raleway({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Darel Bvcr - Frontend Developer</title>
      </Head>
      <Main />
      <About />
    </>
  );
}
