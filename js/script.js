// ============ NT PRODUCTIONS — SCRIPT ============

document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sticky header
  const header = document.getElementById("siteHeader");
  const onScroll = () => {
    if (window.scrollY > 40) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Fullscreen menu
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const closeMenuBtn = document.getElementById("closeMenuBtn");
  const fullscreenMenu = document.getElementById("fullscreenMenu");

  const openMenu = () => {
    fullscreenMenu.classList.add("open");
    document.body.classList.add("menu-open");
    hamburgerBtn.setAttribute("aria-expanded", "true");
  };
  const closeMenu = () => {
    fullscreenMenu.classList.remove("open");
    document.body.classList.remove("menu-open");
    hamburgerBtn.setAttribute("aria-expanded", "false");
  };

  hamburgerBtn.addEventListener("click", openMenu);
  closeMenuBtn.addEventListener("click", closeMenu);
  fullscreenMenu.querySelectorAll(".fs-link").forEach(link => {
    link.addEventListener("click", closeMenu);
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });

  // Gallery carousel
  const track = document.getElementById("galleryTrack");
  const prevBtn = document.getElementById("galleryPrev");
  const nextBtn = document.getElementById("galleryNext");

  if (track && prevBtn && nextBtn) {
    let index = 0;
    const getStep = () => {
      const img = track.querySelector("img");
      if (!img) return 340;
      const style = getComputedStyle(track);
      const gap = parseFloat(style.gap) || 16;
      return img.getBoundingClientRect().width + gap;
    };
    const getMaxIndex = () => {
      const wrapWidth = track.parentElement.getBoundingClientRect().width;
      const step = getStep();
      const visible = Math.max(1, Math.floor(wrapWidth / step));
      return Math.max(0, track.children.length - visible);
    };
    const update = () => {
      const max = getMaxIndex();
      if (index > max) index = max;
      if (index < 0) index = 0;
      track.style.transform = `translateX(${-index * getStep()}px)`;
    };
    prevBtn.addEventListener("click", () => { index -= 1; update(); });
    nextBtn.addEventListener("click", () => { index += 1; update(); });
    window.addEventListener("resize", update);
    update();
  }

  // Accordion
  document.querySelectorAll(".accordion-trigger").forEach(trigger => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".accordion-item");
      const panel = item.querySelector(".accordion-panel");
      const isOpen = item.classList.contains("open");

      document.querySelectorAll(".accordion-item.open").forEach(openItem => {
        if (openItem !== item) {
          openItem.classList.remove("open");
          openItem.querySelector(".accordion-panel").style.maxHeight = null;
        }
      });

      if (isOpen) {
        item.classList.remove("open");
        panel.style.maxHeight = null;
      } else {
        item.classList.add("open");
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    });
  });

  // Contact form (Formspree AJAX submit)
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  const submitBtn = document.getElementById("formSubmitBtn");

  if (form) {
    form.addEventListener("submit", async (e) => {
      e.preventDefault();

      if (form.action.includes("YOUR_FORM_ID")) {
        status.textContent = "Form isn't connected yet — see README.md to add your Formspree endpoint.";
        status.className = "form-status error";
        return;
      }

      submitBtn.disabled = true;
      submitBtn.textContent = "Sending…";
      status.textContent = "";
      status.className = "form-status";

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: new FormData(form),
          headers: { Accept: "application/json" }
        });

        if (response.ok) {
          status.textContent = "Thanks! Your enquiry has been sent — we'll be in touch soon.";
          status.className = "form-status success";
          form.reset();
        } else {
          status.textContent = "Something went wrong. Please try again or call us directly.";
          status.className = "form-status error";
        }
      } catch (err) {
        status.textContent = "Something went wrong. Please try again or call us directly.";
        status.className = "form-status error";
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = "Send Enquiry";
      }
    });
  }
});
