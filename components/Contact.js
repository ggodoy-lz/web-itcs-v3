import PriceRanger from "./PriceRanger";

const Contact = ({
  wrapperClass = "contact-us-wrapper contact-us-1 section-padding pt-0",
}) => {
  return (
    <section className={wrapperClass}>
      <div className="shape">
        <img className="shape-1" src="assets/img/world.png" alt="" />
        <img className="shape-2" src="assets/img/shape/shape-15.png" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div
            className="col-xl-6 col-lg-6 col-md-12 mt-4 wow fadeInLeft"
            data-wow-delay="300ms"
          >
            <div className="section-title">
              <div className="sub-title">
                <span>CONTACTO</span>
              </div>
              <h2 className="split-text right">
                Solicite más información
                <br />
                o una reunión con nuestro equipo
              </h2>
            </div>
            <div className="contact-us-content pt-4 mt-3">
              <div className="infu-box d-flex align-items-center">
                <div className="icon">
                  <i className="flaticon-telephone" />
                </div>
                <div className="infu">
                  <p>Teléfono</p>
                  <h3>+595 21 728-8222</h3>
                </div>
              </div>
              <div className="infu-box d-flex align-items-center">
                <div className="icon">
                  <i className="flaticon-location" />
                </div>
                <div className="infu">
                  <p>Ubicación</p>
                  <h3>Barrio Virgen del Huerto, Asunción, Paraguay</h3>
                </div>
              </div>
              <div className="infu-box d-flex align-items-center">
                <div className="icon">
                  <i className="flaticon-email" />
                </div>
                <div className="infu">
                  <p>Correo</p>
                  <h3>info@itcs.com.py</h3>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-xl-6 col-lg-6 col-md-12  wow fadeInRight"
            data-wow-delay="300ms"
          >
            <div className="contact-right mt-4 mt-md-0">
              <h3>Envíe su mensaje</h3>
              <form action="#" id="contact-form" method="POST">
                <div className="row g-3">
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Nombre y apellido*"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <input
                        type="text"
                        name="empresa"
                        id="empresa"
                        placeholder="Empresa (opcional)"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Correo electrónico*"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6 ">
                    <div className="form-clt">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        placeholder="Teléfono*"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-clt">
                      <div className="nice-select" tabIndex={0}>
                        <span className="current">Asunto</span>
                        <ul className="list">
                          <li data-value={1} className="option selected">
                            Infraestructura
                          </li>
                          <li data-value={1} className="option">
                            Ciberseguridad
                          </li>
                          <li data-value={1} className="option">
                            Networking
                          </li>
                          <li data-value={1} className="option">
                            Backup
                          </li>
                          <li data-value={1} className="option">
                            Productos
                          </li>
                          <li data-value={1} className="option">
                            Soporte
                          </li>
                          <li data-value={1} className="option">
                            Desarrollo
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-clt-big form-clt">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Mensaje*"
                        defaultValue={""}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <p className="small text-muted">
                      RR.HH.:{" "}
                      <a href="mailto:rrhh@itcs.com.py">rrhh@itcs.com.py</a>
                    </p>
                    <button type="submit" className="theme-btn black-btn">
                      Enviar mensaje
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;

export const Contact2 = () => {
  return (
    <section className="contact-us-wrapper contact-us-2 section-padding">
      <div className="shape">
        <img className="shape-1" src="assets/img/shape/shape-21.png" alt />
        <img className="shape-2" src="assets/img/shape/shape-11.png" alt />
        <img className="shape-3" src="assets/img/shape/shape-22.png" alt />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <div className="sub-title">
            <span>CONTACT US</span>
          </div>
          <h2 className="split-text right">
            Dealing in All <br /> Professional IT Services
          </h2>
        </div>
        <div className="contact-us-inner">
          <div className="row g-5">
            <div
              className="col-xl-6 col-lg-12 col-md-12 pe-xl-0 wow fadeInLeft"
              data-wow-delay="300ms"
            >
              <div className="contact-left">
                <form action="#" id="contact-form" method="POST">
                  <div className="row g-4">
                    <div
                      className="col-lg-6 pe-0 wow fadeInUp"
                      data-wow-delay=".2"
                    >
                      <span>First Name</span>
                      <div className="form-clt">
                        <input
                          type="text"
                          name="name"
                          placeholder="First Name"
                        />
                      </div>
                    </div>
                    <div
                      className="col-lg-6 pe-0 wow fadeInUp"
                      data-wow-delay=".6"
                    >
                      <span>Last Name</span>
                      <div className="form-clt">
                        <input
                          type="text"
                          name="name"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div
                      className="col-lg-12 pe-0 wow fadeInUp"
                      data-wow-delay=".4"
                    >
                      <span>Your Email</span>
                      <div className="form-clt">
                        <input type="email" name="email" placeholder="Email" />
                      </div>
                    </div>
                    <div
                      className="col-lg-6 pe-0 wow fadeInUp"
                      data-wow-delay=".2"
                    >
                      <span>Phone Number</span>
                      <div className="form-clt">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Phone"
                        />
                      </div>
                    </div>
                    <div
                      className="col-lg-6 pe-0 wow fadeInUp"
                      data-wow-delay=".6"
                    >
                      <span>Country</span>
                      <div className="form-clt">
                        <input
                          type="text"
                          name="phone"
                          placeholder="Your Country"
                        />
                      </div>
                    </div>
                  </div>
                </form>
                <div className="categories mt-4 pt-3">
                  <span className="fw-semibold">
                    What's the type of your company?
                  </span>
                  <div className="categories-items mt-2">
                    <div className="single-item">It Company</div>
                    <div className="single-item">Business</div>
                    <div className="single-item">Cyber Security</div>
                    <div className="single-item">Other</div>
                  </div>
                </div>
                <div className="checked-box mt-4 pt-3">
                  <span className="fw-semibold">What you need from us?</span>
                  <div className="checked-box-items mt-2">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                      />
                      <label className="form-check-label">App Design</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                      />
                      <label className="form-check-label">
                        Digital Marketing
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                      />
                      <label className="form-check-label">UI/UX Design</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                      />
                      <label className="form-check-label">Cloud service</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        defaultValue
                      />
                      <label className="form-check-label">Other Services</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-xl-6 col-lg-12 col-md-12 wow fadeInRight"
              data-wow-delay="300ms"
            >
              <div className="contact-right ps-xl-5 ms-xl-3">
                <PriceRanger />
                <div
                  className="col-lg-12 wow fadeInUp mt-4"
                  data-wow-delay=".8"
                >
                  <span>Your Message</span>
                  <div className="form-clt-big form-clt">
                    <textarea
                      name="message"
                      id="message"
                      placeholder="Write a Message"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="form-check mt-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue
                  />
                  <label className="form-check-label">
                    Click the box and agree to our&nbsp;terms and conditions
                  </label>
                </div>
                <div className="contact-btn d-flex align-items-center justify-content-between flex-wrap  mt-4">
                  <button type="submit" className="theme-btn black-btn">
                    Send Message
                  </button>
                  <div className="infu pt-xxl-0 pt-3">
                    <img src="assets/img/Avatar.png" alt />
                    <p>Meet With Expert</p>
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
