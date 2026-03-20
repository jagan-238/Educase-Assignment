import { useNavigate } from "react-router-dom";

function Register() {
  const nav = useNavigate();

  return (
    <div className="app-container">
      <h2>Create your PopX account</h2>

      <label className="label">Full Name*</label>
      <input placeholder="Marry Doe" />

      <label className="label">Phone number*</label>
      <input placeholder="Marry Doe" />

      <label className="label">Email address*</label>
      <input placeholder="Marry Doe" />

      <label className="label">Password*</label>
      <input type="password" placeholder="Marry Doe" />

      <label className="label">Company name</label>
      <input placeholder="Marry Doe" />

      <p style={{ marginTop: "10px" }}>Are you an Agency?</p>

      <div className="radio-group">
        <label>
          <input type="radio" name="agency" /> Yes
        </label>
        <label>
          <input type="radio" name="agency" /> No
        </label>
      </div>

      <button className="btn-primary" onClick={() => nav("/account")}>
        Create Account
      </button>
    </div>
  );
}

export default Register;