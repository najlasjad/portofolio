"use strict";
var _a;
document.addEventListener('DOMContentLoaded', (event) => {
});
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
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                const activeLink = document.querySelector('header nav a[href*="' + id + '"]');
                activeLink === null || activeLink === void 0 ? void 0 : activeLink.classList.add('active'); // Optional chaining to avoid null reference
            });
        }
    });
};
(_a = document.getElementById('menu-icon')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var navbar = document.querySelector('.navbar');
    var menuIcon = document.querySelector('#menu-icon');
    if (navbar && menuIcon) { // Check if navbar and menuIcon are not null
        if (navbar.style.display === 'block') {
            menuIcon.classList.toggle('bx-x');
            navbar.style.display = 'none';
        }
        else {
            menuIcon.classList.toggle('bx-x');
            navbar.style.display = 'block';
        }
    }
});
document.addEventListener('DOMContentLoaded', (event) => {
    const form = document.querySelector('form');
    form === null || form === void 0 ? void 0 : form.addEventListener('submit', (event) => {
        var _a, _b, _c, _d, _e;
        event.preventDefault(); // Prevent form submission for validation
        const fullName = (((_a = document.querySelector('input[placeholder="Full Name"]')) === null || _a === void 0 ? void 0 : _a.value) || '').trim();
        const email = (((_b = document.querySelector('input[placeholder="Email"]')) === null || _b === void 0 ? void 0 : _b.value) || '').trim();
        const phoneNumber = (((_c = document.querySelector('input[placeholder="Phone Number"]')) === null || _c === void 0 ? void 0 : _c.value) || '').trim();
        const subject = (((_d = document.querySelector('input[placeholder="Subject"]')) === null || _d === void 0 ? void 0 : _d.value) || '').trim();
        const message = (((_e = document.querySelector('textarea[placeholder="Your Message"]')) === null || _e === void 0 ? void 0 : _e.value) || '').trim();
        // Validation checks
        if (!fullName) {
            alert('Full Name is required.');
            return;
        }
        if (!email || !validateEmail(email)) {
            alert('Please enter a valid Email.');
            return;
        }
        if (!phoneNumber) {
            alert('Phone Number is required.');
            return;
        }
        if (!subject) {
            alert('Subject is required.');
            return;
        }
        if (!message) {
            alert('Message is required.');
            return;
        }
        // If all validations pass, you can submit the form or perform further actions
        form.submit(); // Uncomment this line to allow form submission
    });
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
        return re.test(email);
    }
});
