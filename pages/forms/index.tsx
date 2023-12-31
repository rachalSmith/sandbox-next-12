import router from "next/router";
import Container from "../../components/layout/Container";
import OutlineButton from "../../components/buttons/OutlineButton";
import FilledButton from "../../components/buttons/FilledButton";

const Forms = () => {
  return (
    <Container>
      <FilledButton
        colour="blue"
        disabled={false}
        onClick={() => router.push("/forms/signUp/")}
      >
        Sign up
      </FilledButton>
      <OutlineButton
        colour="blue"
        disabled={false}
        onClick={() => router.push("/forms/signIn")}
      >
        Sign in
      </OutlineButton>
    </Container>
  );
};
export default Forms;
