"use client";
import { sliderProps } from "@/utility/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";

/** Coherente con el bloque “Experiencia en entornos reales” (home): marcas y líneas de solución. */
const CASE_STUDY_BRAND_SLIDES = [
  {
    delay: "200ms",
    tag: "BACKUP & CONTINUIDAD",
    title: "Replicación, DR inmutable y nubes con Veeam",
    href: "/products",
    logo: "assets/img/brand/veeam.svg",
    brand: "Veeam",
  },
  {
    delay: "300ms",
    tag: "CIBERSEGURIDAD",
    title: "Firewall, EDR y defensa en profundidad con Sophos",
    href: "/products",
    logo: "assets/img/brand/sophos.png",
    brand: "Sophos",
  },
  {
    delay: "400ms",
    tag: "INFRAESTRUCTURA",
    title: "Servidores, almacenamiento y cómputo con HPE",
    href: "/products",
    logo: "assets/img/brand/hpe.svg",
    brand: "HPE",
  },
  {
    delay: "500ms",
    tag: "NETWORKING",
    title: "Wi‑Fi, switching y conectividad con Aruba (HPE)",
    href: "/products",
    logo: "assets/img/brand/hpe.svg",
    brand: "Aruba",
  },
  {
    delay: "600ms",
    tag: "GESTIÓN IT",
    title: "Monitoreo, ITSM y operación con ManageEngine (Zoho)",
    href: "/partners",
    logo: "assets/img/brand/manageengine.svg",
    brand: "ManageEngine",
  },
];

const CaseStudySlider = () => {
  const slides = [...CASE_STUDY_BRAND_SLIDES, ...CASE_STUDY_BRAND_SLIDES];
  return (
    <Swiper {...sliderProps.caseStudy} className="swiper caseStudy">
      {slides.map((item, i) => (
        <SwiperSlide className="swiper-slide" key={`${item.brand}-${i}`}>
          <div
            className="single-case-item  wow fadeInUp"
            data-wow-delay={item.delay}
          >
            <div className="image">
              <img src={item.logo} alt={item.brand} />
            </div>
            <div className="content d-flex align-items-center justify-content-between">
              <div className="title">
                <span>{item.tag}</span>
                <h4>
                  <Link href={item.href}>{item.title}</Link>
                </h4>
              </div>
              <Link href={item.href} className="icon" aria-label="Ver más">
                <i className="far fa-long-arrow-right" />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-dot mt-5 pt-5 border-style center">
        <div className="dot" />
      </div>
    </Swiper>
  );
};
export default CaseStudySlider;

export const CaseStudySlider2 = () => {
  const slides = CASE_STUDY_BRAND_SLIDES;
  return (
    <Swiper {...sliderProps.caseStudy2} className="swiper caseStudy2">
      {slides.map((item, i) => (
        <SwiperSlide className="swiper-slide" key={`cs2-${item.brand}-${i}`}>
          <div
            className="single-case-item wow fadeInUp"
            data-wow-delay={item.delay}
          >
            <div className="image">
              <img src={item.logo} alt={item.brand} />
            </div>
            <div className="content d-flex align-items-center justify-content-between">
              <div className="title">
                <span>{item.tag}</span>
                <h4>
                  <Link href={item.href}>{item.title}</Link>
                </h4>
              </div>
              <Link href={item.href} className="icon" aria-label="Ver más">
                <i className="far fa-long-arrow-right" />
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <div className="swiper-dot mt-5  border-style center">
        <div className="dot" />
      </div>
    </Swiper>
  );
};
