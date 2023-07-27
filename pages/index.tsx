import type { NextPage } from "next";

import styles from "../styles/Home.module.css";

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";

export const getStaticProps = async () => {
  const response = await fetch(
    "http://api.coinstats.app/public/v1/coins?skip=0"
  );
  const data = await response.json();
  return { props: { coinData: data } };
};

{
  /*need to add request interface */
}

const Home: NextPage = ({ coinData }: any) => {
  console.log(coinData);
  return (
    <div className={styles.container}>
      <Head>
        <title>title of the website</title>
        {/*You can add stuff youd normally add to the html head tag here */}
      </Head>
      <Link href={"./about"}>About</Link>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default Home;
