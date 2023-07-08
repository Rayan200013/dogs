
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width")
    document.querySelector(".custom_menu-btn").classList.toggle("menu_btn-style")
  }


// title document 
let docTitle = document.title;
  window.addEventListener("blur", () => {
    document.title = "Where did you go ;(";
  });
  
  window.addEventListener("focus", () => {
    document.title = docTitle;
  });