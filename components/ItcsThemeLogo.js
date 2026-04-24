import Link from "next/link";
import { Fragment } from "react";

const srcLight = "assets/img/logo/logo-itcs.webp";
const srcDark = "assets/img/logo/logo-itcs-blanco-300x122.png.webp";

/**
 * Logos iTCS: color (tema claro) / blanco (tema oscuro o fondos oscuros).
 * @param {object} p
 * @param {"adaptive" | "lightOnly" | "darkOnly"} p.variant
 * @param {string} [p.linkClass] — clases del <a> (p. ej. header-logo)
 * @param {boolean} [p.withLink] — false para solo <img> sin <Link>
 */
const ItcsThemeLogo = ({
  variant = "adaptive",
  linkClass = "header-logo site-theme-logo",
  withLink = true,
}) => {
  if (variant === "lightOnly") {
    return (
      <img
        className="site-theme-logo__light site-theme-logo__img"
        src={srcLight}
        alt="iTCS S.A."
        width={300}
        height={122}
      />
    );
  }
  if (variant === "darkOnly") {
    return (
      <img
        className="itcs-logo itcs-logo--on-dark itcs-logo__img"
        src={srcDark}
        alt="iTCS S.A."
        width={300}
        height={122}
      />
    );
  }

  const content = (
    <Fragment>
      <img
        className="site-theme-logo__light site-theme-logo__img"
        src={srcLight}
        alt="iTCS S.A."
        width={300}
        height={122}
      />
      <img
        className="site-theme-logo__dark site-theme-logo__img"
        src={srcDark}
        alt="iTCS S.A."
        width={300}
        height={122}
      />
    </Fragment>
  );

  if (!withLink) {
    return <span className="site-theme-logo d-inline-block">{content}</span>;
  }

  return (
    <Link href="/" className={linkClass}>
      {content}
    </Link>
  );
};

export default ItcsThemeLogo;
export { srcLight, srcDark };
