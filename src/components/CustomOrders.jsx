export default function CustomOrders({ lang }) {
  return (
    <section className="section alt">
      <h2>{lang === "en" ? "Custom Orders" : "కస్టమ్ ఆర్డర్లు"}</h2>
      <p>
        {lang === "en"
          ? "We provide custom sofas based on size, fabric, color, and comfort."
          : "మీ అవసరాలకు అనుగుణంగా సైజ్, ఫ్యాబ్రిక్ మరియు రంగులతో కస్టమ్ సోఫాలు తయారు చేస్తాము."}
      </p>
    </section>
  );
}
