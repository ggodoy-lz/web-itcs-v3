"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial = () => {
  return (
    <Swiper {...sliderProps.testimonial} className="swiper testimonial-slide">
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div className="signle-testimonial-item d-flex ">
            <img src="assets/img/testimonial/01.png" alt="" />
            <div className="content">
              <div className="star text-center text-md-start">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <p>
                El acompañamiento en infraestructura y ciberdefensa fue claro, con
                entregas documentadas y respuesta a incidentes alineada a
                nuestro SLA. Recomendamos a iTCS para proyectos con marcas
                exigentes.
              </p>
              <div className="clints-infu pt-4 pt-xxl-5  text-center text-md-start">
                <h5>Responsable de TI</h5>
                <span>Organización con sede en Asunción</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="signle-testimonial-item d-flex ">
            <img src="assets/img/testimonial/01.png" alt="" />
            <div className="content">
              <div className="star text-center text-md-start">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <p>
                Trabajo en equipo con ingenieros certificados, visibilidad del
                avance y transferencia a nuestra operación. La continuidad y el
                respaldo (Veeam) quedaron explicados y probados.
              </p>
              <div className="clints-infu pt-4 pt-lg-5 text-center text-md-start">
                <h5>Área de sistemas</h5>
                <span>Empresa de servicios, Paraguay</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="signle-testimonial-item d-flex ">
            <img src="assets/img/testimonial/01.png" alt="" />
            <div className="content">
              <div className="star text-center text-md-start">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <p>
                Valoramos el enfoque en calidad (ISO 9001) y seguridad de la
                información: revisiones, trazabilidad y un solo interlocutor
                técnico con la gerencia.
              </p>
              <div className="clints-infu pt-4 pt-lg-5 text-center text-md-start">
                <h5>Comité de dirección</h5>
                <span>Cliente con presencia en el país</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};
export default Testimonial;

export const Testimonial2 = () => {
  return (
    <Swiper
      {...sliderProps.testimonial2}
      className="swiper testimonial-slide-2"
    >
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="200ms"
          >
            <div className="client-img">
              <img src="assets/img/testimonial/02.png" alt="client-img" />
            </div>
            <ul className="client-rating">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <p className="text">
              El acompañamiento en infraestructura y ciberdefensa cumplió plazos y
              criterio técnico; buena coordinación con nuestro equipo local.
            </p>
            <div className="client-info">
              <div className="content">
                <h6>Responsable de TI</h6>
                <p>Asunción</p>
              </div>
              <div className="quote-icon">
                <img src="assets/img/testimonial/quote-1.png" alt="icon-img" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="400ms"
          >
            <div className="client-img">
              <img src="assets/img/testimonial/01.png" alt="client-img" />
            </div>
            <ul className="client-rating">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <p className="text">
              Transferencia clara a operación y continuidad proba con Veeam;
              mesas de avance puntuales.
            </p>
            <div className="client-info">
              <div className="content">
                <h6>Área de sistemas</h6>
                <p>Paraguay</p>
              </div>
              <div className="quote-icon">
                <img src="assets/img/testimonial/quote-1.png" alt="icon-img" />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="600ms"
          >
            <div className="client-img">
              <img src="assets/img/testimonial/02.png" alt="client-img" />
            </div>
            <ul className="client-rating">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <p className="text">
              Valoramos el marco ISO en calidad y seguridad: trazabilidad y un
              interlocutor con la dirección.
            </p>
            <div className="client-info">
              <div className="content">
                <h6>Dirección</h6>
                <p>Organización con sede en el país</p>
              </div>
              <div className="quote-icon">
                <img src="assets/img/testimonial/quote-1.png" alt="icon-img" />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </div>
      <div className="swiper-dot color-style-two border-style center pt-5">
        <div className="dot" />
      </div>
    </Swiper>
  );
};

