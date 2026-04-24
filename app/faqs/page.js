import Contact from "@/components/Contact";
import Pagebanner from "@/components/Pagebanner";
import {
  Home2Accordion,
  itcsFaqCalidad,
  itcsFaqSeguridad,
} from "@/components/ZotechAccordion";
import ZotechLayout from "@/layout/ZotechLayout";
const page = () => {
  return (
    <ZotechLayout>
      <Pagebanner pageName="Políticas y preguntas frecuentes" />
      {/* FAQ Section Start */}
      <section className="faq-wrapper faq-1 style-2 section-padding">
        <div className="container">
          <div className="section-title text-center">
            <div className="sub-title">
              <span>CALIDAD Y SEGURIDAD</span>
            </div>
            <h2>
              SGI, ISO 9001 e ISO 27001 — <br />
              Preguntas frecuentes
            </h2>
          </div>
          <div className="row g-5">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <h3 className="h4 mb-3">Política de calidad (ISO 9001:2015)</h3>
              <div className="faq-content me-xl-4 mt-xl-0">
                <div className="faq-accordion mt-4 mt-md-0">
                  <Home2Accordion items={itcsFaqCalidad} />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <h3 className="h4 mb-3">
                Política de seguridad de la información (ISO 27001:2022)
              </h3>
              <div className="faq-content ms-xl-4 mt-xl-0">
                <div className="faq-accordion mt-4 mt-md-0">
                  <Home2Accordion items={itcsFaqSeguridad} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section Start */}
      <Contact />
    </ZotechLayout>
  );
};
export default page;
