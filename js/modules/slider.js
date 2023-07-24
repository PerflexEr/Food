function slider({
  container,slide,nextArrow,prevArrow,wrapper,field
}) {
  const nextBtn = document.querySelector(nextArrow);
  const prevBtn = document.querySelector(prevArrow);
  const slides = document.querySelectorAll(".offer__slide");
  const slider = document.querySelector(container);
  let currentSlide = document.querySelector(slide);
  let slideIndex = 0;
  let slidesWrapper = document.querySelector(wrapper);
  let slidesField = document.querySelector(field);
  let width = window.getComputedStyle(slidesWrapper).width;

  slidesField.style.width = 100 * slides.length + `%`;
  slidesField.style.display = "flex";
  slidesField.style.transition = "0.7s all";
  slidesWrapper.style.overflow = "hidden";

  let offset = 0;

  currentSlide.textContent = `0${slideIndex + 1}`;

  slides.forEach((slide) => {
    slide.style.width = width;
  });

  slider.style.position = "relative";

  const dots = document.createElement("ol");
  let indicators = [];
  dots.classList.add("carousel-indicators");

  slider.append(dots);

  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("li");
    dot.setAttribute("data-slide-to", i + 1);
    dot.style.cssText = `
      box-sizing: content-box;
      flex: 0 1 auto;
      width: 30px;
      height: 6px;
      margin-right: 3px;
      margin-left: 3px;
      cursor: pointer;
      background-color: #fff;
      background-clip: padding-box;
      border-top: 10px solid transparent;
      border-bottom: 10px solid transparent;
      opacity: .5;
      transition: opacity .6s ease;
  `;
    if (i === 0) {
      dot.style.opacity = "1";
    }
    dots.append(dot);
    indicators.push(dot);
  }

  nextBtn.addEventListener("click", () => {
    if (offset === +width.slice(0, width.length - 2) * (slides.length - 1)) {
      offset = 0;
    } else {
      offset += +width.slice(0, width.length - 2);
    }
    slideIndex++;
    if (slideIndex > slides.length - 1) {
      slideIndex = 0;
    }
    slidesField.style.transform = `translateX(-${offset}px)`;
    currentSlide.textContent = `0${slideIndex + 1}`;
    indicators.forEach((dot) => {
      dot.style.opacity = "0.5";
    });
    indicators[slideIndex].style.opacity = "1";
  });

  prevBtn.addEventListener("click", () => {
    if (slideIndex === 0) {
      offset = +width.slice(0, width.length - 2) * (slides.length - 1);
      slideIndex = slides.length - 1;
    } else {
      offset -= +width.slice(0, width.length - 2);
      slideIndex--;
    }
    slidesField.style.transform = `translateX(-${offset}px)`;
    currentSlide.textContent = `0${slideIndex + 1}`;
    indicators.forEach((dot) => {
      dot.style.opacity = "0.5";
    });
    indicators[slideIndex].style.opacity = "1";
  });

  indicators.forEach((dot) => {
    dot.addEventListener("click", (e) => {
      let slideTo = parseInt(e.target.getAttribute("data-slide-to"), 10);

      slideIndex = slideTo - 1;

      offset = +width.slice(0, width.length - 2) * slideIndex;

      slidesField.style.transform = `translateX(-${offset}px)`;

      indicators.forEach((dot) => {
        dot.style.opacity = "0.5";
      });
      indicators[slideIndex].style.opacity = "1";
      currentSlide.textContent = `0${slideIndex + 1}`;
    });
  });
}
export default slider;