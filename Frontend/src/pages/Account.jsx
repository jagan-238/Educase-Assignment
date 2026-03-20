function Account() {
  return (
    <div className="app-container">
      <h2>Account Settings</h2>

      <div style={{ display: "flex", gap: "10px" }}>
        <img
          src="https://i.pravatar.cc/100"
          width="60"
          style={{ borderRadius: "50%" }}
        />
        <div>
          <h4>Marry Doe</h4>
          <p>MarryDoe@mail.com</p>
        </div>
      </div>

      <p>
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing elitr.
      </p>
    </div>
  );
}

export default Account;