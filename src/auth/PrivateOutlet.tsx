// import * as React from "react";
// import { Navigate, Outlet } from "react-router-dom";
// import { useAppSelector } from "../redux/hook";

// export default function PrivateOutlet: React.FC({children}:{children:Element}) {
//   const { isLoggedIn } = useAppSelector((state) => state.auth);

//   return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
// }

import * as React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../redux/hook";

const PrivateOutlet: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  console.log(children);
  const { isLoggedIn } = useAppSelector((state) => state.auth);

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateOutlet;
