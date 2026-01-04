export default function Home({ lang }) {
  const text = {
    en: {
      tagline: "25 Years of Trust in Comfort & Quality",
      subtitle: "Custom & Ready-Made Sofas Available",
    },
    te: {
      tagline: "25 సంవత్సరాల నమ్మకం & నాణ్యత",
      subtitle: "కస్టమ్ & రెడీ మేడ్ సోఫాలు అందుబాటులో ఉన్నాయి",
    },
  };

  return (
    <section className="hero">
      <h2>{text[lang].tagline}</h2>
      <p>{text[lang].subtitle}</p>
      <div className="actions">
        <a href="tel:9985362549">📞 Call Now</a>
        <a href="https://wa.me/919985362549">💬 WhatsApp</a>
      </div>
    </section>
  );
}
