import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Counter from "@/components/Counter";
import BrandSlider from "@/components/slider/BrandSlider";
import CaseStudySlider from "@/components/slider/CaseStudySlider";
import { TeamMember2 } from "@/components/TeamMember";
import ZotechLayout from "@/layout/ZotechLayout";
import Link from "next/link";
import { Fragment } from "react";
const page = () => {
  return (
    <Fragment>
      <ZotechLayout header={1} footer={1}>
        {/* Hero Section Start */}
        <section className="hero-wrapper hero-1 mx-xl-5">
          <div className="shape">
            <img className="shape-1" src="assets/img/world.png" alt />
          </div>
          <div
            className="hero-bg bg-cover"
            style={{
              backgroundImage: 'url("assets/img/hero/hero-1-1-bg.png")',
            }}
          ></div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                <div className="hero-content pe-xl-3 text-lg-start text-center ">
                  <p className="mb-2 text-uppercase small">
                    ISO 9001:2015 · ISO 27001:2022
                  </p>
                  <h1>
                    Soluciones IT que impulsan tu negocio.
                  </h1>
                  <p>
                    iTCS S.A. — 20 años siendo el socio tecnológico de confianza
                    en Paraguay. Infraestructura, ciberseguridad, networking y
                    desarrollo de sistemas.
                  </p>
                  <p className="small text-muted mt-2">
                    Atención: Lun–Vie · 08:00–18:00 hs · Soporte 24/7 para
                    clientes con SLA.
                  </p>
                  <div className="hero-button mt-4 d-flex flex-wrap gap-2 justify-content-lg-start justify-content-center">
                    <Link href="/services" className="theme-btn">
                      Explorar servicios
                    </Link>
                    <Link
                      href="/contact"
                      className="theme-btn black-btn"
                    >
                      Hablar con un experto
                    </Link>
                  </div>
                  <div className="feedback d-flex mt-xl-5 flex-wrap justify-content-lg-start justify-content-center gap-3">
                    <div className="infu">
                      <p>
                        <span>500+</span> clientes satisfechos
                      </p>
                    </div>
                    <div className="infu">
                      <p>
                        <span>1.200+</span> proyectos ejecutados
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-6 col-md-12 col-12  wow fadeInUp"
                data-wow-delay="300ms"
              >
                <div className="hero-image">
                  <img src="assets/img/hero/hero-1.png" alt />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* features Section Start */}
        <section className="features-wrapper features-1 home-features-it">
          <div className="container">
            <div className="row">
              <div
                className="col-xl-3 col-lg-6 col-md-6 col-12 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="single-feature-item">
                  <div className="icon">
                    <i className="flaticon-web-development" />
                  </div>
                  <h4>
                    <Link href="services-details">
                      Infraestructura &amp; Productividad
                    </Link>
                  </h4>
                  <p>
                    Servidores Microsoft/Linux, virtualización VMware/Hyper-V,
                    Azure/AWS.
                  </p>
                  <ul>
                    <li>
                      <i className="fas fa-check-circle" />
                      Cloud e híbrido
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Continuidad operativa
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 col-12 wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="single-feature-item">
                  <div className="icon">
                    <i className="flaticon-mobile-app" />
                  </div>
                  <h4>
                    <Link href="services-details">Ciberseguridad</Link>
                  </h4>
                  <p>
                    Seguridad perimetral, protección de endpoints y auditorías.
                  </p>
                  <ul>
                    <li>
                      <i className="fas fa-check-circle" />
                      Defensa en profundidad
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Partners Sophos y más
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 col-12 wow fadeInUp"
                data-wow-delay="600ms"
              >
                <div className="single-feature-item">
                  <div className="icon">
                    <i className="flaticon-cms" />
                  </div>
                  <h4>
                    <Link href="services-details">
                      Networking &amp; Telecomunicaciones
                    </Link>
                  </h4>
                  <p>
                    Cableado, fibra, conectividad y data centers.
                  </p>
                  <ul>
                    <li>
                      <i className="fas fa-check-circle" />
                      Diseño e implementación
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Monitoreo y soporte
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-6 col-md-6 col-12 wow fadeInUp"
                data-wow-delay="800ms"
              >
                <div className="single-feature-item">
                  <div className="icon">
                    <i className="flaticon-graphic-design" />
                  </div>
                  <h4>
                    <Link href="services-details">Desarrollo de sistemas</Link>
                  </h4>
                  <p>Software a medida y aplicaciones móviles.</p>
                  <ul>
                    <li>
                      <i className="fas fa-check-circle" />
                      Integración con su negocio
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Entregas iterativas
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Section Start */}
        <section className="about-wrapper about-1 section-padding">
          <div className="container">
            <div className="row g-5">
              <div
                className="col-xl-7 col-lg-12 col-md-12 col-12 wow fadeInLeft"
                data-wow-delay="300ms"
              >
                <div className="about-images">
                  <div className="image-1">
                    <img src="assets/img/about/01.jpg" alt="img" />
                  </div>
                  <div className="image-2">
                    <img src="assets/img/about/02.png" alt="img" />
                  </div>
                </div>
              </div>
              <div
                className="col-xl-5 col-lg-12 col-md-12 col-12 wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="about-content mt-4 ms-xxl-4">
                  <div className="section-title">
                    <div className="sub-title">
                      <span>SOBRE iTCS</span>
                    </div>
                    <h2 className="split-text right">
                      Tecnología de clase mundial con <br /> ingenieros locales
                      certificados.
                    </h2>
                  </div>
                  <p>
                    Desde 2005 en Asunción, llevamos soluciones de TI a empresas
                    paraguayas con procesos ISO 9001 e ISO 27001, partners
                    globales y soporte con SLA.
                  </p>
                  <ul>
                    <li>
                      <i className="fas fa-check-circle" />
                      Infraestructura, seguridad, redes y continuidad
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Más de 30 profesionales e ingenieros certificados
                    </li>
                    <li>
                      <i className="fas fa-check-circle" />
                      Oficinas en Barrio Virgen del Huerto, Asunción
                    </li>
                  </ul>
                  <div className="about-infu">
                    <Link href="/about" className="theme-btn black-btn">
                      Conocer la empresa
                    </Link>
                    <div className="contact-us">
                      <img src="assets/img/about/03.png" alt />
                      <div className="text">
                        <span>Consúltenos por teléfono</span>
                        <h4>+595 21 728-8222</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Service Section Start */}
        <section className="service-wrapper service-1 section-bg section-padding">
          <div className="shapes">
            <img className="shape-1" src="assets/img/shape/shape-1.png" alt />
            <img className="shape-2" src="assets/img/world.png" alt />
          </div>
          <div className="container">
            <div className="service-inner">
              <div className="row">
                <div
                  className="col-xl-7 col-lg-6 col-md-12 col-12  wow fadeInLeft"
                  data-wow-delay="300ms"
                >
                  <div className="countbox">
                    <h3>
                      <span className="count">
                        <Counter end={20} />
                      </span>
                      +
                    </h3>
                    <p>Años de experiencia</p>
                  </div>
                  <div className="section-title mt-4">
                    <h2 className="split-text left">
                      Servicios IT para todo el ciclo de <br />
                      su organización, con expertos
                      <br />
                      certificados
                    </h2>
                  </div>
                </div>
                <div
                  className="col-xl-5 col-lg-6 col-md-12 col-12  wow fadeInRight"
                  data-wow-delay="300ms"
                >
                  <div className="title">
                    <h3>
                      Desde la infraestructura base hasta la ciberseguridad
                      avanzada, cubrimos su operación con ingenieros Sophos,
                      Veeam, HPE, Microsoft y más.
                    </h3>
                  </div>
                  <div className="progress-items">
                    <div className="progress">
                      <div
                        className="progress-value count-bar"
                        data-percent="86%"
                      />
                    </div>
                    <div className="point">
                      <p>Cobertura de proyectos IT</p>
                      <span>86%</span>
                    </div>
                  </div>
                  <div className="progress-items">
                    <div className="progress">
                      <div
                        className="progress-value count-bar"
                        data-percent="90%"
                      />
                    </div>
                    <div className="point">
                      <p>Enfoque en ciberseguridad</p>
                      <span>90%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-4">
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-12  wow fadeInUp"
                  data-wow-delay="200ms"
                >
                  <div className="single-service-item ">
                    <div className="shape">
                      <img
                        className="shape-3"
                        src="assets/img/service/shape-1.png"
                        alt
                      />
                      <img
                        className="shape-4"
                        src="assets/img/service/shape-2.png"
                        alt
                      />
                    </div>
                    <div className="image">
                      <img src="assets/img/service/05.jpg" alt="" />
                    </div>
                    <div className="content">
                      <div className="icon">
                        <i className="flaticon-analysis" />
                      </div>
                      <h4>
                        <Link href="services-details">
                          Base de datos
                        </Link>
                      </h4>
                      <p>
                        Diseño, tuning, replicación SQL/Oracle/MongoDB.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-12  wow fadeInUp"
                  data-wow-delay="400ms"
                >
                  <div className="single-service-item">
                    <div className="shape">
                      <img
                        className="shape-3"
                        src="assets/img/service/shape-1.png"
                        alt
                      />
                      <img
                        className="shape-4"
                        src="assets/img/service/shape-2.png"
                        alt
                      />
                    </div>
                    <div className="image">
                      <img src="assets/img/service/02.jpg" alt="" />
                    </div>
                    <div className="content">
                      <div className="icon">
                        <i className="flaticon-usability" />
                      </div>
                      <h4>
                        <Link href="services-details">Backup &amp; continuidad</Link>
                      </h4>
                      <p>
                        Respaldo, disaster recovery y soluciones inmutables.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="col-xl-4 col-lg-4 col-md-6 col-12  wow fadeInUp"
                  data-wow-delay="600ms"
                >
                  <div className="single-service-item">
                    <div className="shape">
                      <img
                        className="shape-3"
                        src="assets/img/service/shape-1.png"
                        alt
                      />
                      <img
                        className="shape-4"
                        src="assets/img/service/shape-2.png"
                        alt
                      />
                    </div>
                    <div className="image">
                      <img src="assets/img/service/06.jpg" alt="" />
                    </div>
                    <div className="content">
                      <div className="icon">
                        <i className="flaticon-vector" />
                      </div>
                      <h4>
                        <Link href="services-details">Cómputo de misión crítica</Link>
                      </h4>
                      <p>Alta performance, storage y plataformas críticas.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* About Section Start */}
        <section className="about-wrapper about-2 mx-xl-5 section-padding pt-0">
          <div
            className="bg-image bg-cover"
            style={{ backgroundImage: "url(assets/img/about/01-bg.png)" }}
          />
          <div className="container">
            <div className="about-content wow fadeInUp" data-wow-delay="300ms">
              <div className="section-title text-center">
                <div className="sub-title sub-title2">
                  <span className="text-white">¿LISTO PARA AVANZAR?</span>
                </div>
                <h2 className="text-white split-text right">
                  Transforme su infraestructura con
                  <br />
                  gobierno, seguridad y continuidad
                </h2>
              </div>
              <p className="text-center">
                Acompañamos a empresas en Paraguay con servicios y productos
                certificados, soporte con SLA y partners globales.
              </p>
              <div className="infu text-center d-flex align-items-center justify-content-center">
                <Link href="contact" className="theme-btn">
                  Contactar ahora
                </Link>
                <div className="contact-us d-flex ">
                  <a href="mailto:info@itcs.com.py">
                    <i className="fal fa-envelope" />
                  </a>
                  <div className="text text-start">
                    <span>Correo</span>
                    <h4>info@itcs.com.py</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Choose-us Section Start */}
        <section className="choose-us-wrapper choose-us-1 section-padding pb-xl-0">
          <div className="shape">
            <img src="assets/img/world.png" alt />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-12 col-md-12">
                <div
                  className="choose-us-images wow fadeInLeft"
                  data-wow-delay="300ms"
                >
                  <img src="assets/img/why-choose/01.png" alt />
                  <div className="shape-img">
                    <img src="assets/img/shape/shape-2.png" alt />
                  </div>
                </div>
              </div>
              <div
                className="col-xl-6 col-lg-8 col-md-12 mt-5 pt-4 wow fadeInRight"
                data-wow-delay="300ms"
              >
                <div className="choose-us-content ms-xl-4 ps-xl-1">
                  <div className="section-title">
                    <div className="sub-title">
                      <span>¿POR QUÉ iTCS?</span>
                    </div>
                    <h2 className="split-text right">
                      Trayectoria, certificaciones y cerca de usted
                    </h2>
                  </div>
                  <p className="mt-4 pe-xl-5 me-xl-3 text-center text-md-start">
                    Más de 20 años acompañando a empresas paraguayas con
                    servicios de infraestructura, seguridad, redes y
                    continuidad, respaldados por ISO 9001 e ISO 27001 y
                    alianzas con fabricantes líderes.
                  </p>
                  <div className="icon-box d-flex mt-4 pt-3 text-center text-md-start">
                    <div className="single-icon-box">
                      <div className="icon">
                        <i className="flaticon-world" />
                      </div>
                      <h4>Partners de clase mundial</h4>
                      <p>
                        Sophos Platinum, Veeam Silver, HPE, VMware, Microsoft
                        y más, con ingenieros certificados.
                      </p>
                    </div>
                    <div className="single-icon-box">
                      <div className="icon">
                        <i className="flaticon-medal-1" />
                      </div>
                      <h4>ISO 9001 e ISO 27001</h4>
                      <p>
                        Gestión de calidad y de seguridad de la información
                        auditadas.
                      </p>
                    </div>
                  </div>
                  <div className="count-box">
                    <div className="single-count">
                      <h2>
                        <span className="count">
                          <Counter end={30} />
                        </span>
                        +
                      </h2>
                      <p>Profesionales en el equipo</p>
                    </div>
                    <div className="single-count">
                      <h2>
                        <span className="count">
                          <Counter end={500} />
                        </span>
                        +
                      </h2>
                      <p>Clientes acompañados</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Brand Section Start */}
        <section className="brand-wrapper brand-1 section-bg section-padding brand-section-xl">
          <div className="container">
            <div className="brand-inner text-center text-lg-start">
              <h3>Partners</h3>
              <BrandSlider size="lg" />
            </div>
          </div>
        </section>
        {/* Team Section Start */}
        <TeamMember2 />
        {/* Case-study Section Start */}
        <section className="case-study-wrapper case-study-1 it-case-brands section-bg section-padding">
          <div className="shape">
            <img className="shape-1" src="assets/img/shape/shape-6.png" alt />
          </div>
          <div className="container">
            <div className="section-title-area">
              <div className="section-title ">
                <div className="sub-title">
                  <span>ALTO VALOR, MARCAS REALES</span>
                </div>
                <h2 className="split-text left">Experiencia en entornos reales</h2>
              </div>
              <p className="text-center text-md-start">
                Implementación de plataformas, continuidad y seguridad con
                marcas
                <br />
                Veeam, Sophos, HPE, Aruba y otras, con soporte en Paraguay.
              </p>
            </div>
          </div>
          <div className="case-study-inner mt-5">
            <CaseStudySlider />
          </div>
        </section>
        {/* Process Section Start */}
        <section
          className="process-wrapper process-1 itcs-process-1 section-padding bg-cover"
          style={{ backgroundImage: "url(assets/img/process/process-bg.jpg)" }}
        >
          <div className="container">
            <div className="section-title text-center">
              <h2 className="text-white split-text left">
                Tres pasos hacia <br />
                su solución de TI
              </h2>
            </div>
            <div className="process-items d-grid justify-content-between">
              <div
                className="single-process-item text-center mt-xxl-5 pt-xxl-4 wow fadeInUp"
                data-wow-delay="200ms"
              >
                <div className="icon">01</div>
                <div className="image">
                  <img src="assets/img/process/01.jpg" alt />
                </div>
                <h4>Diagnóstico y alcance</h4>
                <p>
                  Relevamos su entorno, riesgos y metas; definimos
                  requerimientos y hoja de ruta.
                </p>
              </div>
              <div
                className="single-process-item text-center wow fadeInUp"
                data-wow-delay="400ms"
              >
                <div className="icon">02</div>
                <div className="image">
                  <img src="assets/img/process/02.jpg" alt />
                </div>
                <h4>Implementación</h4>
                <p>
                  Despliegue de plataformas, integración con su operación y
                  transferencia a su equipo.
                </p>
              </div>
              <div
                className="single-process-item text-center mt-xxl-5 pt-xxl-4 wow fadeInUp"
                data-wow-delay="600ms"
              >
                <div className="icon">03</div>
                <div className="image">
                  <img src="assets/img/process/03.jpg" alt />
                </div>
                <h4>Operación y mejora</h4>
                <p>
                  Monitoreo, soporte con SLA, revisiones y mejora continua
                  alineada a ISO.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section Start */}
        <Contact wrapperClass="contact-us-wrapper contact-us-1 section-padding" />
        {/* Blog Section Start */}
        <Blog wrapperClass="blog-wrapper blog-1 section-padding section-bg about-page-blog" />
        {/* Cta Section Start */}
        <section className="cta-wrapper cta-1">
          <div className="container">
            <div
              className="cta-inner bg-cover wow fadeInUp"
              data-wow-delay="300ms"
            >
              <div className="shape">
                <img
                  className="shape-1"
                  src="assets/img/cta/cta-shape-1.png"
                  alt
                />
                <img className="shape-2" src="assets/img/world.png" alt />
              </div>
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-12">
                  <div className="section-title">
                    <div className="sub-title sub-title2">
                      <span className="text-white">HABLEMOS</span>
                    </div>
                    <h2 className="text-white">
                      ¿Listo para transformar su infraestructura?
                    </h2>
                  </div>
                  <Link href="contact" className="theme-btn mt-4">
                    Contacto
                  </Link>
                </div>
                <div className="col-xl-6 col-lg-6 col-12">
                  <div className="images">
                    <img src="assets/img/cta/cta-1.png" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ZotechLayout>
    </Fragment>
  );
};
export default page;
