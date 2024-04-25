import { NavLink } from "react-router-dom";
import "./PageNotFound.css";

function PageNotFound() {
  return (
    <>
      <section id="error-page">
        <div className=" content">
          <h2 className="header">404</h2>
          <h4>Sorry! Page not found</h4>
          <p>
            Oops! It seems like the page youre trying to access doesnt exist. If
            you believe theres an issue, feel free to report it, and well look
            into it.
          </p>
          <div className="btns">
            <NavLink to="/">return home</NavLink>
            <NavLink to="/contact">report problem</NavLink>
          </div>
        </div>
      </section>
    </>
  );
}

export default PageNotFound;
