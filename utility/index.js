import { ScrollTrigger, SplitText } from "@/lib/plugins";
import { gsap } from "gsap";

export const zotechUtility = {
  stickyHeader: () => {
    window.addEventListener("scroll", function () {
      const el = document.getElementById("header-sticky");
      if (!el) return;
      if (window.scrollY > 250) {
        el.classList.add("sticky");
      } else {
        el.classList.remove("sticky");
      }
    });
  },
  hamburgerMenu: () => {
    const toggle = document.querySelector(".sidebar__toggle");
    if (!toggle) return;
    const offcanvas = document.querySelector(".offcanvas__info");
    const overlay = document.querySelector(".offcanvas__overlay");
    if (!offcanvas || !overlay) return;
    const setOpen = (open) => {
      if (open) {
        offcanvas.classList.add("info-open");
        overlay.classList.add("overlay-open");
        document.body.classList.add("offcanvas-menu-open");
      } else {
        offcanvas.classList.remove("info-open");
        overlay.classList.remove("overlay-open");
        document.body.classList.remove("offcanvas-menu-open");
      }
    };
    toggle.addEventListener("click", function () {
      setOpen(!offcanvas.classList.contains("info-open"));
    });
    document
      .querySelectorAll(".offcanvas__close,.offcanvas__overlay")
      .forEach((el) => {
        el.addEventListener("click", function () {
          setOpen(false);
        });
      });
  },
  /** WOW registra el constructor en `window` al ejecutar el bundle; no sobrescribir con el return de require. */
  animation: () => {
    if (typeof window === "undefined") return;
    const mod = require("wowjs");
    const Ctor =
      (typeof window.WOW === "function" && window.WOW) ||
      (mod && (mod.WOW || mod.default)) ||
      null;
    if (typeof Ctor === "function") {
      new Ctor({
        boxClass: "wow",
        animateClass: "animated",
        offset: 0,
        mobile: true,
        live: true,
      }).init();
    }
  },
  progressBar: () => {
    const bars = document.querySelectorAll(".count-bar");
    if (bars.length) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const bar = entry.target;
              const percent = bar.dataset.percent;
              bar.style.width = percent;
              bar.classList.add("counted");
            }
          });
        },
        { root: null, threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
      );
      bars.forEach((bar) => observer.observe(bar));
    }
  },
  gsapAnimation: () => {
    (function () {
      "use strict";
      try {
        gsap.registerPlugin(SplitText, ScrollTrigger);

        const scheduleScrollTriggerRefresh = () => {
          const go = () => {
            try {
              ScrollTrigger.refresh();
            } catch (_) {
              /* noop */
            }
          };
          requestAnimationFrame(() => {
            go();
            requestAnimationFrame(go);
          });
          if (typeof document !== "undefined" && document.fonts?.ready) {
            document.fonts.ready.then(() => setTimeout(go, 0));
          }
        };

        const simpleSplitMotion =
          typeof window !== "undefined" &&
          (window.matchMedia("(max-width: 768px)").matches ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches);

        // Text Invert With Scroll (solo si existen nodos; SplitText no debe
        // instanciarse con selector vacío o rompe el hilo y la página queda en blanco)
        if (document.querySelector(".bw-split-text") && !simpleSplitMotion) {
          const splitInvert = new SplitText(".bw-split-text", {
            type: "lines",
          });
          splitInvert.lines.forEach((target) => {
            gsap.to(target, {
              backgroundPositionX: 0,
              ease: "none",
              scrollTrigger: {
                trigger: target,
                scrub: 1,
                start: "top 90%",
                end: "bottom center",
              },
            });
          });
        }

        //>> Split Text Animation <<//
        const st = document.querySelectorAll(".split-text");
        st.forEach((el) => {
          if (!el.textContent?.trim()) return;
          if (simpleSplitMotion) {
            gsap.fromTo(
              el,
              { opacity: 0, y: 22 },
              {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: el,
                  start: "top 92%",
                  toggleActions: "play none none none",
                },
              }
            );
            return;
          }
          try {
            el.split = new SplitText(el, {
              type: "lines,words,chars",
              linesClass: "split-line",
            });

            gsap.set(el, { perspective: 400 });

            if (el.classList.contains("right")) {
              gsap.set(el.split.chars, {
                opacity: 0,
                x: "50",
                ease: "circ.easeOut",
              });
            }
            if (el.classList.contains("left")) {
              gsap.set(el.split.chars, {
                opacity: 0,
                x: "-50",
                ease: "circ.out",
              });
            }
            if (el.classList.contains("up")) {
              gsap.set(el.split.chars, {
                opacity: 0,
                y: "80",
                ease: "circ.out",
              });
            }
            if (el.classList.contains("down")) {
              gsap.set(el.split.chars, {
                opacity: 0,
                y: "-80",
                ease: "circ.out",
              });
            }

            el.anim = gsap.to(el.split.chars, {
              scrollTrigger: {
                trigger: el,
                start: "top 90%",
                toggleActions: "play none none none",
                invalidateOnRefresh: true,
              },
              x: 0,
              y: 0,
              rotateX: 0,
              scale: 1,
              opacity: 1,
              duration: 0.4,
              stagger: 0.02,
            });
          } catch (e) {
            console.warn("split-text anim:", e);
            gsap.set(el, { opacity: 1, clearProps: "all" });
          }
        });

      // Text Up Scroll
      const textUp = document.querySelectorAll(".text-splite-up");
      if (textUp.length > 0) {
        textUp.forEach((splitTextLine) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: splitTextLine,
              start: "top 110%",
              end: "bottom 100%",
              scrub: 1,
              markers: false,
              toggleActions: "play none none none",
            },
          });

          const itemSplitted = new SplitText(splitTextLine, {
            type: "words, lines",
          });
          gsap.set(splitTextLine, { perspective: 400 });

          itemSplitted.split({ type: "lines" });

          tl.from(itemSplitted.lines, {
            duration: 1,
            delay: 0.3,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1,
          });
        });
      }

      // Hero Banner Content
      const heroItems = document.querySelectorAll(".tp-play-up, .tp-play-up-2");
      if (heroItems.length > 0) {
        heroItems.forEach((splitTextLine) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: splitTextLine,
              start: "top 90%",
              end: "bottom 60%",
              scrub: false,
              markers: false,
              toggleActions: "play none none none",
            },
          });

          const itemSplitted = new SplitText(splitTextLine, {
            type: "lines",
          });

          gsap.set(splitTextLine, { perspective: 400 });

          itemSplitted.split({ type: "lines" });

          tl.from(itemSplitted.lines, {
            duration: 1,
            delay: 0.7,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1,
          });
        });
      }

      // Hero Circle Btn
      const btnTriggers = document.querySelectorAll(".tp-btn-trigger");
      if (btnTriggers.length > 0) {
        const btns = document.querySelectorAll(".tp-btn-bounce");

        gsap.set(btns, { y: -150, opacity: 0 });

        btns.forEach((btn) => {
          const trigger = btn.closest(".tp-btn-trigger");
          gsap.to(btn, {
            scrollTrigger: {
              trigger: trigger,
              start: "top center",
              markers: false,
            },
            duration: 1.5,
            delay: 1,
            ease: "bounce.out",
            y: 0,
            opacity: 1,
          });
        });
      }

      // Draw Border
      const borderDraw = document.querySelectorAll(".bw-draw-border");
      borderDraw.forEach((line) => {
        gsap.set(line, { width: 0 });
        gsap.to(line, {
          scrollTrigger: {
            trigger: line,
            start: "top 90%",
            end: "bottom 80%",
            scrub: 1,
            markers: false,
          },
          width: "100%",
          delay: 5,
          duration: 3,
        });
      });

      // Image Reveal Animation
      function revealAnimation(selector, axis, percent, scale) {
        document.querySelectorAll(selector).forEach((revealItem) => {
          const image = revealItem.querySelector("img");
          if (!image) {
            console.warn("No image found in", revealItem);
            return;
          }

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: revealItem,
              toggleActions: "play none none reverse",
            },
          });

          tl.set(revealItem, { autoAlpha: 1 })
            .from(revealItem, {
              duration: 1.5,
              [`${axis}Percent`]: -percent,
              ease: "power2.out",
            })
            .from(image, {
              duration: 1.5,
              [`${axis}Percent`]: percent,
              scale: scale,
              delay: -1.5,
              ease: "power2.out",
            });
        });
      }

      revealAnimation(".reveal-right", "x", -100, 1.3);
      revealAnimation(".reveal-left", "x", 100, 1.3);
      revealAnimation(".reveal-bottom", "y", -100, 1.3);

      // Hover Reveal
      const hoverItems = document.querySelectorAll(".bw-hover-image");

      function moveImage(e, item, index) {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (item.children[index]) {
          item.children[index].style.transform = `translate(${x}px, ${y}px)`;
        }
      }

      hoverItems.forEach((item) => {
        item.addEventListener("mousemove", (e) => {
          moveImage(e, item, 1);
        });
      });

      // Set background images
      const bgElements = document.querySelectorAll("[data-background]");
      bgElements.forEach((el) => {
        const bg = el.getAttribute("data-background");
        if (bg) el.style.backgroundImage = `url(${bg})`;
      });

        scheduleScrollTriggerRefresh();
      } catch (err) {
        console.error("gsapAnimation:", err);
      }
    })();
  },
  serarchpopup: () => {
    const searchWrap = document.querySelector(".search-wrap");
    const searchClose = document.getElementById("search-close");
    const searchTrigger = document.querySelector(".search-trigger");
    if (!searchWrap || !searchClose || !searchTrigger) return;

    searchTrigger.addEventListener("click", function () {
      searchWrap.style.display = "block";
      searchClose.classList.add("active");
    });
    searchClose.addEventListener("click", function () {
      searchWrap.style.display = "none";
      searchClose.classList.remove("active");
    });
  },
  scrollTop: () => {
    const scrollPath = document.querySelector(".scroll-up path");
    if (!scrollPath) return;
    const pathLength = scrollPath.getTotalLength();
    scrollPath.style.transition = scrollPath.style.WebkitTransition = "none";
    scrollPath.style.strokeDasharray = pathLength + " " + pathLength;
    scrollPath.style.strokeDashoffset = pathLength;
    scrollPath.getBoundingClientRect();
    scrollPath.style.transition = scrollPath.style.WebkitTransition =
      "stroke-dashoffset 10ms linear";

    const updateScroll = function () {
      let scrollTotal = window.scrollY;
      let height = document.documentElement.scrollHeight - window.innerHeight;
      let scrollTotalHeight = pathLength - (scrollTotal * pathLength) / height;
      scrollPath.style.strokeDashoffset = scrollTotalHeight;
    };
    updateScroll();

    window.addEventListener("scroll", updateScroll);

    const offset = 50;
    const duration = 950;

    const scrollUpEl = document.querySelector(".scroll-up");
    if (!scrollUpEl) return;
    window.addEventListener("scroll", function () {
      if (window.scrollY > offset) {
        scrollUpEl.classList.add("active-scroll");
      } else {
        scrollUpEl.classList.remove("active-scroll");
      }
    });
  },
};
