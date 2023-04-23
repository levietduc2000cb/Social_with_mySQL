import "./updateprofile.scss";
import { BsImageFill } from "react-icons/bs";
import { useRef, useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../../api/user.api";
import { uploadFile } from "../../api/upload.api";

const UpdateProfile = ({ user, userId, handleOpenModal }) => {
  const [userUpdate, setUserUpdate] = useState({
    name: user.name || "",
    location: user.location || "",
    website: user.website || "",
  });
  const avatarFile = useRef(null);
  const [avatar, setAvatar] = useState("/img/" + user.avatar);
  const queryClient = useQueryClient();

  const handleChange = (e) => {
    setUserUpdate((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const mutationUpdateUser = useMutation(
    (content) => {
      return updateUser(content);
    },
    {
      onSuccess: (data, error) => {
        queryClient.invalidateQueries(["user", userId]);
      },
    }
  );

  const handleUpdate = async (e) => {
    e.preventDefault();
    let imgData = "";
    if (avatarFile.current) {
      const data = await uploadFile(avatarFile.current);
      imgData = data.data.file;
    }
    let body = {
      ...userUpdate,
      avatar: imgData,
    };
    mutationUpdateUser.mutate(body);
    avatarFile.current = null;
    handleOpenModal();
  };

  return (
    <div className="update-profile">
      <form>
        <div className="left">
          <img
            src="https://img5.goodfon.com/wallpaper/nbig/9/21/girl-anime-wallpapers-anime-girl.jpg"
            alt="avatar-background"
          />
          <div className="avatar">
            <img src={avatar} alt="avatar"></img>
            <input
              type="file"
              hidden
              id="file-avatar"
              onChange={(e) => {
                avatarFile.current = e.target.files[0];
                setAvatar(URL.createObjectURL(e.target.files[0]));
              }}
            />
            <label className="update-file" htmlFor="file-avatar">
              <BsImageFill className="icon-image" />
            </label>
          </div>
        </div>
        <div className="right">
          <h2>Profile</h2>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="User name"
              name="name"
              value={userUpdate.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              placeholder="User location"
              name="location"
              value={userUpdate.location}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="website">Website</label>
            <input
              type="text"
              id="website"
              placeholder="User website"
              name="website"
              value={userUpdate.website}
              onChange={handleChange}
            />
          </div>
          <div className="btn-wrapper">
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleOpenModal}>Cancel</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
