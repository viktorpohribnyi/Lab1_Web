import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { ThemeContext } from "../context/ThemeContext";

const Profile = () => {
  const { user, setUser } = useContext(UserContext);
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme === "light" ? "#fff" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
      <h2>Profile</h2>
      <p>Current user: {user}</p>
      <button onClick={() => setUser("User2")}>Change User</button>
      <br />
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>Toggle Theme</button>
    </div>
  );
};

export default Profile;
