import {
  Navigate,
  useLocation
} from "react-router-dom";

import { useAuth } from "../../context/AuthContext";

function ProtectedRoute({
  children,
  role
}) {

  const { user } = useAuth();

  const location = useLocation();

  // Chưa đăng nhập
  if (!user) {

    return (
      <Navigate
        to="/login"
        state={{
          from: location.pathname
        }}
        replace
      />
    );
  }

  // Có yêu cầu role nhưng role không đúng
  if (
    role &&
    user.role !== role
  ) {

    // Admin
    if (user.role === "ADMIN") {
      return (
        <Navigate
          to="/admin"
          replace
        />
      );
    }

    // Customer
    return (
      <Navigate
        to="/"
        replace
      />
    );
  }

  return children;
}

export default ProtectedRoute;