
  let menu = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
  };

  const navItems = document.querySelectorAll('.nav-item');
  const homescreen = document.getElementById('homescreen');
  const homeContent = homescreen.innerHTML;
    var content = {
    home: homeContent,
    homescreen: homeContent,
    about: "<div id='about'>Student at IIT(BHU), VARANASI.<br>Competitive Programmer<br>Web and App Developer</div>",

    projects: "<div id='projects'><li>Personal Portfolio-HTML/CSS/JS</li><li>Weather App-Flutter</li></div>",

    gallery: "<div id='gallery'>Yet to add pictures</div>"
  };
  function removeActiveClasses() {
    navItems.forEach(item => item.classList.remove('active'));
  } 
  
  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      removeActiveClasses(); 
      item.classList.add('active'); 
      const sectionId = item.getAttribute('data-section');
       homescreen.innerHTML = content[sectionId];
    } );
  });
