import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ApiRegister } from "../../api/auth.api";
import "./register.scss";

const Register = () => {
  const [err, setErr] = useState(null);
  const [inputs, setInputs] = useState({ name: "", email: "", password: "" });
  const handleChangeValue = (e) => {
    setInputs((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await ApiRegister(inputs);
      navigate("/login");
    } catch (error) {
      setErr(error.response.data);
    }
  };

  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Wibu Social.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestias molestiae, est veniam deserunt adipisci facere. Qui quam
            optio nihil nobis. Pariatur ab ut consectetur earum enim, excepturi
            mollitia perspiciatis nihil eaque. Blanditiis aliquid nobis sapiente
            tempore fugiat iure illo, eos a sint sunt.
          </p>
          <span>Do you have an account?</span>
          <Link to={"/login"}>
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChangeValue}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChangeValue}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleChangeValue}
            />
            {err && <p style={{ color: "red", fontSize: "1.2rem" }}>{err}</p>}
            <button>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
