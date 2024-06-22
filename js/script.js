document.addEventListener('DOMContentLoaded', (event) => {

})

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');
            })
        }
    })
}

document.getElementById('menu-icon').addEventListener('click', function() {
    var navbar = document.querySelector('.navbar');
    var menuIcon = document.querySelector('#menu-icon');
    if (navbar.style.display === 'block') {
        menuIcon.classList.toggle('bx-x')
        navbar.style.display = 'none';
    } else {
        menuIcon.classList.toggle('bx-x')
        navbar.style.display = 'block';
    }
});

