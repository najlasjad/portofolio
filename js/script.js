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

// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// }

// menuIcon.addEventListener('click', () => {    
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// })

// console.log("Menu icon element:", menuIcon);
// menuIcon.addEventListener('click', () => {    
//     console.log("Menu icon clicked");
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// });

document.getElementById('menu-icon').addEventListener('click', function() {
    var navbar = document.querySelector('.navbar');
    if (navbar.style.display === 'block') {
        navbar.style.display = 'none';
    } else {
        navbar.style.display = 'block';
    }
});

