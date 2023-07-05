(function () {
  "use strict";

  window.CustomSelect = function () {
    const LIST_DATA = [
      "HTML",
      "Javascript",
      "C Sharp",
      "SQL",
      "HTML",
      "Javascript",
      "C Sharp",
      "SQL",
      "HTML",
      "Javascript",
      "C Sharp",
      "SQL",
    ];
    let filtered = [];

    var cButton = document.querySelector(".c_button");
    var c_search = document.querySelector(".c_search");
    var drop_list = document.querySelector(".drop_list");

    function populateList(arr) {
      drop_list.innerHTML = "";
      arr.forEach((item) => {
        drop_list.innerHTML += `<li>${item}</li>`;
      });
    }

    document.addEventListener("DOMContentLoaded", () => {
      populateList(LIST_DATA);
    });
    cButton.addEventListener("click", (e) => {
      e.preventDefault();
      c_search.classList.toggle("hidden");
      drop_list.classList.toggle("hidden");
    });

    c_search.addEventListener("input", (e) => {
      var phrase = e.target.value.toLowerCase();
      filtered = LIST_DATA.filter((item) =>
        item.toLowerCase().startsWith(phrase)
      );

      populateList(filtered);
    });
  };
})();
