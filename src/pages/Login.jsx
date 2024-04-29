import styled from "styled-components";
import LoginForm from "../features/authentication/LoginForm";
// import Logo from "../ui/Logo";
import Heading from "../ui/Heading";

const LoginLayout = styled.main`
  min-height: 100vh;
  display: grid;

  padding: 6rem 10rem;
  background-image: -webkit-gradient(
    linear,
    left top,
    right bottom,
    from(#7ed56f),
    to(#28b485)
  );
  background-image: linear-gradient(to right bottom, #7ed56f, #28b485);
`;

function Login() {
  return (
    <LoginLayout>
      {/* <Logo /> */}

      <LoginForm />
    </LoginLayout>
  );
}

export default Login;
