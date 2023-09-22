import WowFace from "./assets/wow-face.png";
import HeartIcon from "./assets/heart.png";
import LikeIcon from "./assets/like.png";
import LaughFace from "./assets/laugh-face.png";
import SmileFace from "./assets/smile-face.png";
import "./styles.css";

const Icon = ({ src, alt, ...rest }) => {
  return (
    <button className="icon-btn">
      <span className="icon-container">
        <img src={src} alt={alt} className="icon" draggable="false" />
      </span>
    </button>
  );
};

const Icons = () => {
  return (
    <div className="icon-btn-list">
      <Icon src={LikeIcon} alt="LikeIcon" />
      <Icon src={HeartIcon} alt="HeartIcon" />
      <Icon src={LaughFace} alt="LaughFace" />
      <Icon src={WowFace} alt="WowFace" />
      <Icon src={SmileFace} alt="SmileFace" />
    </div>
  );
};

export default function App() {
  return (
    <div className="App">
      <Icons />
    </div>
  );
}
