const WorkingProcess = ({
  wrapperClass = "process-wrapper process-2 section-padding section-bg",
}) => {
  return (
    <section className={wrapperClass}>
      <div className="container">
        <div className="section-title text-center">
          <div className="sub-title">
            <span>PROCESO</span>
          </div>
          <h2 className="split-text right">Cómo abordamos su proyecto (4 etapas)</h2>
        </div>
        <div className="row mt-4">
          <div
            className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
            data-wow-delay="200ms"
          >
            <div className="signle-process-item pe-xl-4">
              <img
                className="shape-1"
                src="assets/img/process/shape-6.png"
                alt=""
              />
              <div className="icons">
                <div className="icon-1">
                  <i className="flaticon-conversation" />
                </div>
                <div className="icon-2">01</div>
              </div>
              <h4 className="mb-2">Descubrimiento</h4>
              <p>
                Talleres con su equipo, entrevistas y relevamiento para alinear
                requisitos y riesgos.
              </p>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-6 col-md-6 mt-xl-5  wow fadeInUp"
            data-wow-delay="400ms"
          >
            <div className="signle-process-item pe-xl-3 ps-xl-2 ">
              <img
                className="shape-2"
                src="assets/img/process/shape-7.png"
                alt=""
              />
              <div className="icons">
                <div className="icon-1">
                  <i className="flaticon-cms" />
                </div>
                <div className="icon-2">02</div>
              </div>
              <h4 className="mb-2">Diseño y pruebas</h4>
              <p>
                Arquitectura, pilotos, hardening y validación antes de producción.
              </p>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-6 col-md-6  wow fadeInUp"
            data-wow-delay="600ms"
          >
            <div className="signle-process-item ps-xl-3 pe-xl-2">
              <img
                className="shape-1"
                src="assets/img/process/shape-6.png"
                alt=""
              />
              <div className="icons">
                <div className="icon-1">
                  <i className="flaticon-maintenance" />
                </div>
                <div className="icon-2">03</div>
              </div>
              <h4 className="mb-2">Implementación</h4>
              <p>
                Despliegue en ventana acordada, cutover, migración y
                documentación.
              </p>
            </div>
          </div>
          <div
            className="col-xl-3 col-lg-6 col-md-6 mt-xl-5  wow fadeInUp"
            data-wow-delay="400ms"
          >
            <div className="signle-process-item ps-xl-4">
              <div className="icons">
                <div className="icon-1">
                  <i className="flaticon-positive-review" />
                </div>
                <div className="icon-2">04</div>
              </div>
              <h4 className="mb-2">Operación y mejora</h4>
              <p>
                Reuniones de servicio, KPIs, lecciones aprendidas y hoja de ruta
                continua bajo SGI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WorkingProcess;
