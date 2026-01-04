import sofa1 from "../assets/products/sofa1.jpg";
import sofa2 from "../assets/products/sofa2.jpg";
import lshape1 from "../assets/products/lshape1.jpg";
import recliner1 from "../assets/products/recliner1.jpg";
import bed1 from "../assets/products/bed1.jpg";

export default function Products() {
  const products = [
    { name: "3 Seater Sofa", img: sofa1 },
    { name: "L-Shape Sofa", img: lshape1 },
    { name: "Recliner", img: recliner1 },
    { name: "Sofa Cum Bed", img: sofa2 },
    { name: "Bed (Limited)", img: bed1 },
  ];

  return (
    <section className="section">
      <h2>Our Products</h2>
      <p className="sub-text">Price based on model & customization</p>

      <div className="gallery">
        {products.map((p, index) => (
          <div className="product-card" key={index}>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
            <a
              href="https://wa.me/919985362549"
              target="_blank"
              rel="noreferrer"
            >
              Enquire on WhatsApp
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
