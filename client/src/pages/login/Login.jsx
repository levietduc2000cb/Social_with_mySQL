import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.scss";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [err, setErr] = useState(null);
  const [inputs, setInputs] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChangeValue = (e) => {
    setInputs((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(inputs);
      navigate("/");
    } catch (error) {
      setErr(error.response.data);
    }
  };

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello World.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestias molestiae, est veniam deserunt adipisci facere. Qui quam
            optio nihil nobis. Pariatur ab ut consectetur earum enim, excepturi
            mollitia perspiciatis nihil eaque. Blanditiis aliquid nobis sapiente
            tempore fugiat iure illo, eos a sint sunt.
          </p>
          <span>Don't you have an account?</span>
          <Link to={"/register"}>
            <button>Register</button>
          </Link>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={inputs.email}
              onChange={handleChangeValue}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={inputs.password}
              onChange={handleChangeValue}
            />
            {err && <p style={{ color: "red", fontSize: "1.2rem" }}>{err}</p>}
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
