import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectUser } from "./redux/features/counterSlice";

function Login() {
  const [username, setUsername] = useState("");
  // để sử dụng, tương tác với redux
  const dispatch = useDispatch();

  // để lấy ra data từ redux
  const user = useSelector(selectUser);

  const handleLogin = () => {
    const userData = { username };
    dispatch(login(userData));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        {user ? (
          <div>
            <h2>Welcome, {user.username}</h2>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <button onClick={handleLogin}>Login</button>
          </div>
        )}
      </div>
    </>
  );
}

export default Login;
