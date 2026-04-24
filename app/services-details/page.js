import Pagebanner from "@/components/Pagebanner";
import WorkingProcess from "@/components/WorkingProcess";
import ZotechLayout from "@/layout/ZotechLayout";
const page = () => {
  return (
    <ZotechLayout>
      <Pagebanner pageName="Detalle de servicio" />
      {/* service Section Start */}
      <section className="service-details-section fix section-padding">
        <div className="container">
          <div className="service-details-wrapper">
            <div className="row g-5 justify-content-center">
              <div className="section-title text-center">
                <h2>
                  Acompañamiento de extremo
                  <br /> a extremo
                </h2>
                <p>
                  iTCS S.A. acompaña a organizaciones de Paraguay en consultoría,
                  implementación y soporte técnico, bajo nuestro SGI de calidad
                  (ISO 9001) y seguridad de la información (ISO 27001).
                </p>
              </div>
              <div className="col-lg-12">
                <div className="service-details-image">
                  <img src="assets/img/service/details-1.jpg" alt="img" />
                </div>
              </div>
              <div className="col-lg-10">
                <div className="service-details-content">
                  <h4>Propuesta, diseño, implementación y operación</h4>
                  <p className="mt-3">
                    Desde un primer diagnóstico hasta el soporte reactivo y
                    proactivo, articulamos equipos, licenciamiento, redes,
                    ciberdefensa, bases de datos y continuidad con partners como
                    Sophos, Veeam, HPE, Aruba, VMware, Microsoft, ManageEngine y
                    Samsung, entre otros.
                  </p>
                  <p className="mt-3">
                    Cada alcance se documenta, prueba y pasa a operación con
                    transferencia a su equipo, monitoreo y revisiones
                    periódicas, según su contrato. Los precios y plazos se
                    acuerdan caso a caso: no ofrecemos “planes” fijos con tarifas
                    preimpresas.
                  </p>
                  <div className="service-details-video">
                    <div className="row g-4">
                      <div className="col-lg-6">
                        <div className="video-image pe-xxl-5">
                          <img
                            src="assets/img/service/details-2.jpg"
                            alt="img"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="details-video-content ">
                          <div className="section-title">
                            <h2>Soluciones reales, ingenieros locales</h2>
                            <p className="pt-4">
                              Más de 30 profesionales y decenas de clientes
                              satisfechos; soporte 24/7 con SLA bajo acuerdo
                              escrito; oficina en el Barrio Virgen del Huerto,
                              Asunción.
                            </p>
                          </div>
                          <div className="feedback">
                            <div className="infu ">
                              <img src="assets/img/about/06.png" alt="" />
                              <h6>
                                500+ clientes; 1.200+ proyectos
                                <br />
                                referidos en datos corporativos
                              </h6>
                            </div>
                            <div className="infu">
                              <div className="icon-box d-flex align-items-center">
                                <div className="icon">
                                  <i className="flaticon-cms" />
                                </div>
                                <h6>ISO 9001 / ISO 27001</h6>
                              </div>
                              <p>
                                Políticas revisadas anualmente por la Alta
                                Dirección, según nuestro SGI.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Process Section Start */}
      <WorkingProcess />
    </ZotechLayout>
  );
};
export default page;
