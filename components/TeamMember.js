import Link from "next/link";

const teamMembers = [
  {
    role: "Marketing Manager",
    name: "Emma Taylor",
    image: "assets/img/team/05.jpg",
    delay: "200ms",
  },
  {
    role: "Fleet Supervisor",
    name: "James Anderson",
    image: "assets/img/team/06.jpg",
    delay: "400ms",
  },
  {
    role: "Warehouse Manager",
    name: "Sophia Brown",
    image: "assets/img/team/07.jpg",
    delay: "600ms",
  },
  {
    role: "Marketing Manager",
    name: "Christopher Mark",
    image: "assets/img/team/08.jpg",
    delay: "800ms",
  },
];

const TeamMember = () => {
  return (
    <section className="team-wrapper team-2 section-padding pt-0">
      <div className="container">
        <div className="section-title text-center">
          <div className="sub-title">
            <span>OUR TEAM MEMBER</span>
          </div>
          <h2 className="split-text right">Meet with Our Expert</h2>
          <p className="text-center">
            Accelerate innovation with world-class tech teams We’ll match you{" "}
            <br /> to an entire remote team of incredible freelance.
          </p>
        </div>
        <div className="row mt-4">
          <Team teamMembers={teamMembers} />
        </div>
      </div>
    </section>
  );
};

export default TeamMember;

export const Team = ({ teamMembers }) => {
  return (
    <div className="row mt-4">
      {teamMembers.map((member, index) => (
        <div
          key={index}
          className="col-xl-3 col-lg-4 col-md-6 col-12 wow fadeInUp"
          data-wow-delay={member.delay}
        >
          <div className="single-team-item">
            <img className="shape-1" src="assets/img/shape/shape-11.png" alt />
            <div className="team-image">
              <img src={member.image} alt />
            </div>
            <div className="content">
              <p>{member.role}</p>
              <h4>
                <Link href="/teams-details">{member.name}</Link>
              </h4>
              <div className="social d-flex align-items-center justify-content-center">
                <a href="#">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-dribbble" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const TeamMember2 = () => {
  return (
    <section className="team-wrapper team-1 section-padding">
      <div className="shape-1">
        <img src="assets/img/shape/shape-15.png" alt />
      </div>
      <div className="container">
        <div className="section-title text-center">
          <div className="sub-title">
            <span>NUESTRO EQUIPO</span>
          </div>
          <h2 className="split-text left">Perfiles técnicos y de consultoría</h2>
        </div>
        <p className="text-center">
          Más de 30 profesionales, con ingenieros certificados en Sophos, Veeam,
          HPE, Microsoft y otras marcas, en Asunción, Paraguay.
        </p>
        <div className="row">
          {[
            {
              image: "assets/img/team/01.jpg",
              role: "Infraestructura y nube",
              name: "Equipo de ingeniería certificado (HPE, VMware, Microsoft)",
              delay: "200ms",
            },
            {
              image: "assets/img/team/02.jpg",
              role: "Ciberseguridad",
              name: "Especialistas Sophos, hardening y respuesta a incidentes",
              delay: "400ms",
            },
            {
              image: "assets/img/team/03.jpg",
              role: "Redes y conectividad",
              name: "Diseño e implementación con Aruba, cableado estructurado",
              delay: "600ms",
            },
            {
              image: "assets/img/team/04.jpg",
              role: "Continuidad y datos",
              name: "Backup, replicación y Veeam con enfoque anti-ransomware",
              delay: "800ms",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay={member.delay}
            >
              <div className="single-team-item">
                {/* Sin capas .shape-2/3: el tema las mostraba al hover y tapaban la foto. */}
                <div className="team-image">
                  <div className="image">
                    <img src={member.image} alt="Equipo iTCS" />
                  </div>
                  <div className="social-icon">
                    <a href="mailto:info@itcs.com.py" aria-label="Correo iTCS">
                      <i className="fal fa-envelope" />
                    </a>
                  </div>
                </div>
                <div className="content text-center pt-3">
                  <p className="team-card__role">{member.role}</p>
                  <h3 className="h6 px-2 team-card__byline">{member.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
