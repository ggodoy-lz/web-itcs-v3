import AboutMe from "@/components/AboutMe";
import Blog from "@/components/Blog";
import ChooseUs from "@/components/ChooseUs";
import Pagebanner from "@/components/Pagebanner";
import BrandSlider from "@/components/slider/BrandSlider";
import TextSlider, { TextSlider2 } from "@/components/slider/TextSlider";
import { TeamMember2 } from "@/components/TeamMember";
import ZotechLayout from "@/layout/ZotechLayout";
const page = () => {
  return (
    <ZotechLayout>
      <Pagebanner pageName="Quiénes somos" />
      <AboutMe />
      <div className="marquee-section section-padding pt-4">
        <div className="marque-wrapper">
          <TextSlider />
        </div>
        <div className="marque-wrapper style-2 mt-3 ">
          <TextSlider2 />
        </div>
      </div>
      {/* Team Section Start */}
      <TeamMember2 />
      {/* Choose-us Section Start */}
      <ChooseUs wrapperclass="choose-us-wrapper choose-us-3 section-padding section-bg choose-us-page" />
      {/* Brand Section Start */}
      <section className="brand-wrapper brand-1 style-3 section-padding">
        <div className="shape">
          <img className="shape-1" src="assets/img/shape/shape-20.png" alt="" />
        </div>
        <div className="container">
          <div className="brand-inner">
            <p className="text-center mb-5 title">
              Más de 500 clientes acompañados y alianzas con marcas de clase
              mundial
            </p>
            <BrandSlider />
          </div>
        </div>
      </section>
      {/* Blog Section Start */}
      <Blog />
    </ZotechLayout>
  );
};
export default page;
