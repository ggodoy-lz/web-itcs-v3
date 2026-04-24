import Link from "next/link";

const CTA = ({
  wrapperClass = "cta-wrapper cta-2 style-3 section-padding pb-0 section-bg",
}) => {
  return (
    <section className={wrapperClass}>
      <div className="container">
        <div className="cta-inner wow fadeInUp" data-wow-delay="200ms">
          <div className="icon">
            <i className="flaticon-customer-support" />
          </div>
          <div className="title">
            <h3 className="split-text right">
              ¿Buscás soluciones IT para tu empresa?
            </h3>
            <p>
              Contanos qué necesitás: infraestructura, ciberseguridad, redes o
              continuidad operativa.
            </p>
          </div>
          <Link href="/contact" className="theme-btn white-btn">
            Contactar
          </Link>
        </div>
      </div>
    </section>
  );
};
export default CTA;
