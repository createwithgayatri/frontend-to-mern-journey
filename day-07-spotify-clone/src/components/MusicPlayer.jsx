import {
  FaStepBackward,
  FaPlayCircle,
  FaStepForward,
} from "react-icons/fa";

function MusicPlayer() {
  return (
    <div className="player">
      <div className="song-info">
        <h4>Summer Vibes</h4>
        <p>DJ Alex</p>
      </div>

      <div className="controls">
        <FaStepBackward />
        <FaPlayCircle />
        <FaStepForward />
      </div>
    </div>
  );
}

export default MusicPlayer;