import "./navbar.scss";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineMail,
  AiOutlineBell,
} from "react-icons/ai";

import { MdOutlineLightMode, MdLightMode } from "react-icons/md";
import { IoGridOutline, IoSearch } from "react-icons/io5";
import { useContext } from "react";
import { DarkModeContex } from "../../context/DarkModeContext";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router-dom";

const NavBar = () => {
  const { darkMode, toogle } = useContext(DarkModeContex);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="nav-bar">
      <div className="left">
        <Link to={"/"} className="title">
          wibusocial
        </Link>
        <AiOutlineHome className="icon" />
        {darkMode ? (
          <MdOutlineLightMode className="icon" onClick={toogle} />
        ) : (
          <MdLightMode className="icon" onClick={toogle} />
        )}

        <IoGridOutline className="icon" />
        <div className="search">
          <IoSearch className="icon" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right">
        <AiOutlineUser className="icon" />
        <AiOutlineMail className="icon" />
        <AiOutlineBell className="icon" />
        <div className="user">
          <img src={currentUser.avatar} alt="avatar" />
          <span>{currentUser.username}</span>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
