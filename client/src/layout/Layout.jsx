import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import LeftBar from "../components/leftbar/LeftBar";
import NavBar from "../components/navbar/NavBar";
import RightBar from "../components/rightbar/RightBar";
import { DarkModeContex } from "../context/DarkModeContext";
import "./layout.scss";

const Layout = () => {
  const { darkMode } = useContext(DarkModeContex);

  return (
    <div className={darkMode ? "theme-dark" : "theme-light"}>
      <NavBar />
      <main style={{ display: "flex" }}>
        <LeftBar />
        <div style={{ flex: 6 }}>
          <Outlet />
        </div>
        <RightBar />
      </main>
    </div>
  );
};

export default Layout;
