import "./profile.scss";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsLinkedin,
  BsPinterest,
  BsThreeDotsVertical,
} from "react-icons/bs";
import { ImLocation, ImEarth } from "react-icons/im";
import { FiMail } from "react-icons/fi";
import Posts from "../../components/posts/Posts";
import { useParams } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { getUser } from "../../api/user.api";
import { addFollow, checkFollow, deleteFollow } from "../../api/follow.api";
import { useEffect, useState } from "react";
import UpdateProfile from "../../components/updateprofile/UpdateProfile";

const Profile = () => {
  const params = useParams();
  const { id } = params;
  const queryClient = useQueryClient();
  const [openModal, setOpenModal] = useState(false);

  const { data: user } = useQuery({
    queryKey: ["user", id],
    queryFn: () => getUser(id).then((res) => res.data),
  });

  const { data: followed } = useQuery({
    queryKey: ["follow", id],
    queryFn: () => checkFollow(id).then((res) => res.data),
  });

  const mutationAddFollow = useMutation(
    (content) => {
      return addFollow(content);
    },
    {
      onSuccess: (data, error) => {
        queryClient.invalidateQueries(["follow", id]);
      },
    }
  );

  const mutationUnFollow = useMutation(
    (content) => {
      return deleteFollow(content);
    },
    {
      onSuccess: (data, error) => {
        queryClient.invalidateQueries(["follow", id]);
      },
    }
  );

  const handleFollow = () => {
    if (followed) {
      mutationUnFollow.mutate(id);
    } else {
      mutationAddFollow.mutate({ userIdFollow: id });
    }
  };

  const handleOpenModal = () => {
    setOpenModal((pre) => !pre);
  };

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="profile">
      <div className="img_wrapper">
        {user?.result && (
          <>
            <img
              src={user.result.avatarBackground}
              alt="background"
              className="background"
            />
            <img
              src={"/img/" + user.result.avatar}
              alt="avatar"
              className="avatar"
            />
          </>
        )}
      </div>
      <div className="container-profile">
        <div className="user-profile">
          <h1>{user?.result.username}</h1>
          <div className="user-profile-intro">
            <div className="left">
              <BsFacebook className="icon" />
              <BsInstagram className="icon" />
              <BsTwitter className="icon" />
              <BsLinkedin className="icon" />
              <BsPinterest className="icon" />
            </div>
            <div className="center">
              {user?.result.location && (
                <div className="item-profile">
                  <ImLocation className="icon" />
                  <span>{user?.result.location}</span>
                </div>
              )}
              {user?.result.website && (
                <div className="item-profile">
                  <ImEarth className="icon" />
                  <span>{user?.result.website}</span>
                </div>
              )}
            </div>
            <div className="right">
              <FiMail className="icon" />
              <BsThreeDotsVertical className="icon" />
            </div>
          </div>
          {user?.myUser ? (
            <button onClick={handleOpenModal}>Update</button>
          ) : (
            <button
              onClick={handleFollow}
              style={{ backgroundColor: `${followed ? "red" : "blue"}` }}
            >
              {followed ? "Followed" : "Follow"}
            </button>
          )}
        </div>
        <Posts userId={id} />
      </div>
      {openModal && (
        <UpdateProfile
          handleOpenModal={handleOpenModal}
          user={user.result}
          userId={id}
        />
      )}
    </div>
  );
};

export default Profile;
