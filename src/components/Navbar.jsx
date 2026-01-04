export default function Navbar({ lang, setLang, dark, setDark }) {
  return (
    <nav className="navbar">
      <h1>Sri Bhavani Furnitures</h1>
      <div>
        <button onClick={() => setLang(lang === "en" ? "te" : "en")}>
          {lang === "en" ? "తెలుగు" : "English"}
        </button>
        <button onClick={() => setDark(!dark)}>
          {dark ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}
