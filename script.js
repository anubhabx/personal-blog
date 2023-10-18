window.addEventListener('resize', function() {
    if (window.innerWidth <= 768) {
        document.querySelector('body > section.hero.card > div.topRow > div.socials').classList.add('vertical');
    } else {
        document.querySelector('body > section.hero.card > div.topRow > div.socials').classList.remove('vertical');
    }
});

let navToggle = document.querySelector('.header .navbar .nav__list__toggle');
let navList = document.querySelector('.header .navbar .nav__list');

navToggle.addEventListener('click', function() {
    navList.classList.toggle('expand');
});