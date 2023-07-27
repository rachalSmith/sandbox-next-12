import Link from "next/link";

const PageNotFound = () => {
  return (
    <>
      oh no, page not found <Link href={"/"}>Click to go home</Link>
    </>
  );
};

export default PageNotFound;
