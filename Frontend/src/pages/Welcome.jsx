import { useNavigate } from "react-router-dom";

function Welcome() {
  const nav = useNavigate();

  return (
    <div className="app-container" style={{ marginTop: "200px" }}>
      <h2>Welcome to PopX</h2>
      <p>Lorem ipsum dolor sit amet.</p>

      <button className="btn-primary" onClick={() => nav("/register")}>
        Create Account
      </button>

      <button className="btn-secondary" onClick={() => nav("/login")}>
        Already Registered? Login
      </button>
    </div>
  );
}

export default Welcome;