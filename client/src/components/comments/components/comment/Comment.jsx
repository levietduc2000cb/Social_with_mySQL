import "./comment.scss";
import moment from "moment";

const Comment = ({ comment }) => {
  return (
    <div className="comment">
      <img src={comment.avatar} alt="avatar" />
      <div className="info">
        <span>{comment.username}</span>
        <p>{comment.textComment}</p>
      </div>
      <span className="date">{moment(comment.createAt).fromNow()}</span>
    </div>
  );
};

export default Comment;
