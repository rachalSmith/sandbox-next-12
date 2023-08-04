import { useRouter } from "next/router";

// this page = http://localhost:3000/profile/${id}/nested/${nestedParam}- or whatever parameter is chosen

const NestedP = () => {
  const router = useRouter();

  const { username, nestedParam } = router.query;
  return (
    <>
      username: {username} nestedParam: {nestedParam}
    </>
  );
};

export default NestedP;
