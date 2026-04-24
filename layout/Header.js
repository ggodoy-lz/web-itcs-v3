"use client";
import ThemeToggle from "@/components/ThemeToggle";
import { zotechUtility } from "@/utility";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
const Header = ({ header }) => {
  useEffect(() => {
    zotechUtility.serarchpopup();
  }, []);

  const HeaderComponent =
    [Header1, Header2, Header3, Header4][header - 1] || Header1;
  return (
    <>
      <HeaderComponent />
      <MobileMenu />
      <SearchPoppup />
    </>
  );
};
export default Header;

const Header1 = () => {
  return (
    <Fragment>
      {/* Topbar Section Start */}
      <div className="topbar">
        <div className="container">
          <div className="topbar-inner d-flex align-items-center justify-content-between">
            <ul>
              <li>
                <i className="fal fa-phone-alt" />
                <a href="tel:+595217288222">+595 21 728-8222</a>
              </li>
              <li>
                <i className="fal fa-map-marker-alt" />
                <a
                  href="https://maps.google.com/?q=Asunción+Paraguay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Barrio Virgen del Huerto, Asunción, Paraguay
                </a>
              </li>
              <li>
                <i className="far fa-clock" />
                <span>Lun–Vie · 08:00–18:00 hs</span>
              </li>
            </ul>
            {/* /.topbar__info */}
            <div className="d-flex align-items-center gap-3 topbar__actions">
              <ThemeToggle />
            <div className="social">
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
          {/* /.topbar__inner */}
        </div>
        {/* /.container */}
      </div>
      {/* Header Section Start */}
      <header>
        <div id="header-sticky" className="header-1">
          <div className="container">
            <div className="mega-menu-wrapper">
              <div className="header-main ">
                <div className="header-left">
                  <div className="logo">
                    <Link href="/" className="header-logo">
                      <img
                        src="assets/img/logo/black-logo.png"
                        alt="logo-img"
                      />
                    </Link>
                  </div>
                </div>
                <div className="header-right">
                  <div className="mean__menu-wrapper">
                    <Menu />
                  </div>
                  <a href="#0" className="search-trigger search-icon">
                    <i className="fal fa-search" />
                  </a>
                  <div className="header-button  d-none d-sm-block">
                    <Link href="/contact" className="theme-btn black-btn">
                      Contacto
                    </Link>
                  </div>
                  <div className="header__hamburger d-xl-none my-auto">
                    <div className="sidebar__toggle">
                      <i className="fas fa-bars" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

const Header2 = () => {
  return (
    <header>
      <div id="header-sticky" className="header-2">
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main ">
              <div className="header-left">
                <div className="logo">
                  <Link href="/" className="header-logo">
                    <img src="assets/img/logo/white-logo.png" alt="logo-img" />
                  </Link>
                </div>
              </div>
              <div className="header-right">
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <Menu />
                    </nav>
                  </div>
                </div>
                <a href="#0" className="search-trigger search-icon">
                  <i className="fal fa-search" />
                </a>
                <div className="header-button  d-none d-sm-block">
                  <div className="contact-us ">
                    <a href className="icon">
                      <i className="far fa-phone-alt" />
                    </a>
                    <div className="title">
                      <p>Teléfono:</p>
                      <span>+595 21 728-8222</span>
                    </div>
                  </div>
                </div>
                <div className="header__hamburger d-xl-none my-auto">
                  <div className="sidebar__toggle">
                    <i className="fas fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Header3 = () => {
  return (
    <Fragment>
      {/* Topbar Section Start */}
      <div className="topbar style-2">
        <div className="container-fluid">
          <div className="topbar-inner d-flex align-items-center justify-content-between">
            <p>
              ISO 9001:2015 · ISO 27001:2022 — Soluciones IT en Paraguay.
            </p>
            <div className="topbar-right d-flex align-items-center">
              <ul>
                <li>
                  <i className="fal fa-phone-alt" />
                  <a href="tel:+595217288222">+595 21 728-8222</a>
                </li>
                <li>
                  <i className="fal fa-map-marker-alt" />
                  <a
                    href="https://maps.google.com/?q=Asunción+Paraguay"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Asunción, Paraguay
                  </a>
                </li>
                <li>
                  <i className="far fa-clock" />
                  <span>Lun–Vie · 08:00–18:00 hs</span>
                </li>
              </ul>
              {/* /.topbar__info */}
              <div className="social">
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
          {/* /.topbar__inner */}
        </div>
        {/* /.container */}
      </div>
      {/* Header Section Start */}
      <header>
        <div id="header-sticky" className="header-2 style-3">
          <div className="container-fluid">
            <div className="mega-menu-wrapper">
              <div className="header-main ">
                <div className="header-left">
                  <div className="logo">
                    <Link href="/" className="header-logo">
                      <img
                        src="assets/img/logo/white-logo-2.png"
                        alt="logo-img"
                      />
                    </Link>
                  </div>
                  <div className="mean__menu-wrapper">
                    <Menu />
                  </div>
                </div>
                <div className="header-right">
                  <a href="#0" className="search-trigger search-icon">
                    <i className="fal fa-search" />
                  </a>
                  <div className="header-button d-none d-md-block">
                    <Link href="/contact" className="theme-btn black-btn">
                      Contacto
                    </Link>
                  </div>
                  <div className="header__hamburger d-xl-none my-auto">
                    <div className="sidebar__toggle">
                      <i className="fas fa-bars" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </Fragment>
  );
};

const Header4 = () => {
  return (
    <header>
      <div id="header-sticky" className="header-2 style-3">
        <div className="container-fluid">
          <div className="mega-menu-wrapper">
            <div className="header-main ">
              <div className="header-left">
                <div className="logo">
                  <Link href="/" className="header-logo">
                    <img
                      src="assets/img/logo/white-logo-2.png"
                      alt="logo-img"
                    />
                  </Link>
                </div>
                <div className="mean__menu-wrapper">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                      <Menu />
                    </nav>
                  </div>
                </div>
              </div>
              <div className="header-right">
                <div className="contact-us d-flex align-items-center">
                  <a href className="icon">
                    <i className="far fa-phone-alt" />
                  </a>
                  <div className="title">
                    <p>Teléfono:</p>
                    <span>+595 21 728-8222</span>
                  </div>
                </div>
                <a href="#0" className="search-trigger search-icon">
                  <i className="fal fa-search" />
                </a>
                <div className="header-button d-none d-sm-block">
                  <Link href="/contact" className="theme-btn black-btn theme-btn-2">
                    Contacto
                  </Link>
                </div>
                <div className="header__hamburger d-xl-none my-auto">
                  <div className="sidebar__toggle">
                    <i className="fas fa-bars" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Menu = () => {
  return (
    <div className="main-menu">
      <nav id="mobile-menu" className="d-none d-xl-block">
        <ul>
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li className="has-dropdown">
            <a href="#">
              Empresa
              <i className="fas fa-angle-down" />
            </a>
            <ul className="submenu">
              <li>
                <Link href="/about">Quiénes somos</Link>
              </li>
              <li>
                <Link href="/about#certificaciones">Certificaciones</Link>
              </li>
              <li>
                <Link href="/faqs">Políticas ISO</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/partners">Partners</Link>
          </li>
          <li className="has-dropdown">
            <a href="#">
              Servicios
              <i className="fas fa-angle-down" />
            </a>
            <ul className="submenu">
              <li>
                <Link href="/services">Resumen de servicios</Link>
              </li>
              <li>
                <Link href="/services-details">Detalle de servicio</Link>
              </li>
            </ul>
          </li>
          <li className="has-dropdown">
            <a href="#">
              Productos
              <i className="fas fa-angle-down" />
            </a>
            <ul className="submenu">
              <li>
                <Link href="/products">Catálogo de marcas</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const MobileMenu = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <Fragment>
      <div className="fix-area">
        <div className="offcanvas__info">
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-5 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <img src="assets/img/logo/black-logo.png" alt="logo-img" />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button>
                    <i className="fas fa-times" />
                  </button>
                </div>
              </div>
              <p className="text d-none d-xl-block">
                iTCS S.A. — Information Technology Consulting and Support. Más
                de 20 años de trayectoria en Paraguay, con ISO 9001:2015 e ISO
                27001:2022.
              </p>
              <div className="mobile-menu fix mb-3 mean-container">
                <div className="mean-bar">
                  <a href="#nav" className="meanmenu-reveal">
                    <span>
                      <span>
                        <span />
                      </span>
                    </span>
                  </a>
                  <nav className="mean-nav">
                    <ul>
                      <li>
                        <Link href="/">Inicio</Link>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            activeMenuSet("Empresa");
                          }}
                        >
                          Empresa
                          <i className="fas fa-angle-down" />
                        </a>
                        <ul className="submenu" style={activeLi("Empresa")}>
                          <li>
                            <Link href="/about">Quiénes somos</Link>
                          </li>
                          <li>
                            <Link href="/about#certificaciones">
                              Certificaciones
                            </Link>
                          </li>
                          <li>
                            <Link href="/faqs">Políticas ISO</Link>
                          </li>
                        </ul>
                        <a
                          className="mean-expand"
                          href="#"
                          onClick={() => activeMenuSet("Empresa")}
                        >
                          <i className="far fa-plus" />
                        </a>
                      </li>
                      <li>
                        <Link href="/partners">Partners</Link>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            activeMenuSet("Servicios");
                          }}
                        >
                          Servicios
                          <i className="fas fa-angle-down" />
                        </a>
                        <ul className="submenu" style={activeLi("Servicios")}>
                          <li>
                            <Link href="/services">Resumen de servicios</Link>
                          </li>
                          <li>
                            <Link href="/services-details">
                              Detalle de servicio
                            </Link>
                          </li>
                        </ul>
                        <a
                          className="mean-expand"
                          href="#"
                          onClick={() => activeMenuSet("Servicios")}
                        >
                          <i className="far fa-plus" />
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            activeMenuSet("Productos");
                          }}
                        >
                          Productos
                          <i className="fas fa-angle-down" />
                        </a>
                        <ul
                          className="submenu"
                          style={activeLi("Productos")}
                        >
                          <li>
                            <Link href="/products">Catálogo de marcas</Link>
                          </li>
                        </ul>
                        <a
                          className="mean-expand"
                          href="#"
                          onClick={() => activeMenuSet("Productos")}
                        >
                          <i className="far fa-plus" />
                        </a>
                      </li>
                      <li>
                        <Link href="/blog">Blog</Link>
                      </li>
                      <li className="mean-last">
                        <Link href="/contact">Contacto</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>

              <div className="offcanvas__contact">
                <h4>Contacto</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://maps.google.com/?q=Asunción+Paraguay"
                      >
                        Barrio Virgen del Huerto, Asunción, Paraguay
                      </a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:info@itcs.com.py">info@itcs.com.py</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <span>Lun–Vie · 08:00–18:00 hs</span>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone" />
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+595217288222">+595 21 728-8222</a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4">
                  <Link href="/contact" className="theme-btn">
                    Escribirnos
                  </Link>
                </div>
                <div className="social-icon d-flex align-items-center">
                  <a href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="offcanvas__overlay" />
    </Fragment>
  );
};

const SearchPoppup = () => {
  return (
    <div className="search-wrap">
      <div className="search-inner">
        <i className="fas fa-times search-close" id="search-close" />
        <div className="search-cell">
          <form method="get">
            <div className="search-field-holder">
              <input
                type="search"
                className="main-search-input"
                placeholder="Buscar…"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
