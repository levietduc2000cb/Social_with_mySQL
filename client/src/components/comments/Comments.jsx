import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { addComment } from "../../api/comments";
import "./comments.scss";
import Comment from "./components/comment/Comment";

const Comments = ({ comments, postId }) => {
  const [comment, setComment] = useState("");

  const queryClient = useQueryClient();
  const mutation = useMutation(
    (content) => {
      return addComment(content);
    },
    {
      onSuccess: (data, error) => {
        queryClient.invalidateQueries(["comments", postId]);
      },
    }
  );

  const handleClick = (e) => {
    const body = {
      comment,
      postId,
    };
    mutation.mutate(body);
    setComment("");
  };

  return (
    <div className="comments">
      <div className="write">
        <img
          src="https://printgo.vn/uploads/media/798682/anh-anime-nam-buon-9_1637288428.jpg"
          alt="avatar"
        />
        <input
          type="text"
          placeholder="Write a comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button onClick={handleClick}>Send</button>
      </div>
      {comments?.map((comment) => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </div>
  );
};

export default Comments;
