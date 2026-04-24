import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Pagebanner from "@/components/Pagebanner";
import ZotechLayout from "@/layout/ZotechLayout";
const page = () => {
  return (
    <ZotechLayout cta={false}>
      <Pagebanner pageName="Contacto" />
      {/* Contact Info Section Start */}
      <section className="contact-page-wrap section-padding">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-contact-card d-flex align-items-center">
                <div className="icon">
                  <i className="flaticon-telephone" />
                </div>
                <div className="title">
                  <span>Teléfono</span>
                  <h4>+595 21 728-8222</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-contact-card d-flex align-items-center">
                <div className="icon">
                  <i className="flaticon-location" />
                </div>
                <div className="title">
                  <span>Ubicación</span>
                  <h4>Barrio Virgen del Huerto, Asunción, Paraguay</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="single-contact-card d-flex align-items-center">
                <div className="icon">
                  <i className="flaticon-email" />
                </div>
                <div className="title">
                  <span>Correo</span>
                  <h4>info@itcs.com.py</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact-us Section Start */}
      <Contact />
      {/* Map Section Start */}
      <div className="office-google-map-wrapper wow fadeInUp">
        <iframe
          title="Mapa Asunción — iTCS S.A."
          src="https://www.google.com/maps?q=Asunción,+Paraguay&output=embed"
          style={{ border: 0, width: "100%", minHeight: 400 }}
          allowFullScreen=""
          loading="lazy"
        />
      </div>
      <CTA wrapperClass="cta-wrapper cta-2 style-3 section-bg cta-contact-map" />
    </ZotechLayout>
  );
};
export default page;
