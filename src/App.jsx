import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Landing, Home, Dashboard, Analytics, Admin } from "./pages";
import { ProtectedRoute } from "./components/ProtectedRoute";

const App = () => {
  const [user, setUser] = useState(null);

  const login = () => {
    /* request done */
    /* esto viene del backend */
    setUser({
      id: 1,
      name: "John",
      permissions: [
        "analize"
      ],
      roles: ["admin"]
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <BrowserRouter>
      <Navigation />

      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}

      <Routes>
        <Route index element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        {/* !! significa que lo convierte en un booleano */}
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        {/*  */}
        <Route
          path="/analytics"
          element={
            <ProtectedRoute
              isAllowed={!!user && user.permissions.includes("analize")}
              redirectTo="/home"
            >
              <Analytics />
            </ProtectedRoute>
          }
        />

        {/* role de admin */}
        <Route path="/admin" element={
        <ProtectedRoute isAllowed={!!user && user.roles.includes("admin")}
          redirectTo="/home"
        >
          <Admin />
        </ProtectedRoute>  
        } />
      </Routes>
    </BrowserRouter>
  );
};

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/landing">Landing</Link>
        </li>
        <li>
          <Link to="/home">home</Link>
        </li>
        <li>
          <Link to="/dashboard">dashboard</Link>
        </li>
        <li>
          <Link to="/analytics">Analytics</Link>
        </li>
        <li>
          <Link to="/admin">admin</Link>
        </li>
      </ul>
    </nav>
  );
}

export default App;
