"use client";
import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

/** Mismas rutas que `app/partners/page.js` — archivos en `public/assets/img/brand/` */
const PARTNER_LOGOS = [
  { src: "assets/img/brand/sophos.png", alt: "Sophos" },
  { src: "assets/img/brand/veeam.svg", alt: "Veeam" },
  { src: "assets/img/brand/vmware.svg", alt: "VMware" },
  { src: "assets/img/brand/manageengine.svg", alt: "ManageEngine" },
  { src: "assets/img/brand/hpe.svg", alt: "HPE" },
  { src: "assets/img/brand/microsoft.svg", alt: "Microsoft" },
  { src: "assets/img/brand/hp.svg", alt: "HP" },
  { src: "assets/img/brand/samsung.svg", alt: "Samsung" },
  { src: "assets/img/brand/adobe.svg", alt: "Adobe" },
  { src: "assets/img/brand/redhat.svg", alt: "Red Hat" },
  { src: "assets/img/brand/cisco.svg", alt: "Cisco" },
  { src: "assets/img/brand/yeastar.png", alt: "Yeastar" },
  { src: "assets/img/brand/everexceed.png", alt: "EverExceed" },
  { src: "assets/img/brand/cet.png", alt: "CE+T" },
  { src: "assets/img/brand/commscope.png", alt: "CommScope" },
  { src: "assets/img/brand/ibm.svg", alt: "IBM" },
  { src: "assets/img/brand/qnap.svg", alt: "QNAP" },
  { src: "assets/img/brand/synology.svg", alt: "Synology" },
  { src: "assets/img/brand/vcp.png", alt: "VCP Technology" },
];

const BrandSlider = ({ size = "default" }) => {
  const sw =
    size === "lg" ? sliderProps.BrandSliderLg : sliderProps.BrandSlider;
  const slides = [...PARTNER_LOGOS, ...PARTNER_LOGOS];
  return (
    <Swiper
      {...sw}
      className={
        size === "lg"
          ? "swiper brand-slider brand-slider--lg mt-4 pt-4"
          : "swiper brand-slider mt-4 pt-3"
      }
    >
      {slides.map((item, i) => (
        <SwiperSlide className="swiper-slide" key={`${item.alt}-${i}`}>
          <div className="brand-logo">
            <img src={item.src} alt={item.alt} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default BrandSlider;

export const BrandSlider2 = () => {
  const slides = [...PARTNER_LOGOS, ...PARTNER_LOGOS];
  return (
    <Swiper {...sliderProps.BrandSlider} className="swiper brand-slider">
      {slides.map((item, i) => (
        <SwiperSlide className="swiper-slide" key={`b2-${item.alt}-${i}`}>
          <div className="brand-logo">
            <img src={item.src} alt={item.alt} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
