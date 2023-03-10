import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
export const User = createContext();

const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const userCheck = async () => {
    if (localStorage.getItem("token")) {
      setLoggedIn(true);
      navigate(
        "/" ||
          "/entertainment" ||
          "/lifeStyle" ||
          "/sports" ||
          "/video" ||
          "news"
      );
    } else {
      navigate("/register" || "/login");
    }
  };
  useEffect(() => {
    userCheck();
  }, []);
  return (
    <User.Provider value={{ loggedIn, setLoggedIn }}>{children}</User.Provider>
  );
};

export default UserProvider;
