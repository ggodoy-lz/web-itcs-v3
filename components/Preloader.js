"use client";
import { useEffect, useState } from "react";

const disabled =
  typeof process !== "undefined" &&
  process.env.NEXT_PUBLIC_DISABLE_PRELOADER === "1";

const Preloader = () => {
  const [load, setLoad] = useState(!disabled);
  const [show, setShow] = useState(!disabled);

  useEffect(() => {
    if (disabled) return;

    const finishAnim = () => setLoad(false);
    const remove = () => setShow(false);

    const t1 = window.setTimeout(finishAnim, 450);
    const t2 = window.setTimeout(remove, 900);
    const tMax = window.setTimeout(() => {
      finishAnim();
      remove();
    }, 2000);

    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(tMax);
    };
  }, []);

  if (disabled) {
    return null;
  }

  return (
    <div
      id="preloader"
      className={`preloader ${!load ? "loaded" : ""}`}
      style={{ display: show ? "flex" : "none" }}
    >
      <div className="animation-preloader">
        <div className="spinner" />
        <div className="txt-loading">
          <span data-text-preloader="i" className="letters-loading">
            i
          </span>
          <span data-text-preloader="T" className="letters-loading">
            T
          </span>
          <span data-text-preloader="C" className="letters-loading">
            C
          </span>
          <span data-text-preloader="S" className="letters-loading">
            S
          </span>
        </div>
        <p className="text-center">Cargando</p>
      </div>
      <div className="loader">
        <div className="row">
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-left">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
