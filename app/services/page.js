import Pagebanner from "@/components/Pagebanner";
import WorkingProcess from "@/components/WorkingProcess";
import ZotechLayout from "@/layout/ZotechLayout";
import Link from "next/link";

const servicios = [
  {
    title: "Infraestructura & Productividad",
    desc: "Virtualización (VMware, Hyper-V), nube pública híbrida (Azure, AWS) y plataformas en sitio bajo gobierno de su operación.",
    icon: "flaticon-web-development",
    delay: "200ms",
  },
  {
    title: "Ciberseguridad",
    desc: "Seguridad perimetral, EDR/XDR, correo, cumplimiento y simulacros, con ecosistemas como Sophos y mejores prácticas alineadas a ISO 27001.",
    icon: "flaticon-lock",
    delay: "400ms",
  },
  {
    title: "Networking & Telecomunicaciones",
    desc: "Cableado estructurado, fibra, switching, Wi‑Fi, SD‑WAN y conectividad a data centers, con enfoque de disponibilidad y seguridad.",
    icon: "flaticon-connection",
    delay: "600ms",
  },
  {
    title: "Bases de datos",
    desc: "Diseño, afinado, replicación y resiliencia en SQL, Oracle, MongoDB y otras plataformas, integradas con su respaldo y monitoreo.",
    icon: "flaticon-cms",
    delay: "800ms",
  },
  {
    title: "Desarrollo de sistemas",
    desc: "Software a medida, integraciones, APIs, automatización y apoyo a su digitalización con diseño bajo requisito del negocio.",
    icon: "flaticon-user-experience",
    delay: "200ms",
  },
  {
    title: "Backup & Continuidad",
    desc: "Estrategias 3-2-1, inmutabilidad, DR y continuidad con Veeam y arquitecturas que reducen riesgo de ransomware y pérdida de datos.",
    icon: "flaticon-maintenance",
    delay: "400ms",
  },
  {
    title: "Cómputo de misión crítica",
    desc: "Alta disponibilidad, almacenamiento, hiperconvergencia y plataformas de cómputo y storage para sus cargas más exigentes.",
    icon: "flaticon-engineering",
    delay: "600ms",
  },
  {
    title: "Soporte técnico",
    desc: "Mesa de servicios, operación de TIER, monitoreo, licenciamiento, mesa de helpdesk y acuerdos de nivel de servicio 24/7 bajo contrato.",
    icon: "flaticon-strategy",
    delay: "800ms",
  },
  {
    title: "Obras civiles (IT)",
    desc: "Ingeniería y proyectos técnicos de construcción e infraestructura física asociada a su sala de servidores y cableado (según el alcance acordado).",
    icon: "flaticon-management",
    delay: "200ms",
  },
];

const page = () => {
  return (
    <ZotechLayout>
      <Pagebanner pageName="Servicios" />
      <section className="service-wrapper service-4 section-bg section-padding">
        <div className="container">
          <div className="section-title text-center">
            <div className="sub-title">
              <span>SERVICIOS</span>
            </div>
            <h2>
              Servicios IT para cada necesidad
              <br />
              empresarial
            </h2>
            <p className="mt-3 px-lg-5">
              Desde la infraestructura base hasta la ciberseguridad avanzada,
              cubrimos el ciclo tecnológico con expertos certificados, alineado
              a nuestro SGI (ISO 9001 e ISO 27001).
            </p>
          </div>
          <div className="service-inner text-center overflow-hidden mt-4 pt-3">
            <div className="row gy-xxl-5">
              {servicios.map((s, index) => (
                <div
                  key={index}
                  className="col-xxl-3 col-xl-4 col-lg-6 col-md-6"
                >
                  <div
                    className="signle-service-item wow fadeInUp"
                    data-wow-delay={s.delay}
                  >
                    <div
                      className="service-bg bg-cover"
                      style={{
                        backgroundImage: "url(assets/img/service/08.jpg)",
                      }}
                    />
                    <div className="icon">
                      <i className={s.icon} />
                    </div>
                    <div className="line mb-4" />
                    <h4>
                      <Link href="services-details">{s.title}</Link>
                    </h4>
                    <p className="pt-3 text-start small">{s.desc}</p>
                    <Link href="services-details" className="infu-btn">
                      Más detalle
                      <i className="far fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <WorkingProcess />
    </ZotechLayout>
  );
};
export default page;
