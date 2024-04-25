// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import dotenv from "dotenv";
// dotenv.config();
import { useEffect, useState } from "react";
import axios from "axios";
import "./Summary.css";
// import StripeCheckout from "react-stripe-checkout";
import { useNavigate } from "react-router-dom";
function Summary() {
  let navigate = useNavigate();
  const id = localStorage.getItem("id");

  console.log("Summary user id from local storage", id);

  // function onChangeHandler() {

  // }

  function handdelForm(e) {
    e.preventDefault();
  }

  const [form, setForm] = useState({
    username: "",
    email: "",
    phone: "",
    streetaddress: "",
    city: "",
    state: "",
    postalcode: "",
    id: id,
  });

  const changeHandler = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  function saveCheckoutInfo() {
    try {
      axios
        .post("http://localhost:5000/userCheckout", form, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          alert("Data saved successfully");
          return response.data; // Return the parsed response data
        })
        .then((data) => {
          console.log(data);
        });
    } catch (error) {
      console.log("Unable to submit data for", error);
    }
  }

  //Get User Details

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch user details based on user ID
        if (id) {
          const response = await fetch(
            `http://localhost:5000/usersData?id=${id}`
          );
          if (response.ok) {
            const userData = await response.json();
            console.log("This is user data for summary", userData);
            // Update form state with userData
            setForm(userData);
          } else {
            throw new Error("Failed to fetch user data");
          }
        }
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, [id]); // Make sure to include id in the dependency array

  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">Summary</h1>
        </div>
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
          <div className="contact-img" style={{ marginBottom: "500px" }}>
            <img
              src="https://images.pexels.com/photos/4443160/pexels-photo-4443160.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="we are always ready to help"
              style={{ height: "100%" }}
            />
          </div>

          {/* contact form content actual  */}
          <section
            className="section-form"
            style={{ marginBottom: "250px", marginTop: "-100px" }}
          >
            <form onSubmit={handdelForm}>
              <h1>Fill Your Detail Carefully</h1>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  placeholder="username"
                  name="username"
                  id="username"
                  autoComplete="off"
                  required
                  value={form.username}
                  onChange={changeHandler}
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={form.email}
                  required
                  onChange={changeHandler}
                />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input
                  type="text"
                  placeholder="phone"
                  name="phone"
                  id="email"
                  autoComplete="off"
                  required
                  value={form.phone}
                  onChange={changeHandler}
                />
              </div>
              <div>
                <label htmlFor="email">Street Address</label>
                <input
                  placeholder="streetaddress"
                  required
                  type="text"
                  name="streetaddress"
                  id="email"
                  autoComplete="off"
                  value={form.streetaddress}
                  onChange={changeHandler}
                />
              </div>
              <div>
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  placeholder="city"
                  name="city"
                  id="email"
                  autoComplete="off"
                  value={form.city}
                  required
                  onChange={changeHandler}
                />
              </div>
              <div>
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  placeholder="state"
                  name="state"
                  id="email"
                  autoComplete="off"
                  value={form.state}
                  required
                  onChange={changeHandler}
                />
              </div>
              <div>
                <label htmlFor="postalcode">Postal Code</label>
                <input
                  type="text"
                  placeholder="postal code"
                  name="postalcode"
                  id="email"
                  autoComplete="off"
                  required
                  value={form.postalcode}
                  onChange={changeHandler}
                />
              </div>

              <div>
                <button
                  type="submit"
                  style={{ width: "380px" }}
                  onClick={(e) => {
                    e.preventDefault();
                    if (
                      form.username &&
                      form.email &&
                      form.phone &&
                      form.streetaddress &&
                      form.city &&
                      form.state &&
                      form.postalcode
                    ) {
                      saveCheckoutInfo();
                      navigate("/payment");
                    } else {
                      alert("Please fill all the details");
                    }
                  }}
                >
                  BUY
                </button>
              </div>
            </form>
          </section>
        </div>

        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2613173278896!2d73.91411937501422!3d18.562253982539413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20Pune!5e0!3m2!1sen!2sin!4v1697604225432!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
}

export default Summary;
