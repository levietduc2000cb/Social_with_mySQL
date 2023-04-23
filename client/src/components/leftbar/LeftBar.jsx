import { useContext } from "react";
import Friends from "../../assets/icons/1.png";
import Messages from "../../assets/icons/10.png";
import Tutorials from "../../assets/icons/11.png";
import Courses from "../../assets/icons/12.png";
import Fund from "../../assets/icons/13.png";
import Groups from "../../assets/icons/2.png";
import Market from "../../assets/icons/3.png";
import Watch from "../../assets/icons/4.png";
import Memories from "../../assets/icons/5.png";
import Events from "../../assets/icons/6.png";
import Gaming from "../../assets/icons/7.png";
import Gallery from "../../assets/icons/8.png";
import Videos from "../../assets/icons/9.png";
import { AuthContext } from "../../context/AuthContext";
import "./leftbar.scss";

const LeftBar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="left-bar">
      <ul className="menu">
        <li className="user">
          <img src={currentUser.avatar} alt="avatar" />
          <span>{currentUser.username}</span>
        </li>
        <li className="item">
          <img src={Friends} alt="icon" />
          <span>Friends</span>
        </li>
        <li>
          <img src={Groups} alt="icon" />
          <span>Groups</span>
        </li>
        <li>
          <img src={Market} alt="icon" />
          <span>Marketplace</span>
        </li>
        <li>
          <img src={Watch} alt="icon" />
          <span>Watch</span>
        </li>
        <li>
          <img src={Memories} alt="icon" />
          <span>Memories</span>
        </li>
      </ul>
      <hr />
      <ul className="menu">
        <li>Your shortcuts</li>
        <li>
          <img src={Events} alt="icon" />
          <span>Events</span>
        </li>
        <li>
          <img src={Gaming} alt="icon" />
          <span>Gaming</span>
        </li>
        <li>
          <img src={Gallery} alt="icon" />
          <span>Gallery</span>
        </li>
        <li>
          <img src={Videos} alt="icon" />
          <span>Videos</span>
        </li>
        <li>
          <img src={Messages} alt="icon" />
          <span>Messages</span>
        </li>
      </ul>
      <hr />
      <ul className="menu">
        <li>Others</li>
        <li>
          <img src={Fund} alt="icon" />
          <span>Fundraiser</span>
        </li>
        <li>
          <img src={Tutorials} alt="icon" />
          <span>Tutorials</span>
        </li>
        <li>
          {" "}
          <img src={Courses} alt="icon" />
          <span>Courses</span>
        </li>
      </ul>
    </div>
  );
};

export default LeftBar;
