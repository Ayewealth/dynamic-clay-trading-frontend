import { createContext, useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();
export default AuthContext;

export const AuthProvider = ({ children }) => {
  const [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? JSON.parse(localStorage.getItem("authTokens"))
      : null
  );
  const [user, setUser] = useState(() =>
    localStorage.getItem("authTokens")
      ? jwtDecode(localStorage.getItem("authTokens"))
      : null
  );
  const [userProfile, setUserProfile] = useState();
  const [loading, setLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("success");

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Admin
  const [allUsers, setAllUsers] = useState([]);
  const [allTransactions, setAllTransactions] = useState([]);
  const [allinvestment, setAllInvestment] = useState([]);

  const navigate = useNavigate();

  const registerUser = async (e) => {
    setLoading(true);
    try {
      e.preventDefault();
      let response = await fetch(
        "https://dynamic-clay-trading.onrender.com/api/signup/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            full_name: fullname,
            email: email,
            password: password,
          }),
        }
      );
      // const data = await response.json();

      if (response.status === 201) {
        setShowAlert(true);
        setAlertMessage("Account created successfully!");
        setAlertSeverity("success");
        navigate("/login");
      } else {
        setShowAlert(true);
        setAlertMessage("Request Failed something happened");
        setAlertSeverity("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const loginUser = async (e) => {
    setLoading(true);
    try {
      e.preventDefault();
      let response = await fetch(
        "https://dynamic-clay-trading.onrender.com/api/signin/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
      const data = await response.json();
      console.log(data);

      if (response.status === 200) {
        setAuthTokens(data);
        setUser(jwtDecode(data.access));
        localStorage.setItem("authTokens", JSON.stringify(data));
        setShowAlert(true);
        setAlertMessage("Login Successful");
        setAlertSeverity("success");

        userDetails();
        if (data.is_superuser) {
          navigate("/admin/users");
        } else {
          navigate("/dashboard/home");
        }
      } else {
        setShowAlert(true);
        setAlertMessage("Failed to login user");
        setAlertSeverity("error");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const userDetails = async () => {
    try {
      const response = await fetch(
        `https://dynamic-clay-trading.onrender.com/api/user_profile/${authTokens.user_id}/`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      if (response.status === 200) {
        setUserProfile(data);
      } else {
        console.error("Failed to fetch user details:", response.statusText);
      }
    } catch (error) {}
  };

  const allUsersDetails = async () => {
    try {
      const response = await fetch(
        "https://dynamic-clay-trading.onrender.com/api/user_profile/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (response.status === 200) {
        setAllUsers(data);
      } else {
        console.error("Failed to fetch user details:", response.statusText);
      }
    } catch (error) {}
  };

  const allUsersTransactions = async () => {
    try {
      const response = await fetch(
        "https://dynamic-clay-trading.onrender.com/api/transaction/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authTokens.access}`,
          },
        }
      );

      const data = await response.json();

      if (response.status === 200) {
        setAllTransactions(data);
      } else {
        console.error("Failed to fetch user details:", response.statusText);
      }
    } catch (error) {}
  };

  const allInvestment = async () => {
    try {
      const response = await fetch(
        "https://dynamic-clay-trading.onrender.com/api/investment/",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      if (response.status === 200) {
        setAllInvestment(data);
      } else {
        console.error(
          "Failed to fetch investment details:",
          response.statusText
        );
      }
    } catch (error) {}
  };

  const logoutUser = () => {
    setAuthTokens(null);
    setUser(null);
    localStorage.removeItem("authTokens");
    navigate("/");
  };

  const updateToken = async () => {
    let response = await fetch(
      "https://dynamic-clay-trading.onrender.com/api/token/refresh/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh: authTokens?.refresh }),
      }
    );
    const data = await response.json();

    if (response.status === 200) {
      setAuthTokens(data);
      setUser(jwtDecode(data.access));
      localStorage.setItem("authTokens", JSON.stringify(data));
    } else {
      logoutUser();
    }
  };

  useEffect(() => {
    const mins = 1000 * 60 * 10;
    const interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, mins);
    if (user) {
      userDetails();
    }
    return () => clearInterval(interval);
  }, [authTokens, userDetails]);

  const contextData = {
    authTokens,
    user,
    registerUser,
    setFullname,
    setEmail,
    setPassword,
    loading,
    loginUser,
    logoutUser,
    userProfile,
    allUsers,
    allTransactions,
    allUsersDetails,
    allUsersTransactions,
    allInvestment,
    allinvestment,

    setShowAlert,
    setAlertMessage,
    setAlertSeverity,
    showAlert,
    alertMessage,
    alertSeverity,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
