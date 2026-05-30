import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import MusicPlayer from "./components/MusicPlayer";
import Footer from "./components/Footer";

import songs from "./data/songs";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />

      <main className="main">
        <Navbar />

        <section>
          <h2>Recently Played</h2>

          <div className="card-grid">
            {songs.map((song) => (
              <Card
                key={song.id}
                song={song}
              />
            ))}
          </div>
        </section>

        <section>
          <h2>Popular Albums</h2>

          <div className="card-grid">
            {songs.map((song) => (
              <Card
                key={song.id + 10}
                song={song}
              />
            ))}
          </div>
        </section>

        <Footer />
      </main>

      <MusicPlayer />
    </div>
  );
}

export default App;