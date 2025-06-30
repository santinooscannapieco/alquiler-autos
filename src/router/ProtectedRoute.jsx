import { useEffect, useState } from "react";
import { Navigate } from "react-router";

export const ProtectedRoute = ({ user, children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return <Navigate to="/no-mobile" />;
  }

  /* //Bloqueo si el rol es "USER"
  if (!user || user.role === "USER") {
    return <Navigate to="/no-access" />;
  } */

  return children;
};
