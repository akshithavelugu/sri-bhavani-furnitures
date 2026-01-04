export default function Contact({ lang }) {
  return (
    <section className="section alt">
      <h2>{lang === "en" ? "Contact Us" : "సంప్రదించండి"}</h2>

      <div className="contact-info">
        <p>📞 <a href="tel:9985362549">9985362549</a></p>
        <p>
          📍 Nunna Mango Market, Vijayawada
        </p>
        <p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Nunna+Mango+Market+Vijayawada"
            target="_blank"
            rel="noreferrer"
          >
            Open in Google Maps
          </a>
        </p>
      </div>

      {/* GOOGLE MAP */}
      <div className="map-container">
        <iframe
          title="Sri Bhavani Furnitures Location"
          src="https://www.google.com/maps?q=Nunna+Mango+Market+Vijayawada&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
}
