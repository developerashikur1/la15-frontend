/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../redux/hook";

const PrivateOutlet: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  return isLoggedIn ? (
    // Render the protected content when the user is authenticated
    <>{children}</>
  ) : (
    // Redirect to the login page if the user is not authenticated
    <Navigate to="/login" />
  );
};

export default PrivateOutlet;
