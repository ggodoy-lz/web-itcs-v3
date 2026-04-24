const ChooseUs = ({
  wrapperclass = "choose-us-wrapper choose-us-3 section-padding",
}) => {
  return (
    <section className={`${wrapperclass} itcs-choose-mvv-section`.trim()}>
      <div className="container">
        <div className="row g-5">
          <div
            className="col-xl-6 col-lg-12 col-md-12 mt-xl-4 wow fadeInLeft"
            data-wow-delay="300ms"
          >
            <div className="choose-us-content ms-xl-4 ps-xl-1">
              <div className="section-title">
                <div className="sub-title">
                  <span>POR QUÉ ELEGIR iTCS</span>
                </div>
                <h2 className="split-text right">
                  Aliados y partners <br />
                  con respaldo de <br />
                  fabricantes líderes
                </h2>
              </div>
              <p className="mt-4">
                Las alianzas con los principales fabricantes nos permiten
                ofrecer las mejores soluciones con soporte certificado en
                Paraguay: Sophos, Veeam, HPE, VMware, Microsoft, Aruba y otras
                marcas.
              </p>
              <div className="reviews d-flex mt-4 pt-3">
                <div className="infu">
                  <img src="assets/img/why-choose/04.png" alt="" />
                  <h4>
                    16+ partners
                    <br />
                    y alianzas de clase mundial
                  </h4>
                </div>
                <div className="infu">
                  <div className="head d-flex align-items-center">
                    <div className="icon">
                      <i className="flaticon-world" />
                    </div>
                    <h4>20+ años de alianzas</h4>
                  </div>
                  <p>
                    Construyendo relaciones técnicas y certificaciones de
                    partner en la región.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-12 col-md-12 wow fadeInRight"
            data-wow-delay="300ms"
          >
            <div className="itcs-choose-mvv">
              <div className="row g-3 g-md-4">
                <div className="col-xl-6 col-lg-6 col-md-6 mt-xl-4">
                  <div className="itcs-mvv-card">
                    <h4>Misión</h4>
                    <p>
                      Llevar tecnología de clase mundial a empresas
                      paraguayas con ingenieros locales certificados.
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="itcs-mvv-card">
                    <h4>Visión</h4>
                    <p>
                      Ser el socio tecnológico preferido en transformación
                      digital y ciberdefensa en Paraguay.
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 mt-xl-4">
                  <div className="itcs-mvv-card">
                    <h4>Estrategia</h4>
                    <p>
                      Inversión en certificaciones, laboratorio e integración
                      con ecosistemas de partners globales.
                    </p>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                  <div className="itcs-mvv-card">
                    <h4>Valores &amp; ISO</h4>
                    <p>
                      Trabajamos bajo SGI: calidad (ISO 9001) y seguridad de
                      la información (ISO 27001) al servicio de nuestros
                      clientes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default ChooseUs;
