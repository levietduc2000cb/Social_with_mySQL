import "./post.scss";
import { MdOutlineMoreHoriz } from "react-icons/md";

import {
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineComment,
  AiOutlineShareAlt,
} from "react-icons/ai";
import Comments from "../../../comments/Comments";
import { useState } from "react";
import moment from "moment";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getComments } from "../../../../api/comments";
import { addLike, deleteLike, getLikes } from "../../../../api/likes.api";
import { Link } from "react-router-dom";

const Post = ({ post }) => {
  const [openComments, setOpenComments] = useState(false);
  // Get comments
  const { data: comments } = useQuery({
    queryKey: ["comments", post.id],
    queryFn: () => getComments(post.id).then((res) => res.data),
  });
  // Get likes
  const { data: likes } = useQuery({
    queryKey: ["likes", post.id],
    queryFn: () => getLikes(post.id).then((res) => res.data),
  });

  const queryClient = useQueryClient();
  //Add like
  const mutationAddLike = useMutation(
    (content) => {
      return addLike(content);
    },
    {
      onSuccess: (data, error) => {
        queryClient.invalidateQueries(["likes", post.id]);
      },
    }
  );
  //Delete like
  const mutationDeleteLike = useMutation(
    (postId) => {
      return deleteLike(postId);
    },
    {
      onSuccess: (data, error) => {
        queryClient.invalidateQueries(["likes", post.id]);
      },
    }
  );
  //Handle like
  const handleLike = () => {
    if (likes.like) {
      mutationDeleteLike.mutate(post.id);
    } else {
      mutationAddLike.mutate({ postId: post.id });
    }
  };

  return (
    <div className="post">
      <div className="container">
        <div className="user">
          <div className="user-info">
            <img src={"/img/" + post.avatar} alt="avatar" loading="lazy" />
            <div className="detail">
              <Link to={`profile/${post.userId}`} className="name">
                {post.username}
              </Link>
              <span className="time">{moment(post.createAt).fromNow()}</span>
            </div>
          </div>
          <MdOutlineMoreHoriz className="icon-dot" />
        </div>
        <p className="content">{post.text}</p>
        {post.img && (
          <img src={"/img/" + post.img} alt="post-img" loading="lazy" />
        )}
        <div className="info">
          <div className="item" onClick={handleLike}>
            {likes?.like ? (
              <AiFillHeart className="icon" style={{ color: "red" }} />
            ) : (
              <AiOutlineHeart className="icon" />
            )}
            {likes?.result && likes.result.length} Likes
          </div>
          <div className="item" onClick={() => setOpenComments((pre) => !pre)}>
            <AiOutlineComment className="icon" />
            {comments && comments.length} Comments
          </div>
          <div className="item">
            <AiOutlineShareAlt className="icon" />
            Share
          </div>
        </div>
        {openComments && <Comments comments={comments} postId={post.id} />}
      </div>
    </div>
  );
};

export default Post;
