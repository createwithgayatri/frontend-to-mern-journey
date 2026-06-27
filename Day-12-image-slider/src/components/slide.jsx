const Slide = ({ image, isActive }) => {
  return (
    <div className={`slide ${isActive ? "active" : ""}`}>
      <img src={image} alt="slide" />
    </div>
  );
};

export default Slide;