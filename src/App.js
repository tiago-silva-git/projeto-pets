import { Routes, Route } from "react-router-dom";
import PublicPage from "./routes/PublicPage";
import Layout from "./components/Layout";
import ProtectedPage from "./routes/ProtectedPage";
import Login from "./routes/login";
import { AuthProvider, RequireAuth } from "./context/auth-context";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<PublicPage />} />
          <Route
            path="private-page"
            element={
              <RequireAuth>
                <ProtectedPage />
              </RequireAuth>
            }
          />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
