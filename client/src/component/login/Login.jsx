import "./logincss.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../store/userAuthContext";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { storetokenInLS } = useAuth();

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleForm = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const response = await fetch(`http://localhost:5000/api/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        console.log("User Invalid");
      } else {
        const res_data = await response.json(); // Await the JSON parsing
        console.log("Response from the server for login purpose", res_data);
        console.log(
          "Response from the server for login purpose",
          res_data.token
        );
        localStorage.setItem("token", res_data.token);
        localStorage.setItem("id", res_data.userId);
        // console.log("Login user data", res_data.userData.isAdmin);
        localStorage.setItem("isAdmin", res_data.userData.isAdmin);
        localStorage.setItem("email", res_data.userData.email);

        storetokenInLS(res_data.token);
        setUser({ email: "", password: "" });
        navigate("/");
      }
    } catch (error) {
      console.log("Login ", error);
    }
  };

  return (
    <>
      <section>
        <main>
          <div className="section-registration">
            <div className="container grid grid-two-cols">
              <div className="registration-image reg-img">
                <img
                  src="/images/login.png"
                  alt="a nurse with a cute look"
                  width="400"
                  height="500"
                />
              </div>
              {/* our main registration code  */}
              <div className="registration-form">
                <h1 className="main-heading mb-3">Login to Your Account</h1>
                <br />
                <form onSubmit={handleForm}>
                  <div>
                    <label htmlFor="email">email</label>
                    <input
                      type="text"
                      name="email"
                      placeholder="email"
                      id="email"
                      value={user.email}
                      onChange={handleInput}
                    />
                  </div>

                  <div>
                    <label htmlFor="password">password</label>
                    <input
                      type="password"
                      name="password"
                      placeholder="password"
                      id="password"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                  <br />
                  <button type="submit" className="btn btn-submit">
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}

export default Login;
