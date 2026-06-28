/* =========================================================
   マツバ工房 — interactions
   ========================================================= */
(function () {
  "use strict";

  /* ---- Header: solid state on scroll ---- */
  const header = document.getElementById("header");
  const onScroll = () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- Mobile navigation ---- */
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("nav");

  const closeNav = () => {
    nav.classList.remove("open");
    toggle.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "メニューを開く");
  };

  toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    toggle.classList.toggle("active", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "メニューを閉じる" : "メニューを開く");
  });

  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeNav));
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });

  /* ---- Reveal on scroll ---- */
  const revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  } else {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  }

  /* ---- Contact form (front-end demo handler) ---- */
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        status.textContent = "未入力の必須項目があります。ご確認ください。";
        form.reportValidity();
        return;
      }
      const name = form.querySelector("#name").value.trim();
      const email = form.querySelector("#email").value.trim();
      const subject = form.querySelector("#subject").value;
      const message = form.querySelector("#message").value.trim();

      // 入力内容を本文に詰めて、メール作成画面を開く（サーバー不要のmailto方式）
      const to = "mail@matsuba.info";
      const mailSubject = `【お問い合わせ】${subject}`;
      const body =
        `お名前：${name}\n` +
        `メールアドレス：${email}\n` +
        `ご用件：${subject}\n\n` +
        `${message}\n`;
      const mailto =
        `mailto:${to}?subject=${encodeURIComponent(mailSubject)}` +
        `&body=${encodeURIComponent(body)}`;

      status.textContent =
        "メールソフトが開きます。表示されたメールをそのまま送信してください。" +
        "（開かない場合は mail@matsuba.info まで直接お送りください）";
      window.location.href = mailto;
    });
  }

  /* ---- Footer year ---- */
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();
})();