export const Testimonial3 = () => {
  return (
    <Swiper
      {...sliderProps.testimonial3}
      className="swiper testimonial-slide-3"
    >
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item  wow fadeInUp"
            data-wow-delay="200ms"
          >
            <ul className="client-rating d-flex align-items-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <p className="text">
              El acompañamiento en infraestructura y ciberdefensa fue claro, con
              entregas documentadas y respuesta a incidentes alineada a
              nuestro SLA. Recomendamos a iTCS para proyectos con marcas
              exigentes.
            </p>
            <div className="client-info">
              <div className="client-img">
                <img src="assets/img/testimonial/02.png" alt="client-img" />
                <div className="icon">
                  <i className="flaticon-quote" />
                </div>
              </div>
              <div className="content">
                <h6>Responsable de TI</h6>
                <p>Organización con sede en Asunción</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item  wow fadeInUp"
            data-wow-delay="200ms"
          >
            <ul className="client-rating d-flex align-items-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <p className="text">
              Trabajo en equipo con ingenieros certificados, visibilidad del
              avance y transferencia a nuestra operación. La continuidad y el
              respaldo (Veeam) quedaron explicados y probados.
            </p>
            <div className="client-info">
              <div className="client-img">
                <img src="assets/img/testimonial/02.png" alt="client-img" />
                <div className="icon">
                  <i className="flaticon-quote" />
                </div>
              </div>
              <div className="content">
                <h6>Área de sistemas</h6>
                <p>Empresa de servicios, Paraguay</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item  wow fadeInUp"
            data-wow-delay="200ms"
          >
            <ul className="client-rating d-flex align-items-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <p className="text">
              Valoramos el enfoque en calidad (ISO 9001) y seguridad de la
              información: revisiones, trazabilidad y un solo interlocutor
              técnico con la gerencia.
            </p>
            <div className="client-info">
              <div className="client-img">
                <img src="assets/img/testimonial/02.png" alt="client-img" />
                <div className="icon">
                  <i className="flaticon-quote" />
                </div>
              </div>
              <div className="content">
                <h6>Comité de dirección</h6>
                <p>Cliente con presencia en el país</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};
export const Testimonial4 = () => {
  return (
    <Swiper {...sliderProps.testimonial4} className="swiper testimonial-4">
      <div className="swiper-wrapper">
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="200ms"
          >
            <img className="shape-1" src="assets/img/shape/shape-11.png" alt />
            <div className="client-img center">
              <img src="assets/img/testimonial/04.png" alt="client-img" />
              <div className="icon">
                <i className="flaticon-quote" />
              </div>
            </div>
            <ul className="client-rating d-flex align-items-center justify-content-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <h3>"Pioneers in AI Integration Services"</h3>
            <p className="text">
              "Their advanced AI solutions helped us streamline operations and
              improve user experiences effortlessly."
            </p>
            <div className="client-info">
              <h4>William Jekson</h4>
              <p>Product Manager</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="200ms"
          >
            <img className="shape-1" src="assets/img/shape/shape-11.png" alt />
            <div className="client-img center">
              <img src="assets/img/testimonial/05.png" alt="client-img" />
              <div className="icon">
                <i className="flaticon-quote" />
              </div>
            </div>
            <ul className="client-rating d-flex align-items-center justify-content-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <h3>"Exceptional Service for AI Innovation"</h3>
            <p className="text">
              "Integrating their AI solutions revolutionized our workflows,
              unlocking new efficiency and productivity levels."
            </p>
            <div className="client-info">
              <h4>Steve Smit</h4>
              <p>Product Manager</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="200ms"
          >
            <img className="shape-1" src="assets/img/shape/shape-11.png" alt />
            <div className="client-img center">
              <img src="assets/img/testimonial/06.png" alt="client-img" />
              <div className="icon">
                <i className="flaticon-quote" />
              </div>
            </div>
            <ul className="client-rating d-flex align-items-center justify-content-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <h3>
              "Top AI Partner for <br /> Growth"
            </h3>
            <p className="text">
              "Their AI-driven insights helped us make smarter decisions,
              boosting our overall business performance."
            </p>
            <div className="client-info">
              <h4>Will Jacks</h4>
              <p>Product Manager</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="200ms"
          >
            <img className="shape-1" src="assets/img/shape/shape-11.png" alt />
            <div className="client-img center">
              <img src="assets/img/testimonial/01.png" alt="client-img" />
              <div className="icon">
                <i className="flaticon-quote" />
              </div>
            </div>
            <ul className="client-rating d-flex align-items-center justify-content-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <h3>"Pioneers in AI Integration Services"</h3>
            <p className="text">
              "Integrating their AI solutions revolutionized our workflows,
              unlocking new efficiency and productivity levels."
            </p>
            <div className="client-info">
              <h4>Michael Jon</h4>
              <p>Product Manager</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="200ms"
          >
            <img className="shape-1" src="assets/img/shape/shape-11.png" alt />
            <div className="client-img center">
              <img src="assets/img/testimonial/04.png" alt="client-img" />
              <div className="icon">
                <i className="flaticon-quote" />
              </div>
            </div>
            <ul className="client-rating d-flex align-items-center justify-content-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <h3>"Pioneers in AI Integration Services"</h3>
            <p className="text">
              "Their advanced AI solutions helped us streamline operations and
              improve user experiences effortlessly."
            </p>
            <div className="client-info">
              <h4>William Jekson</h4>
              <p>Product Manager</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="200ms"
          >
            <img className="shape-1" src="assets/img/shape/shape-11.png" alt />
            <div className="client-img center">
              <img src="assets/img/testimonial/05.png" alt="client-img" />
              <div className="icon">
                <i className="flaticon-quote" />
              </div>
            </div>
            <ul className="client-rating d-flex align-items-center justify-content-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <h3>"Exceptional Service for AI Innovation"</h3>
            <p className="text">
              "Integrating their AI solutions revolutionized our workflows,
              unlocking new efficiency and productivity levels."
            </p>
            <div className="client-info">
              <h4>Steve Smit</h4>
              <p>Product Manager</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="200ms"
          >
            <img className="shape-1" src="assets/img/shape/shape-11.png" alt />
            <div className="client-img center">
              <img src="assets/img/testimonial/06.png" alt="client-img" />
              <div className="icon">
                <i className="flaticon-quote" />
              </div>
            </div>
            <ul className="client-rating d-flex align-items-center justify-content-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <h3>
              "Top AI Partner for <br /> Growth"
            </h3>
            <p className="text">
              "Their AI-driven insights helped us make smarter decisions,
              boosting our overall business performance."
            </p>
            <div className="client-info">
              <h4>Will Jacks</h4>
              <p>Product Manager</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div
            className="single-testimonial-item wow fadeInUp"
            data-wow-delay="200ms"
          >
            <img className="shape-1" src="assets/img/shape/shape-11.png" alt />
            <div className="client-img center">
              <img src="assets/img/testimonial/01.png" alt="client-img" />
              <div className="icon">
                <i className="flaticon-quote" />
              </div>
            </div>
            <ul className="client-rating d-flex align-items-center justify-content-center">
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
              <li>
                <i className="fas fa-star" />
              </li>
            </ul>
            <h3>"Pioneers in AI Integration Services"</h3>
            <p className="text">
              "Integrating their AI solutions revolutionized our workflows,
              unlocking new efficiency and productivity levels."
            </p>
            <div className="client-info">
              <h4>Michael Jon</h4>
              <p>Product Manager</p>
            </div>
          </div>
        </SwiperSlide>
      </div>
    </Swiper>
  );
};
