import "./globals.css";

import Script from "next/script";
import "@css/animate.css";
import "@css/bootstrap.min.css";
import "@css/font-awesome.css";
import "@css/magnific-popup.css";
import "@css/meanmenu.css";
import "@css/nice-select.css";
import "@css/swiper-bundle.min.css";
import "@css/main.css";

import Preloader from "@/components/Preloader";
import { DM_Sans, Montserrat } from "next/font/google";

const montserratFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

const dm_sansFont = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "iTCS S.A. — Information Technology Consulting & Support",
  description:
    "Empresa líder en prestación de servicios de tecnología de la información en Paraguay. Soluciones de infraestructura, ciberseguridad, networking, backup y más.",
  keywords: [
    "iTCS",
    "tecnología",
    "Paraguay",
    "ciberseguridad",
    "infraestructura IT",
    "Sophos",
    "Veeam",
    "HPE",
    "networking",
    "backup",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="es"
      className={`${montserratFont.variable} ${dm_sansFont.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Script
          id="zotech-theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `try{var t=localStorage.getItem("zotech-theme"),d="light";if(t==="dark"||t==="light")d=t;else d=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.setAttribute("data-theme",d);}catch(e){}`,
          }}
        />
        <Preloader />
        {children}
      </body>
    </html>
  );
}
