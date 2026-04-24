const AboutMe = ({
  wrapperClass = "about-wrapper about-1 style-2 about-page section-padding",
  img1 = "assets/img/about/09.jpg",
  img2 = "assets/img/about/10.png",
}) => {
  return (
    <section className={wrapperClass} id="certificaciones">
      <div className="container">
        <div className="row g-5">
          <div
            className="col-xxl-7 col-xl-6 col-lg-12 wow fadeInLeft"
            data-wow-delay="300ms"
          >
            <div className="about-images-2">
              <img
                className="shape-1"
                src="assets/img/about/shape-1.png"
                alt=""
              />
              <img
                className="shape-2"
                src="assets/img/shape/shape-1.png"
                alt=""
              />
              <div className="image-1">
                <img src={img1} alt="img" />
              </div>
              <div className="image-2">
                <img src={img2} alt="img" />
              </div>
            </div>
          </div>
          <div
            className="col-xxl-5 col-xl-6 col-lg-12 wow fadeInRight"
            data-wow-delay="300ms"
          >
            <div className="about-content mt-xxl-5 mt-xl-0 mt-5 ms-xxl-2">
              <div className="section-title">
                <div className="sub-title">
                  <span>QUIÉNES SOMOS</span>
                </div>
                <h2>
                  iTCS S.A. — 20 años de <br />
                  evolución tecnológica
                </h2>
              </div>
              <p>
                Fundada en 2005 en Asunción, nuestra misión es acercar
                tecnología de clase mundial a empresas paraguayas con
                ingenieros locales certificados. Certificados ISO 9001:2015 (calidad) e
                ISO 27001:2022 (seguridad de la información).
              </p>
              <ul>
                <li>
                  <i className="fas fa-check-circle" />
                  Hitos: partner Sophos, certificación ISO 27001, alianza Veeam
                </li>
                <li>
                  <i className="fas fa-check-circle" />
                  Oficinas en Barrio Virgen del Huerto, Asunción
                </li>
              </ul>
              <div className="feedback">
                <div className="infu">
                  <img src="assets/img/about/06.png" alt="" />
                  <h6>ISO 9001:2015 e ISO 27001:2022</h6>
                </div>
                <div className="infu">
                  <div className="icon-box d-flex align-items-center">
                    <div className="icon">
                      <i className="flaticon-cms" />
                    </div>
                    <h6>30+ profesionales</h6>
                  </div>
                  <p>
                    Ingenieros con certificaciones en Sophos, Veeam, HPE y
                    Microsoft, entre otras.
                  </p>
                </div>
              </div>
              <div className="about-infu">
                <a href="mailto:info@itcs.com.py" className="theme-btn">
                  Escribirnos
                </a>
                <div className="contact-us">
                  <img src="assets/img/about/03.png" alt="" />
                  <div className="text">
                    <span className="text-white opacity-50">
                      Teléfono
                    </span>
                    <h4 className="text-white">+595 21 728-8222</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AboutMe;
