import "./stories.scss";
import { AiFillPlusCircle } from "react-icons/ai";

const stories = [
  {
    id: 1,
    name: "John Doe",
    img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: 2,
    name: "John Doe",
    img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: 3,
    name: "John Doe",
    img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
  {
    id: 4,
    name: "John Doe",
    img: "https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
  },
];

const Stories = () => {
  return (
    <div className="stories">
      {stories.map((story) => {
        return (
          <div className="story" key={story.id}>
            <img src={story.img} alt="img-story" />
            <span className="name">{story.name}</span>
          </div>
        );
      })}
      <AiFillPlusCircle className="btn" />
    </div>
  );
};

export default Stories;
