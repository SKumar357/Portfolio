function func() {
  document.getElementById("bg").setAttribute("id", "sk");
}

var popover = new bootstrap.Popover(document.querySelector(".pop"), {
  container: "body",
});

window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
