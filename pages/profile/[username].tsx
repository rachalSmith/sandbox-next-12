import { useRouter } from "next/router";

const Profile = () => {
  const router = useRouter();

  const { username } = router.query;
  return <>then adding the filename in brackets: {username}</>;
};

export default Profile;
