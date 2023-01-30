import { FormLogin } from "../../components/FormLogin";
import { LoginPage, Link } from "./styles";

export const Login = () => {
  return (
    <LoginPage>
      <h1>Kenzie Hub</h1>
      <div className="divLoginAndForm">
        <h3>Login</h3>
          <FormLogin />
        <p>Ainda não possui uma conta?</p>
        <Link to="/cadastro">Cadastre-se</Link>
      </div>
    </LoginPage>
  );
};
