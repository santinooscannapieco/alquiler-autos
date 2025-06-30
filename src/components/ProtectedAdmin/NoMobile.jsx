import { useEffect, useState } from "react";
import { Navigate } from "react-router";

export default function NoMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const width = window.innerWidth;
      setIsMobile(width >= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return <Navigate to="/administracion" />;
  }

  return (
    <div className="container mx-auto py-30">
      <p className=" text-center mt-20 text-blue-600 text-xl px-4">
        Esta sección no está disponible en dispositivos móviles.
      </p>
    </div>
  );
}
