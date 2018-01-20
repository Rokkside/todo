const checkboxes = document.querySelectorAll('input[type="checkbox"]')

checkboxes.forEach(function (checkbox) {
  checkbox.addEventListener('click', function () {
    const potentialUl = checkbox.nextSibling.nextSibling;

    if (potentialUl && potentialUl.tagName === 'UL') {
      const subItems = potentialUl.querySelectorAll('input[type="checkbox"]')

      subItems.forEach(function (subItem) {
        subItem.checked = checkbox.checked;
      });
    }
  });

  // uncheck parents if unchecked
});
