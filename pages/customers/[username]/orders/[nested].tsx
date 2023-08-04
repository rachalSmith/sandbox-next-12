import { useRouter } from "next/router";

// this page = http://localhost:3000/customers/${id}/orders/${nestedParam}- or whatever parameter is chosen

const NestedP = () => {
  const router = useRouter();

  const { username, nested } = router.query;
  return (
    <>
      username: {username} nestedParam: {nested}
    </>
  );
};

export default NestedP;
