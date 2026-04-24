import Link from "next/link";

const Blog = ({
  wrapperClass = "blog-wrapper blog-1 section-padding section-bg about-page-blog",
}) => {
  return (
    <section className={wrapperClass}>
      <div className="shape">
        <img
          className="shape-1"
          src="assets/img/shape/shape-5-black.png"
          alt=""
        />
        <img className="shape-2" src="assets/img/shape/shape-1.png" alt="" />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <div className="sub-title">
            <span>BLOG</span>
          </div>
          <h2>Artículos y notas</h2>
        </div>
        <p className="text-center mt-3">
          Tecnología, ciberseguridad, certificaciones e infraestructura en
          Paraguay.
        </p>
        <div className="blog-inner ">
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="single-blog-item">
                <div className="image">
                  <img src="assets/img/blog/01.jpg" alt="" />
                </div>
                <div className="content">
                  <ul>
                    <li>Ciberseguridad</li>
                    <li>
                      {" "}
                      <i className="fas fa-circle" />
                    </li>
                    <li>5 min de lectura</li>
                  </ul>
                  <h3>
                    <Link href="blogs-details">
                      ¿Por qué su empresa necesita XDR?
                    </Link>
                  </h3>
                  <p>
                    La nueva era de la ciberseguridad con Sophos: detección y
                    respuesta con IA en endpoints, redes y correo.
                  </p>
                  <Link href="blogs-details" className="link-btn">
                    Leer más <i className="far fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="single-blog-item">
                <div className="image">
                  <img src="assets/img/blog/blog-1.jpg" alt="" />
                </div>
                <div className="content">
                  <ul>
                    <li>Continuidad</li>
                    <li>
                      {" "}
                      <i className="fas fa-circle" />
                    </li>
                    <li>4 min de lectura</li>
                  </ul>
                  <h3>
                    <Link href="blogs-details">Backup inteligente con Veeam</Link>
                  </h3>
                  <p>
                    Protección ante ransomware y resguardo de datos críticos en
                    entornos físicos y cloud.
                  </p>
                  <Link href="blogs-details" className="link-btn">
                    Leer más <i className="far fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-12 wow fadeInUp"
              data-wow-delay="600ms"
            >
              <div className="single-blog-item">
                <div className="image">
                  <img src="assets/img/blog/details-3.jpg" alt="" />
                </div>
                <div className="content">
                  <ul>
                    <li>Networking</li>
                    <li>
                      {" "}
                      <i className="fas fa-circle" />
                    </li>
                    <li>4 min de lectura</li>
                  </ul>
                  <h3>
                    <Link href="blogs-details">Redes WiFi empresariales (Aruba)</Link>
                  </h3>
                  <p>
                    Por qué Aruba lidera en entornos de misión crítica:
                    hospitales, bancos y universidades.
                  </p>
                  <Link href="blogs-details" className="link-btn">
                    Leer más <i className="far fa-long-arrow-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Blog;
