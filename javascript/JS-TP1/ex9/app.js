const eles = document.querySelectorAll(".menu");

eles.forEach((ele) => {
  ele.addEventListener("click", (e) => {
    const linksWrapper = e.currentTarget.querySelector(".links-wrapper");

    if (linksWrapper) {
      linksWrapper.classList.toggle("hide-links");
    }

    document.querySelectorAll(".links-wrapper").forEach((link) => {
      if (link != linksWrapper) link.classList.remove("hide-links");
    });
  });
});
