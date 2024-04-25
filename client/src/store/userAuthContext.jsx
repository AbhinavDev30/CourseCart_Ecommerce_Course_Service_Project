import { createContext, useState } from "react";
import { useContext } from "react";

export const AuthContext = createContext();

//Auth Provider :--es function ke through ham apne data ko pass karne wale hai.

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  // const [user, setUser] = useState("");
  const storetokenInLS = (servertoken) => {
    setToken(servertoken);
    return localStorage.setItem("token", servertoken);
  };
  //Tackel logout functionality
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  //Logout ,Register/Login
  //Agar token nahi hai tho false ho jayega nahi tho true.
  let isLoggedIn = !!token;

  //   const contextValue = {
  //     storetokenInLS,
  //     LogoutUser,
  //     isLoggedIn,
  //   };

  // const userAuthentication = async () => {
  //   try {
  //     const response = await fetch("http://localhost:5000/api/user/user", {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     // eslint-disable-next-line no-empty
  //     if (response.ok) {
  //       const data = await response.json();
  //       setUser(data.userData);
  //     }
  //   } catch (error) {
  //     console.error("Error using fetching data");
  //   }
  // };
  // useEffect(() => {
  //   userAuthentication();
  // }, []);

  return (
    <AuthContext.Provider
      value={{ storetokenInLS, LogoutUser, isLoggedIn /*user */ }}
    >
      {children}
    </AuthContext.Provider>
  );
};

//Contact jwt Authenticati(To get currently login user data)

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authContextValue;
};
