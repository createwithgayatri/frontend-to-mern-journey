function Card({ song }) {
  return (
    <div className="card">
      <img
        src={song.image}
        alt={song.title}
      />

      <h3>{song.title}</h3>

      <p>{song.artist}</p>
    </div>
  );
}

export default Card;