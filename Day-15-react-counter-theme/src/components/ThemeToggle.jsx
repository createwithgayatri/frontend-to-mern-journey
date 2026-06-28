function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <div className="toggle">
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>
    </div>
  );
}

export default ThemeToggle;