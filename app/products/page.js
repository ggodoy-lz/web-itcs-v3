import Pagebanner from "@/components/Pagebanner";
import ZotechLayout from "@/layout/ZotechLayout";
import Link from "next/link";

const products = [
  {
    name: "Veeam",
    tier: "Silver Partner",
    category: "Backup & Recovery",
    logo: "assets/img/brand/veeam.svg",
    icon: "flaticon-cloud",
    desc: "Solución líder en backup, replicación y recuperación ante desastres. Protege ambientes físicos, virtuales y cloud con inmutabilidad anti-ransomware.",
    delay: "200ms",
  },
  {
    name: "Sophos",
    tier: "Platinum Partner",
    category: "Ciberseguridad",
    logo: "assets/img/brand/sophos.png",
    icon: "flaticon-lock",
    desc: "Protección integral con Firewall, EDR/XDR y plataforma Sophos Central. Defensa sincronizada contra amenazas avanzadas.",
    delay: "400ms",
  },
  {
    name: "PRTG Monitor",
    tier: "Authorized Partner",
    category: "Monitoreo de Redes",
    logo: null,
    icon: "flaticon-analysis",
    desc: "Monitoreo unificado de redes, servidores, aplicaciones y dispositivos IoT en tiempo real con alertas proactivas.",
    delay: "600ms",
  },
  {
    name: "HPE",
    tier: "Authorized Partner",
    category: "Infraestructura & Storage",
    logo: "assets/img/brand/hpe.svg",
    icon: "flaticon-server",
    desc: "Servidores ProLiant, almacenamiento Nimble y soluciones de cómputo de alta performance para entornos críticos.",
    delay: "800ms",
  },
  {
    name: "Aruba Networks",
    tier: "Authorized Partner",
    category: "Networking & Wi-Fi",
    logo: "assets/img/brand/hpe.svg",
    icon: "flaticon-networking",
    desc: "Switching, Wi-Fi empresarial y SD-WAN. Conectividad segura y de alto rendimiento para cualquier entorno.",
    delay: "200ms",
  },
  {
    name: "ManageEngine",
    tier: "Authorized Partner",
    category: "Gestión de TI",
    logo: "assets/img/brand/manageengine.svg",
    icon: "flaticon-maintenance",
    desc: "Suite completa de herramientas para ITSM, ITAM, gestión de endpoints y seguridad unificada.",
    delay: "400ms",
  },
  {
    name: "Samsung B2B",
    tier: "Distributor",
    category: "Pantallas & Dispositivos",
    logo: "assets/img/brand/samsung.svg",
    icon: "flaticon-monitor",
    desc: "Pantallas profesionales, videowall, señalización digital y dispositivos móviles para el entorno empresarial.",
    delay: "600ms",
  },
];

const page = () => {
  return (
    <ZotechLayout>
      <Pagebanner pageName="Productos" />
      {/* Products Section Start */}
      <section className="service-wrapper service-4 products-page section-bg section-padding">
        <div className="container">
          <div className="section-title text-center">
            <div className="sub-title">
              <span>NUESTROS PRODUCTOS</span>
            </div>
            <h2>
              Marcas líderes con soporte <br /> certificado en Paraguay.
            </h2>
            <p className="mt-3">
              Distribuidor autorizado de las principales marcas tecnológicas del mundo,
              con ingenieros certificados y soporte local.
            </p>
          </div>
          <div className="service-inner text-center overflow-hidden mt-4 pt-3">
            <div className="row gy-4 gy-xxl-5">
              {products.map((product) => (
                <div
                  key={product.name}
                  className="col-xxl-3 col-xl-4 col-lg-6 col-md-6"
                >
                  <div
                    className="signle-service-item wow fadeInUp"
                    data-wow-delay={product.delay}
                  >
                    <div
                      className="service-bg bg-cover"
                      style={{
                        backgroundImage: "url(assets/img/service/08.jpg)",
                      }}
                    />
                    <div
                      className={`icon${
                        product.logo ? " icon--brand" : ""
                      }`}
                    >
                      {product.logo ? (
                        <img
                          src={product.logo}
                          alt={product.name}
                          className="product-brand-logo"
                        />
                      ) : (
                        <i className={product.icon} />
                      )}
                    </div>
                    <div className="line mb-3" />
                    <h4>
                      <Link href="/contact">{product.name}</Link>
                    </h4>
                    <p className="product-card__meta">
                      {product.tier} — {product.category}
                    </p>
                    <p className="pt-2 text-start small product-card__desc">
                      {product.desc}
                    </p>
                    <Link href="/contact" className="infu-btn">
                      Consultar
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* CTA: sin margin-top negativo del tema (evita solapamiento sobre la grilla) */}
      <section className="cta-wrapper cta-1 products-cta-standalone">
        <div className="container">
          <div className="cta-inner bg-cover wow fadeInUp" data-wow-delay="300ms">
            <div className="row align-items-center">
              <div className="col-xl-8 col-lg-8 col-12">
                <div className="section-title">
                  <div className="sub-title sub-title2">
                    <span className="text-white">DISTRIBUCIÓN AUTORIZADA</span>
                  </div>
                  <h2 className="text-white">
                    ¿Necesitás cotización de algún producto?
                  </h2>
                  <p className="text-white mt-2">
                    Contactanos y nuestros ingenieros te asesorarán en la solución ideal para tu empresa.
                  </p>
                </div>
                <Link href="/contact" className="theme-btn mt-4">
                  Solicitar cotización
                </Link>
              </div>
              <div className="col-xl-4 col-lg-4 col-12">
                <div className="images">
                  <img src="assets/img/cta/cta-1.png" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ZotechLayout>
  );
};
export default page;
