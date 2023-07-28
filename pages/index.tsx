import type { NextPage } from "next";

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

const Home: NextPage = ({ coinData }: any) => {
  console.log(coinData);
  return (
    <>
      <Head>
        <title>Sandbox</title>
      </Head>

      <Link href={"./about"}>About</Link>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
};

export default Home;
