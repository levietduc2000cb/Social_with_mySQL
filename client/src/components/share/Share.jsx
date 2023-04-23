import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Friend from "../../assets/icons/friend.png";
import Image from "../../assets/icons/img.png";
import Map from "../../assets/icons/map.png";
import "./share.scss";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addPost } from "../../api/posts.api";
import { uploadFile } from "../../api/upload.api";

const Share = () => {
  const { currentUser } = useContext(AuthContext);
  const [text, setText] = useState("");
  const [fileImg, setFileImg] = useState(null);

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (content) => {
      return addPost(content);
    },
    {
      onSuccess: (data, error) => {
        queryClient.invalidateQueries("posts");
      },
    }
  );

  const handleSubmit = async (e) => {
    let imgData = "";
    if (fileImg) {
      const data = await uploadFile(fileImg);
      imgData = data.data.file;
    }
    const newPost = {
      text,
      img: imgData,
    };
    mutation.mutate(newPost);
    setText("");
    setFileImg(null);
  };

  return (
    <div className="share">
      <div className="container">
        <div className="top">
          <div className="left">
            <img src={currentUser.avatar} alt="" />
            <input
              type="text"
              placeholder={`What's on your mind ${currentUser.username}?`}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>
        {fileImg && <img src={URL.createObjectURL(fileImg)} alt="img" />}
        <hr />
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              hidden
              onChange={(e) => setFileImg(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="item">
                <img src={Image} alt="icon" />
                <span>Add Image</span>
              </div>
            </label>
            <div className="item">
              <img src={Map} alt="icon" />
              <span>Add Place</span>
            </div>
            <div className="item">
              <img src={Friend} alt="icon" />
              <span>Tag Friends</span>
            </div>
          </div>
          <div className="right">
            <button type="button" onClick={handleSubmit}>
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
