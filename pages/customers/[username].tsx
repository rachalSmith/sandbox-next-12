import { useRouter } from "next/router";

import {
  GetStaticPaths,
  GetStaticProps,
  InferGetStaticPropsType,
  NextPage,
} from "next";
import { Customer } from "../api/customers";

// this page = http://localhost:3000/customers/50 - or whatever parameter is chosen

type Props = {
  customer: Customer;
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      {
        params: {
          username: "1",
        },
      },
      {
        params: {
          username: "2",
        },
      },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  console.log(context?.params?.username);
  const resp = await fetch(
    `http://localhost:3000/api/customers${context?.params?.username}`
  );

  return {
    props: {
      customer: {},
    },
  };
};

interface IHomeProps {
  customers: InferGetStaticPropsType<typeof getStaticProps>;
}

const Profile: NextPage<Props> = (props) => {
  const { customer } = props;

  return <>singular: {customer.username}</>;
};

export default Profile;
