(function () {
  function initVideoPopup() {
    var video = document.getElementById("vidos");
    var pop_up = document.getElementById("video_block");
    if (!video || !pop_up) return;
    if (video.dataset.videoBound) return;
    video.dataset.videoBound = "1";

    var popup_cont = pop_up.getElementsByTagName("iframe")[0];
    var overlay = document.getElementById("overlay");
    var popup_closer = pop_up.querySelector(".popup_wrapper .mobile-arrow");

    video.addEventListener("click", function (e) {
      e.preventDefault();
      document.body.style.overflow = "hidden";
      pop_up.classList.add("active");
      if (overlay) overlay.classList.add("popup_active");
      popup_cont.setAttribute("src", video.getAttribute("href"));
      var w = Math.round(document.documentElement.clientWidth * 0.75);
      var h = Math.round(document.documentElement.clientHeight * 0.75);
      popup_cont.setAttribute(
        "style",
        "width: " + w + "px; height: " + h + "px;"
      );
    });

    function closeVideo() {
      pop_up.classList.remove("active");
      if (overlay) overlay.classList.remove("popup_active");
      document.body.style.overflow = "";
      popup_cont.setAttribute("src", "");
    }

    if (popup_closer) popup_closer.addEventListener("click", closeVideo, false);
    if (overlay) overlay.addEventListener("click", closeVideo, false);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initVideoPopup);
  } else {
    initVideoPopup();
  }
})();
