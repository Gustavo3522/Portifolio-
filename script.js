let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

/*Correção*/
navLinks.forEach(link => {
link.addEventListener(
'click', () => {
navbar.classList
.remove('active');
menuIcon.classList
.remove('bx-x');
});
});

const skillPers = document.querySelectorAll('.skill-per');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const per = entry.target.getAttribute('data-per');
            entry.target.style.width = per + '%';
        }
    });
}, { threshold: 0.3 });

skillPers.forEach(skill => observer.observe(skill));