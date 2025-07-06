let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navbar.classList.toggle("open");
};

const navItems = document.querySelectorAll(".nav-item");
const homescreen = document.getElementById("homescreen");
const homeContent = homescreen.innerHTML;
var content = {
  home: homeContent,
  homescreen: homeContent,
  about: `
      <div id='about'>
        Student at IIT(BHU), VARANASI.<br>
        Competitive Programmer<br>
        Web and App Developer
      </div>`,

  projects: `
      <div id='projects'>
        <ul>
        <li classname={text-bold}><a href="https://spend-sible.vercel.app/" target="_blank">Spend-sible: </a> An AI powered finance tracking app</li>
        <li>  <br>  </li>
        <li><a href="https://snehakanodia4.github.io/fuel_fmcw/" target="_blank">Fuel-FMCW: </a> A decentranlised fundraising platform</li>
           </ul>
      </div>`,
  gallery: "<div id='gallery'>Yet to add pictures</div>",
};
function removeActiveClasses() {
  navItems.forEach((item) => item.classList.remove("active"));
}

navItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    removeActiveClasses();
    item.classList.add("active");
    const sectionId = item.getAttribute("data-section");
    homescreen.innerHTML = content[sectionId];
  });
});
