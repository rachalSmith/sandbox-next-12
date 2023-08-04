import { useRouter } from "next/router";

// this page = http://localhost:3000/profile/50 - or whatever parameter is chosen

const Profile = () => {
  const router = useRouter();

  const { username } = router.query;
  return <>then adding the filename in brackets: {username}</>;
};

export default Profile;
