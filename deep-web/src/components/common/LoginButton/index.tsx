import { Link } from "react-router-dom";
import * as l from "./style";

const Login = () => {
  return (
    <Link to="/login">
      <l.LoginButton>
        <span>아이디로 로그인하기</span>
      </l.LoginButton>
    </Link>
  );
};

export default Login;
