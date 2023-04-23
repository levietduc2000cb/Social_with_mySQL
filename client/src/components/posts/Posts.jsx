import "./posts.scss";
import Post from "./components/Post/Post";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../../api/posts.api";
import loadingPosts from "../../assets/gif/loading_posts.gif";

const Posts = ({ userId }) => {
  //Get posts
  const { isLoading, error, data } = useQuery({
    queryKey: ["posts"],
    queryFn: () => getPosts(userId).then((res) => res.data),
  });

  return (
    <div className="posts">
      {isLoading ? (
        <div style={{ textAlign: "center" }}>
          <img
            src={loadingPosts}
            alt="loading-posts"
            style={{ width: "30%" }}
          />
        </div>
      ) : error ? (
        alert("Something went wrong")
      ) : data ? (
        data?.map((post) => <Post post={post} key={post.id} />)
      ) : (
        <p className="posts_no-post">No post</p>
      )}
    </div>
  );
};

export default Posts;
