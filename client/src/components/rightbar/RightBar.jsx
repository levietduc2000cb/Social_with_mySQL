import "./rightbar.scss";

const RightBar = () => {
  return (
    <div className="right-bar">
      <ul className="menu">
        <li>Suggestion for you</li>
        <li className="user">
          <div className="user-info">
            <img
              src="https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2022/09/avatar-anime-1.jpg?ssl=1"
              alt="avatar"
            />
            <span>Jonh</span>
          </div>
          <div className="buttons">
            <button>Follow</button>
            <button>Un Follow</button>
          </div>
        </li>
      </ul>
      <ul className="menu">
        <li>Latest Activities</li>
        <li className="user">
          <div className="user-info">
            <img
              src="https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2022/09/avatar-anime-1.jpg?ssl=1"
              alt="avatar"
            />
            <span>Jonh</span>
          </div>
          <span>1 min go</span>
        </li>
      </ul>
      <ul className="menu">
        <li>Online Friends</li>
        <li className="user">
          <div className="user-info">
            <img
              src="https://i0.wp.com/thatnhucuocsong.com.vn/wp-content/uploads/2022/09/avatar-anime-1.jpg?ssl=1"
              alt="avatar"
            />
            <span>Jonh</span>
            <div className="online"></div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default RightBar;
