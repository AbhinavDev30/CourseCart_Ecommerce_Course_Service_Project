import { NavLink } from "react-router-dom";
import "./NavBar.css";
import { useAuth } from "../store/userAuthContext";

function NavBar() {
  const { isLoggedIn } = useAuth();
  const isAdmin = localStorage.getItem("isAdmin") === "true";
  console.log("This is from navigation", isAdmin);
  const isServicePage = location.pathname === "/service";
  const renderSearchInput = isServicePage;
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="logo-brand">
            <NavLink to="/" style={{ fontSize: "300%" }}>
              CourseCart
            </NavLink>
          </div>
          {/* <div>
            <input className="input" type="text" />
          </div> */}
          {/* Conditional rendering of search input based on the current page */}
          {renderSearchInput && (
            <div>
              <input
                className="input"
                type="text"
                placeholder="Search services..."
              />
            </div>
          )}
          <nav>
            <ul>
              <li>
                <NavLink to="/"> Home </NavLink>
              </li>
              <li>
                <NavLink to="/about"> About </NavLink>
              </li>
              <li>
                <NavLink to="/service"> Services </NavLink>
              </li>
              {isAdmin && (
                <>
                  <li>
                    <NavLink to="/addService"> Add Services </NavLink>
                  </li>
                  <li>
                    <NavLink to="/updDel">Update & Delete </NavLink>
                  </li>
                </>
              )}

              <li>
                <NavLink to="/contact"> Contact </NavLink>
              </li>
              {isLoggedIn ? (
                <li>
                  <NavLink to="/logout"> Logout </NavLink>
                </li>
              ) : (
                <>
                  <li>
                    <NavLink to="/register"> Register </NavLink>
                  </li>
                  <li>
                    <NavLink to="/login"> Login </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default NavBar;
