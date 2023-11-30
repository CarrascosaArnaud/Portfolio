import React from "react";
import { useWindowSize } from "../hooks/useWindowSize";
import DesktopNavbar from "./DesktopNavbar";

const Navbar = () => {
  const { desktop, mobile } = useWindowSize();
  return <header>{desktop && <DesktopNavbar />}</header>;
};

export default Navbar;
