import { useNavigate } from "react-router-dom";

function Login() {
  const nav = useNavigate();

  return (
    <div className="app-container">
      <h2>Signin to your PopX account</h2>
      <p>Lorem ipsum dolor sit amet.</p>

      <label className="label">Email Address</label>
      <input placeholder="Enter email address" />

      <label className="label">Password</label>
      <input type="password" placeholder="Enter password" />

      <button className="btn-primary" onClick={() => nav("/account")}>
        Login
      </button>
    </div>
  );
}

export default Login;