'use strict'
const allSections = document.querySelectorAll('.sectio')
console.log(allSections);
const navLinks = document.querySelector('.nav__links')
const bottomNavLinks = document.querySelector('.moon')
const section_1 = document.querySelector('.some')
const nav = document.querySelector('.nav')
const menu = document.querySelector('.navbar')
const menuLinks = document.querySelector('.nav__links')
const close = document.querySelector('.navclose')
menu.addEventListener('click', function () {
    menuLinks.classList.remove('hide')
    menu.classList.toggle('hidden')
    nav.classList.add('sticky')
    close.style.display = 'inline-block'
})
close.addEventListener('click', function () {
  menuLinks.classList.add('hide')
  close.style.display = 'none'
  menu.classList.toggle('hidden')
})
navLinks.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(e.target);
    if (e.target.classList.contains('nav__link')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });

  //bottom 
  bottomNavLinks.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(e.target);
    if (e.target.classList.contains('ok')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });
  //sticky nav
//   const initialCoords = section_1.getBoundingClientRect()
//   console.log(initialCoords);
//    window.addEventListener('scroll', function (e) {
//     // console.log(this.window.scrollY);
//     if(this.window.scrollY > initialCoords.top)
//      nav.classList.add('sticky');
//     else nav.classList.remove('sticky')
//    })
// const obsCallBack = function (entries, observe) {
//     entries.forEach(entry => {
//         console.log(entry);
//     });
// }
// const obsOption = {
//     root: null,
//     threshold: [0, 0.2]
// }
// const observer = new IntersectionObserver(obsCallBack, obsOption)
// observer.observe(section_1)
const header = document.querySelector('.header')
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
   const [entry] = entries;
   if (!entry.isIntersecting)  {
   nav.classList.add('sticky');  
  } else  {nav.classList.remove('sticky')
   menuLinks.classList.add('hide')
   close.style.display = 'none'
   menu.classList.remove('hidden')
}
//    console.log(entry);
  };
const headerObserver = new IntersectionObserver(stickyNav,{
    root: null,
    threshold: 0,
    rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header)

// Reveal sections
const revealSection = function (entries, observe) {
    const [entry] = entries;
    console.log(entry);
    if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.2,
})
allSections.forEach(function (section) {
    sectionObserver.observe(section)
    section.classList.add('section--hidden')
})