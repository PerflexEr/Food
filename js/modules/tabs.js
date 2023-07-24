function tabs(tabsSelector,tabsContentSelector,tabsParentSelector,activeClass) {
  const tabs = document.querySelectorAll(tabsSelector),
    tabsContent = document.querySelectorAll(tabsContentSelector),
    tabsParent = document.querySelector(tabsParentSelector);

  function hideTabsContent() {
    tabsContent.forEach((item) => {
      item.style.display = "none";
    });
    tabs.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }

  function ShowTabsContent(i = 0) {
    tabsContent[i].style.display = "block";
    tabs[i].classList.add(activeClass);
  }

  hideTabsContent();
  ShowTabsContent();

  tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabsContent();
          ShowTabsContent(i);
        }
      });
    }
  });
}

export default tabs;