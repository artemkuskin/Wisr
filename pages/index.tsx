import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Component1 } from "@/components/Component1";
import { Component2 } from "@/components/Component2";
import { Component3 } from "@/components/Component3";
import { Component4 } from "@/components/Component4";
import { Component5 } from "@/components/Component5";
import { Component6 } from "@/components/Component6";
import { Component7 } from "@/components/Component7";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Component1 />
        <Component2 />
        <Component3 />
        <Component4 />
        <Component5 />
        <Component6 />
        <Component7 />
      </main>
    </>
  );
}