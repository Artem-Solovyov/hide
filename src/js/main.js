// funcyion is mobile

const isMobile = {
  Android: function () {
    return navigator.userAgent.match(/Android/i);
  },
  BlackBerry: function () {
    return navigator.userAgent.match(/BlackBerry/i);
  },
  iOS: function () {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  Opera: function () {
    return navigator.userAgent.match(/Opera Mini/i);
  },
  Windows: function () {
    return navigator.userAgent.match(/IEMobile/i);
  },
  any: function () {
    return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows();
  },
};
if (!isMobile.any()) {
  document.body.classList.contains("_touch") ? document.body.classList.remove("_touch") : null;
  document.body.classList.add("_pc");
} else {
  document.body.classList.contains("_pc") ? document.body.classList.remove("_pc") : null;
  document.body.classList.add("_touch");
}
//========================= Lotti start===============================

const anim = lottie;

anim.loadAnimation({
  container: document.querySelector(".main-section__anim"),
  rendere: "svg",
  loop: true,
  autoplay: true,
  path: "../src/libs/anim.json",
});

//========================= Lotti end===============================
