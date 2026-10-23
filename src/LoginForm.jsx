import { useState } from "react";

function LoginForm() {
  // input state values always need to be strings - empty initially.
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");
  const [attemptCount, setAttemptCount] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reloading on form submit.

    const correctPassword = "aaaaa";

    if (attemptCount < 3) {
      const nextAttempt = attemptCount + 1;
      setAttemptCount(nextAttempt);
      
      // add some password validation.
      if (userPassword.length < 5) {
        setSubmitResult("Password must be at least 5 characters long");
      } else if (userPassword === userEmail) {
        setSubmitResult("Password must not match email address");
      // } else if (userEmail === "") {
      //   setSubmitResult("Email must have a value");
      } else if (userPassword === correctPassword) {
        setSubmitResult("Successful login.");
        setAttemptCount(1);
        Array.from(document.getElementsByClassName("formRow"))
      .forEach(el => el.style.display = "none");
      } else {
        setSubmitResult("Incorrect Password");
      }

    } else {
      setSubmitResult("Max attempts reached");
      Array.from(document.getElementsByClassName("formRow"))
      .forEach(el => el.style.display = "none");
    }
  }

  return (
    <div className="LoginForm componentBox">
      <form onSubmit={handleSubmit}>
        <div className="formRow">
          <label>
            Email Address:
            {/* Controlled form element needs both value and onChange.
          onChange handler uses event param e to access target value.
          Whenever user types, new value is stored in state. */}
            <input
              type="email"
              value={userEmail}
              name="userEmail"
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </label>
        </div>
        <div className="formRow">
          <label>
            Password:
            <input
              type="password"
              value={userPassword}
              name="password"
              onChange={(e) => setUserPassword(e.target.value)}
            />
          </label>
        </div>
        <button className="formRow">Log In</button>
        <p>{submitResult}</p>
      </form>
    </div>
  );
}

export default LoginForm;