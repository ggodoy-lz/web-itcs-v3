import ItcsThemeLogo from "@/components/ItcsThemeLogo";
import Link from "next/link";
import { Fragment } from "react";

const Footer = ({ footer, cta }) => {
  switch (footer) {
    case 1:
      return <Footer1 />;
    case 2:
      return <Footer2 />;
    case 3:
      return <Footer3 />;
    case 4:
      return <Footer4 cta={cta} />;
    default:
      return <Footer4 cta={cta} />;
  }
};
export default Footer;

const Footer1 = () => {
  return (
    <footer className="footer-wrapper ">
      <div className="container">
        <div className="footer-widgets-1 section-padding ">
          <div className="row g-5">
            <div
              className="col-xl-4 col-lg-6 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="single-footer-widget me-xxl-5 pe-xxl-4">
                <div className="widget-head">
                  <Link href="/" className="d-inline-block">
                    <ItcsThemeLogo variant="adaptive" withLink={false} />
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    Information Technology Consulting and Support S.A. (iTCS
                    S.A.) — Empresa líder en soluciones tecnológicas en
                    Paraguay, con más de 20 años de trayectoria.
                  </p>
                  <h5>Newsletter</h5>
                  <div className="footer-input border-radius-none">
                    <input
                      type="email"
                      id="email2"
                      placeholder="Su correo electrónico"
                    />
                    <button
                      className="newsletter-btn border-radius-none"
                      type="submit"
                    >
                      <i className="fab fa-telegram-plane" />
                    </button>
                  </div>
                  <div className="social-icon d-flex align-items-center">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-dribbble" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-2 col-lg-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="single-footer-widget ms-xxl-2">
                <div className="widget-head">
                  <h4>Enlaces útiles</h4>
                </div>
                <ul className="list-area">
                  <li>
                    <Link href="about">
                      <i className="fas fa-circle" />
                      Quiénes somos
                    </Link>
                  </li>
                  <li>
                    <Link href="partners">
                      <i className="fas fa-circle" />
                      Partners
                    </Link>
                  </li>
                  <li>
                    <Link href="services">
                      <i className="fas fa-circle" />
                      Servicios
                    </Link>
                  </li>
                  <li>
                    <Link href="blog">
                      <i className="fas fa-circle" />
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="contact">
                      <i className="fas fa-circle" />
                      Contacto
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 wow fadeInUp"
              data-wow-delay="600ms"
            >
              <div className="single-footer-widget ms-xxl-4 ps-xxl-3">
                <div className="widget-head">
                  <h4>Servicios</h4>
                </div>
                <ul className="list-area">
                  <li>
                    <Link href="services">
                      <i className="fas fa-circle" />
                      Infraestructura &amp; Productividad
                    </Link>
                  </li>
                  <li>
                    <Link href="services">
                      <i className="fas fa-circle" />
                      Ciberseguridad
                    </Link>
                  </li>
                  <li>
                    <Link href="services">
                      <i className="fas fa-circle" />
                      Networking &amp; Telecomunicaciones
                    </Link>
                  </li>
                  <li>
                    <Link href="services">
                      <i className="fas fa-circle" />
                      Base de Datos
                    </Link>
                  </li>
                  <li>
                    <Link href="services">
                      <i className="fas fa-circle" />
                      Desarrollo de Sistemas
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 wow fadeInUp"
              data-wow-delay="800ms"
            >
              <div className="single-footer-widget ms-xxl-3">
                <div className="widget-head">
                  <h4>Contacto</h4>
                </div>
                <div className="footer-content">
                  <div className="contact-info-area">
                    <div className="contact">
                      <a href="mailto:info@itcs.com.py">
                        <i className="flaticon-email" />
                      </a>
                      <div className="contact-infu">
                        <span>Correo:</span>
                        <h5>info@itcs.com.py</h5>
                      </div>
                    </div>
                    <div className="contact">
                      <a
                        href="https://maps.google.com/?q=Asunción+Paraguay"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fal fa-map-marker-alt" />
                      </a>
                      <div className="contact-infu">
                        <span>Dirección:</span>
                        <h5 className="text-lowercase">
                          Barrio Virgen del Huerto, Asunción, Paraguay
                        </h5>
                      </div>
                    </div>
                    <div className="contact">
                      <a href="tel:+595217288222">
                        <i className="fal fa-phone-alt" />
                      </a>
                      <div className="contact-infu">
                        <span>Teléfono:</span>
                        <h5>+595 21 728-8222</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom section-bg-2">
        <div className="container">
          <div className="footer-bottom-wrapper">
            <p className="text-center">
              © {new Date().getFullYear()} iTCS S.A. — Política de Calidad /
              Política de Seguridad
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Footer2 = () => {
  return (
    <footer className="footer-wrapper">
      <FooterContent logo="assets/img/logo/logo-itcs-blanco-300x122.png.webp" />
    </footer>
  );
};
const Footer3 = () => {
  return (
    <footer className="footer-wrapper section-padding pb-0">
      <FooterContent layout="style-3 style-2" />
    </footer>
  );
};

const Footer4 = ({ cta }) => {
  return (
    <Fragment>
      {cta && (
        <section className="cta-wrapper cta-2 style-3 section-padding pb-0 section-bg">
          <div className="container">
            <div className="cta-inner wow fadeInUp" data-wow-delay="200ms">
              <div className="icon">
                <i className="flaticon-customer-support" />
              </div>
              <div className="title">
                <h3 className="split-text right">
                  ¿Necesita asesoría en servicios y productos de TI?
                </h3>
                <p>Contacte a nuestro equipo de ingenieros certificados.</p>
              </div>
              <Link href="/contact" className="theme-btn white-btn">
                Agendar contacto
              </Link>
            </div>
          </div>
        </section>
      )}
      <footer className="footer-wrapper section-bg-2 section-padding pb-0">
        <div className="marquee-section mt-5 pt-5">
          <div className="mycustom-marque">
            <div className="scrolling-wrap">
              <div className="comm">
                {Array(4)
                  .fill()
                  .map((_, index) => (
                    <Fragment key={index}>
                      <div className="cmn-textslide color-2">Let’s Talk</div>
                      <div>
                        <img src="assets/img/marquee-box.png" alt="img" />
                      </div>
                      <div className="cmn-textslide">Let’s Talk</div>
                      <div>
                        <img src="assets/img/marquee-box-2.png" alt="img" />
                      </div>
                    </Fragment>
                  ))}
              </div>
              <div className="comm ms-3">
                <div className="cmn-textslide">Let’s Talk</div>
                <div>
                  <img src="assets/img/marquee-box.png" alt="img" />
                </div>
                <div className="cmn-textslide">Let’s Talk</div>
                <div>
                  <img src="assets/img/marquee-box-2.png" alt="img" />
                </div>
                <div className="cmn-textslide color-2">Let’s Talk</div>
                <div>
                  <img src="assets/img/marquee-box.png" alt="img" />
                </div>
                <div className="cmn-textslide">Let’s Talk</div>
                <div>
                  <img src="assets/img/marquee-box-2.png" alt="img" />
                </div>
                <div className="cmn-textslide color-2">Let’s Talk</div>
                <div>
                  <img src="assets/img/marquee-box.png" alt="img" />
                </div>
                <div className="cmn-textslide ">Let’s Talk</div>
                <div>
                  <img src="assets/img/marquee-box-2.png" alt="img" />
                </div>
                <div className="cmn-textslide color-2">Let’s Talk</div>
                <div>
                  <img src="assets/img/marquee-box.png" alt="img" />
                </div>
                <div className="cmn-textslide">Let’s Talk</div>
                <div>
                  <img src="assets/img/marquee-box.png" alt="img" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <FooterContent logo="assets/img/logo/logo-itcs-blanco-300x122.png.webp" />
      </footer>
    </Fragment>
  );
};

const logoIsOnDark = (path) =>
  path &&
  (path.includes("blanco") ||
    path.includes("white") ||
    path.includes("itcs-blanco"));

const FooterContent = ({
  logo = "assets/img/logo/logo-itcs.webp",
  layout = "style-2",
}) => {
  const services = [
    "Infraestructura & Productividad",
    "Ciberseguridad",
    "Networking & Telecomunicaciones",
    "Base de Datos",
    "Desarrollo de Sistemas",
  ];

  const contacts = [
    {
      icon: "flaticon-email",
      title: "Correo:",
      info: "info@itcs.com.py",
      href: "mailto:info@itcs.com.py",
    },
    {
      icon: "fal fa-map-marker-alt",
      title: "Dirección:",
      info: "Barrio Virgen del Huerto, Asunción, Paraguay",
      href: "https://maps.google.com/?q=Asunción+Paraguay",
    },
    {
      icon: "fal fa-phone-alt",
      title: "Teléfono:",
      info: "+595 21 728-8222",
      href: "tel:+595217288222",
    },
  ];

  const galleryImgs = [
    { src: "assets/img/gallery/01.jpg" },
    { src: "assets/img/gallery/02.jpg" },
    { src: "assets/img/gallery/03.jpg" },
    { src: "assets/img/gallery/04.jpg" },
    { src: "assets/img/gallery/05.jpg" },
    { src: "assets/img/gallery/06.jpg" },
    { src: "assets/img/gallery/07.jpg" },
    { src: "assets/img/gallery/08.jpg" },
    { src: "assets/img/gallery/09.jpg" },
  ];

  return (
    <Fragment>
      <div className="container">
        <div className={`footer-widgets-1 section-padding ${layout}`}>
          <div className="row g-5">
            <div
              className="col-xl-3 col-lg-6 pe-xxl-0 wow fadeInUp"
              data-wow-delay="200ms"
            >
              <div className="single-footer-widget">
                <div className="widget-head">
                  <Link href="/" className="d-inline-block site-footer-logo">
                    {logoIsOnDark(logo) ? (
                      <ItcsThemeLogo variant="darkOnly" withLink={false} />
                    ) : (
                      <ItcsThemeLogo variant="adaptive" withLink={false} />
                    )}
                  </Link>
                </div>
                <div className="footer-content">
                  <p>
                    iTCS S.A. — Más de 20 años acompañando a empresas
                    paraguayas con servicios y soluciones de TI certificadas.
                  </p>
                  <h5>Newsletter</h5>
                  <div className="footer-input border-radius-none">
                    <input
                      type="email"
                      id="email2"
                      placeholder="Su correo electrónico"
                    />
                    <button
                      className="newsletter-btn border-radius-none"
                      type="submit"
                    >
                      <i className="fab fa-telegram-plane" />
                    </button>
                  </div>
                  <div className="social-icon d-flex align-items-center">
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-dribbble" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 wow fadeInUp"
              data-wow-delay="400ms"
            >
              <div className="single-footer-widget ms-xxl-5 ps-xxl-3">
                <div className="widget-head">
                  <h4>Servicios</h4>
                </div>
                <ul className="list-area">
                  {services.map((service) => (
                    <li key={service}>
                      <Link href="/services">
                        <i className="fas fa-circle" />
                        {service}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 wow fadeInUp"
              data-wow-delay="600ms"
            >
              <div className="single-footer-widget ms-xxl-3">
                <div className="widget-head">
                  <h4>Contacto</h4>
                </div>
                <div className="footer-content">
                  <div className="contact-info-area">
                    {contacts.map((contact, index) => (
                      <div key={index} className="contact">
                        <a href={contact.href}>
                          <i className={contact.icon}></i>
                        </a>
                        <div className="contact-infu">
                          <span>{contact.title}</span>
                          <h5>{contact.info}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 wow fadeInUp"
              data-wow-delay="800ms"
            >
              <div className="single-footer-widget ms-xxl-5">
                <div className="widget-head">
                  <h4>Gallery</h4>
                </div>
                <div className="gallery">
                  {galleryImgs.map((img, index) => (
                    <div key={index} className="footer-gallery-img">
                      <img src={img.src} alt />
                      <div className="content">
                        <a href={img.src} className="img-popup">
                          <i className="fal fa-plus text-white" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom style-2">
        <div className="container">
          <div className="footer-bottom-wrapper d-flex align-items-center justify-content-between">
            <p>© {new Date().getFullYear()} iTCS S.A.</p>
            <div className="security ">
              <Link href="/faqs">Política de calidad (ISO 9001)</Link>/
              <Link href="/faqs">Política de seguridad (ISO 27001)</Link>/
              <Link href="/about">Quiénes somos</Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
