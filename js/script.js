import tabs from "./modules/tabs";
import moduls from "./modules/moduls";
import { showModal } from "./modules/moduls";
import timer from "./modules/timer";
import cards from "./modules/cards";
import calculator from "./modules/calculate";
import forms from "./modules/forms";
import slider from "./modules/slider";

document.addEventListener("DOMContentLoaded", () => {
  const modalTimerId = setTimeout(
    () => showModal(".modal", modalTimerId),
    1000
  );
  tabs(
    ".tabheader__item",
    ".tabcontent",
    ".tabheader__items",
    "tabheader__item_active"
  );
  moduls("[data-model]", ".modal", modalTimerId);
  timer(".timer", "2023-09-08T23:59:59");
  cards();
  calculator();
  forms("form", modalTimerId);
  // slide,totalCounter,currentCounter,field
  slider({
    container: ".offer__slider",
    nextArrow: ".offer__slider-next",
    prevArrow: ".offer__slider-prev",
    wrapper: ".offer__slider-wrapper",
    field: ".offer__slider-inner",
    slide: "#current",
  });
});
