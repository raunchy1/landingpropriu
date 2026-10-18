(function () {
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var header = document.querySelector(".site-header");
  var onScroll = function () {
    header.classList.toggle("is-solid", window.scrollY > 24);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  var menu = document.getElementById("menu");
  var toggle = document.querySelector(".nav-toggle");
  function closeMenu() {
    if (menu.open) menu.close();
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  }
  toggle.addEventListener("click", function () {
    menu.showModal();
    toggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("nav-open");
  });
  menu.querySelectorAll("a, .menu-close").forEach(function (el) {
    el.addEventListener("click", closeMenu);
  });
  menu.addEventListener("close", function () {
    toggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
  });
  menu.addEventListener("click", function (e) {
    if (e.target === menu) closeMenu();
  });

  if (!reduce && "IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll(".reveal").forEach(function (el) { el.classList.add("in"); });
  }

  var lightbox = document.getElementById("lightbox");
  var lbImg = lightbox.querySelector(".lb-img");
  var lbCap = lightbox.querySelector(".lb-cap");
  var frames = [];
  var index = 0;

  function showFrame() {
    var frame = frames[index];
    lbImg.src = frame.full;
    lbImg.alt = frame.alt;
    lbCap.textContent = (index + 1) + " / " + frames.length + (frame.alt ? " — " + frame.alt : "");
  }
  function openLightbox(list, start) {
    frames = list;
    index = start;
    showFrame();
    lightbox.showModal();
  }
  function step(dir) {
    if (!frames.length) return;
    index = (index + dir + frames.length) % frames.length;
    showFrame();
  }
  lightbox.querySelector(".lb-close").addEventListener("click", function () { lightbox.close(); });
  lightbox.querySelector(".lb-prev").addEventListener("click", function () { step(-1); });
  lightbox.querySelector(".lb-next").addEventListener("click", function () { step(1); });
  lightbox.addEventListener("click", function (e) { if (e.target === lightbox) lightbox.close(); });
  document.addEventListener("keydown", function (e) {
    if (!lightbox.open) return;
    if (e.key === "ArrowLeft") step(-1);
    if (e.key === "ArrowRight") step(1);
  });

  document.querySelectorAll("[data-room-gallery]").forEach(function (root) {
    var leadBtn = root.querySelector(".room-photo");
    var lead = leadBtn.querySelector("img");
    var thumbs = Array.prototype.slice.call(root.querySelectorAll(".film button"));
    var current = 0;
    function select(i, scroll) {
      current = i;
      var btn = thumbs[i];
      lead.src = btn.dataset.full;
      lead.alt = btn.dataset.alt;
      thumbs.forEach(function (thumb, n) {
        thumb.setAttribute("aria-current", n === i ? "true" : "false");
      });
      if (scroll) btn.scrollIntoView({ inline: "center", block: "nearest", behavior: reduce ? "auto" : "smooth" });
    }
    thumbs.forEach(function (btn, i) {
      btn.addEventListener("click", function () { select(i, true); });
    });
    leadBtn.addEventListener("click", function () {
      openLightbox(thumbs.map(function (btn) {
        return { full: btn.dataset.full, alt: btn.dataset.alt };
      }), current);
    });
  });

  document.querySelectorAll(".shot button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var visible = Array.prototype.filter.call(document.querySelectorAll(".shot"), function (shot) {
        return !shot.hidden;
      });
      var list = visible.map(function (shot) {
        var b = shot.querySelector("button");
        return { full: b.dataset.full, alt: b.dataset.alt };
      });
      var start = visible.indexOf(btn.closest(".shot"));
      openLightbox(list, start < 0 ? 0 : start);
    });
  });

  var filters = document.querySelectorAll(".filters button");
  function applyFilter(key) {
    var first = true;
    document.querySelectorAll(".shot").forEach(function (shot) {
      var show = key === "all" || shot.dataset.c === key;
      shot.hidden = !show;
      shot.classList.remove("is-wide");
      if (show && first) {
        shot.classList.add("is-wide");
        first = false;
      }
    });
    filters.forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.dataset.f === key ? "true" : "false");
    });
  }
  filters.forEach(function (btn) {
    btn.addEventListener("click", function () { applyFilter(btn.dataset.f); });
  });
  if (filters.length) applyFilter("all");

  var suiteField = document.getElementById("suite");
  document.querySelectorAll("[data-suite]").forEach(function (link) {
    link.addEventListener("click", function () {
      suiteField.value = link.dataset.suite;
    });
  });

  var form = document.getElementById("booking");
  var error = document.getElementById("form-error");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var data = new FormData(form);
    var name = String(data.get("nome") || "").trim();
    var arrive = String(data.get("arrivo") || "");
    var leave = String(data.get("partenza") || "");
    var guests = String(data.get("ospiti") || "");
    var suite = String(data.get("suite") || "");
    var note = String(data.get("note") || "").trim();
    if (!name || !arrive || !leave) {
      error.textContent = "Per verificare la disponibilità servono nome, arrivo e partenza.";
      return;
    }
    if (leave < arrive) {
      error.textContent = "La partenza è precedente all’arrivo.";
      return;
    }
    error.textContent = "";
    var lines = [
      "Buongiorno, vorrei verificare la disponibilità alla Loggia Padronale.",
      "Nome: " + name,
      "Arrivo: " + arrive,
      "Partenza: " + leave,
      "Ospiti: " + guests,
      "Suite: " + (suite || "nessuna preferenza"),
    ];
    if (note) lines.push("Note: " + note);
    var text = lines.join("\n");
    var channel = e.submitter && e.submitter.dataset.channel;
    if (channel === "mail") {
      window.location.href = "mailto:leandentist@tiscali.it?subject=" + encodeURIComponent("Disponibilità Loggia Padronale") + "&body=" + encodeURIComponent(text);
    } else {
      window.location.href = "https://wa.me/393460455488?text=" + encodeURIComponent(text);
    }
  });

  var sticky = document.querySelector(".sticky-book");
  var booking = document.getElementById("prenota");
  if (sticky && "IntersectionObserver" in window) {
    var watch = new IntersectionObserver(function (entries) {
      sticky.classList.toggle("is-hidden", entries[0].isIntersecting);
    }, { threshold: 0.15 });
    watch.observe(booking);
  }
})();
