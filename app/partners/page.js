import Pagebanner from "@/components/Pagebanner";
import ZotechLayout from "@/layout/ZotechLayout";

const partners = [
  {
    name: "Sophos",
    tier: "Platinum Partner",
    logo: "assets/img/brand/sophos.png",
    description: "Soluciones de ciberseguridad endpoint, firewall y protección avanzada contra amenazas.",
  },
  {
    name: "Veeam",
    tier: "Silver Partner",
    logo: "assets/img/brand/veeam.svg",
    description: "Backup, recuperación ante desastres y gestión de datos en entornos virtuales y cloud.",
  },
  {
    name: "VMware",
    tier: "Authorized Partner",
    logo: "assets/img/brand/vmware.svg",
    description: "Virtualización de servidores, escritorios y redes para infraestructuras modernas.",
  },
  {
    name: "ManageEngine",
    tier: "Authorized Partner",
    logo: "assets/img/brand/manageengine.svg",
    description: "Gestión IT unificada: ITSM, monitoreo de red, gestión de endpoints y seguridad.",
  },
  {
    name: "HPE",
    tier: "Authorized Partner",
    logo: "assets/img/brand/hpe.svg",
    description: "Servidores, almacenamiento y soluciones de infraestructura para Data Centers.",
  },
  {
    name: "Aruba",
    tier: "Authorized Partner",
    logo: "assets/img/brand/hpe.svg",
    description: "Networking empresarial: switches, access points y soluciones de conectividad segura.",
  },
  {
    name: "Microsoft",
    tier: "Partner",
    logo: "assets/img/brand/microsoft.svg",
    description: "Licenciamiento, Azure, Microsoft 365 y soluciones cloud para empresas.",
  },
  {
    name: "HP",
    tier: "Partner",
    logo: "assets/img/brand/hp.svg",
    description: "Equipos de cómputo, impresoras y periféricos para el entorno empresarial.",
  },
  {
    name: "Samsung",
    tier: "Partner",
    logo: "assets/img/brand/samsung.svg",
    description: "Dispositivos móviles, displays y soluciones de almacenamiento empresarial.",
  },
  {
    name: "Adobe",
    tier: "Partner",
    logo: "assets/img/brand/adobe.svg",
    description: "Soluciones de diseño, gestión de documentos y creatividad para empresas.",
  },
  {
    name: "Red Hat",
    tier: "Partner",
    logo: "assets/img/brand/redhat.svg",
    description: "Sistemas operativos Linux empresarial, OpenShift y soluciones open source.",
  },
  {
    name: "Cisco",
    tier: "Partner",
    logo: "assets/img/brand/cisco.svg",
    description: "Networking, seguridad y colaboración con equipos Cisco para empresas.",
  },
  {
    name: "Yeastar",
    tier: "Partner",
    logo: "assets/img/brand/yeastar.png",
    description: "Centralitas IP, soluciones de telefonía y comunicaciones unificadas.",
  },
  {
    name: "EverExceed",
    tier: "Partner",
    logo: "assets/img/brand/everexceed.png",
    description: "UPS, baterías y soluciones de energía para infraestructuras críticas.",
  },
  {
    name: "CE+T",
    tier: "Partner",
    logo: "assets/img/brand/cet.png",
    description: "Inversores y sistemas de energía ininterrumpida para misión crítica.",
  },
  {
    name: "CommScope",
    tier: "Partner",
    logo: "assets/img/brand/commscope.png",
    description: "Infraestructura de cableado estructurado y soluciones de conectividad.",
  },
  {
    name: "IBM",
    tier: "Partner",
    logo: "assets/img/brand/ibm.svg",
    description: "Servidores, almacenamiento y soluciones de inteligencia artificial empresarial.",
  },
  {
    name: "QNAP",
    tier: "Partner",
    logo: "assets/img/brand/qnap.svg",
    description: "Soluciones NAS y almacenamiento en red para backup y gestión de datos.",
  },
  {
    name: "Synology",
    tier: "Partner",
    logo: "assets/img/brand/synology.svg",
    description: "Almacenamiento en red empresarial, backup centralizado y gestión de archivos.",
  },
  {
    name: "VCP Technology",
    tier: "Partner",
    logo: "assets/img/brand/vcp.png",
    description: "Soluciones de videovigilancia y seguridad física para instalaciones empresariales.",
  },
];

const page = () => {
  return (
    <ZotechLayout>
      <Pagebanner pageName="Partners" />
      <section className="section-padding">
        <div className="container">
          <div className="section-title text-center">
            <div className="sub-title">
              <span>NUESTROS PARTNERS</span>
            </div>
            <h2>Fabricantes líderes que respaldan nuestras soluciones</h2>
          </div>
          <p className="text-center mt-3 mb-5">
            iTCS S.A. trabaja con los principales fabricantes tecnológicos del mundo, <br />
            garantizando soluciones certificadas y soporte de primer nivel para nuestros clientes.
          </p>

          {/* Certified Partners */}
          <div className="mb-5">
            <h4 className="text-center mb-4" style={{ borderBottom: "2px solid #eee", paddingBottom: "1rem" }}>
              Partners Certificados
            </h4>
            <div className="row g-4 justify-content-center">
              {partners.slice(0, 6).map((partner, index) => (
                <div key={index} className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${(index + 1) * 100}ms`}>
                  <div className="text-center p-4" style={{ border: "1px solid #eee", borderRadius: "8px", height: "100%" }}>
                    <div className="mb-3" style={{ height: "70px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img src={partner.logo} alt={partner.name} style={{ maxHeight: "60px", maxWidth: "160px", objectFit: "contain" }} />
                    </div>
                    <h4>{partner.name}</h4>
                    <span className="badge bg-dark mb-2" style={{ fontSize: "0.75rem" }}>{partner.tier}</span>
                    <p className="mt-2" style={{ fontSize: "0.9rem" }}>{partner.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Other Partners */}
          <div>
            <h4 className="text-center mb-4" style={{ borderBottom: "2px solid #eee", paddingBottom: "1rem" }}>
              Otros Partners Tecnológicos
            </h4>
            <div className="row g-4">
              {partners.slice(6).map((partner, index) => (
                <div key={index} className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${(index + 1) * 100}ms`}>
                  <div className="text-center p-3" style={{ border: "1px solid #eee", borderRadius: "8px", height: "100%" }}>
                    <div className="mb-2" style={{ height: "55px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                      <img src={partner.logo} alt={partner.name} style={{ maxHeight: "50px", maxWidth: "130px", objectFit: "contain" }} />
                    </div>
                    <h5>{partner.name}</h5>
                    <p style={{ fontSize: "0.85rem" }}>{partner.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-5 pt-3">
            <p className="mb-3">¿Querés saber más sobre nuestras alianzas tecnológicas?</p>
            <a href="/contact" className="theme-btn black-btn">Contactar ahora</a>
          </div>
        </div>
      </section>
    </ZotechLayout>
  );
};
export default page;
