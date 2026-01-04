export default function About({ lang }) {
  return (
    <section className="section">
      <h2>{lang === "en" ? "About Us" : "మా గురించి"}</h2>
      <p>
        {lang === "en"
          ? "Sri Bhavani Furnitures is a family-run business with 25 years of experience in Vijayawada."
          : "శ్రీ భవాని ఫర్నిచర్స్ విజయవాడలో 25 సంవత్సరాల అనుభవంతో పనిచేస్తోంది."}
      </p>
    </section>
  );
}
