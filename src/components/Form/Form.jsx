import "./Form.scss";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { authUser } from "../../actions/user.action";
import { useNavigate } from "react-router-dom";

function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const message = useSelector((state) => state.user.error);

  const user = {
    email: email,
    password: password,
  };

  const handleForm = async (e) => {
    e.preventDefault();
    dispatch(authUser(user, rememberMe, navigate));
  };

  return (
    <>
      <form onSubmit={handleForm}>
        <div className="input-wrapper">
          <label htmlFor="email">Username</label>
          <input
            type="text"
            id="email"
            value={email}
            required
            autoComplete="off"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            required
            type="password"
            id="password"
            value={password}
            autoComplete="off"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <div className="input-remember">
          <input
            type="checkbox"
            id="remember-me"
            value={rememberMe}
            onChange={(e) => {
              setRememberMe(e.target.checked);
            }}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>

        <div>
          <p className="error-message">{message}</p>
        </div>

        <button className="sign-in-button">Sign In</button>
      </form>
    </>
  );
}

export default Form;
