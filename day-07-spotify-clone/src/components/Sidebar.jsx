import { FaHome, FaSearch, FaBook } from "react-icons/fa";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <h1>Spotify</h1>
      </div>

      <ul>
        <li>
          <FaHome /> Home
        </li>

        <li>
          <FaSearch /> Search
        </li>

        <li>
          <FaBook /> Your Library
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;