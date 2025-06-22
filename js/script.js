"use strict";
var _a;
document.addEventListener('DOMContentLoaded', (event) => {});
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
                links
                    .classList
                    .remove('active');
                const activeLink = document.querySelector('header nav a[href*="' + id + '"]');
                activeLink === null || activeLink === void 0
                    ? void 0
                    : activeLink
                        .classList
                        .add('active'); // Optional chaining to avoid null reference
            });
        }
    });
};
(_a = document.getElementById('menu-icon')) === null || _a === void 0
    ? void 0
    : _a.addEventListener('click', function () {
        var navbar = document.querySelector('.navbar');
        var menuIcon = document.querySelector('#menu-icon');
        if (navbar && menuIcon) { // Check if navbar and menuIcon are not null
            if (navbar.style.display === 'block') {
                menuIcon
                    .classList
                    .toggle('bx-x');
                navbar.style.display = 'none';
            } else {
                menuIcon
                    .classList
                    .toggle('bx-x');
                navbar.style.display = 'block';
            }
        }
    });

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const fullName = form.querySelector('input[name="name"]').value.trim();
        const email = form.querySelector('input[name="email_id"]').value.trim();
        const phone = form.querySelector('input[name="phone"]').value.trim();
        const subject = form.querySelector('input[name="subject"]').value.trim();
        const message = form.querySelector('textarea[name="message"]').value.trim();

        // Basic validation
        if (!fullName || !email || !phone || !subject || !message) {
            alert("Please fill in all required fields.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        // Tambahkan waktu sekarang (format: YYYY-MM-DD HH:mm:ss)
        const now = new Date();
        const timeString = now.toLocaleString("en-GB", {
            timeZone: "Asia/Jakarta", 
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }).replace(',', '');

        document.getElementById("sent_time").value = timeString;

        // Send form using EmailJS
        emailjs.sendForm("service_ylqh0mj", "template_ajrqimm", form)
            .then(() => {
                alert("Message sent successfully!");
                form.reset();
            }, (error) => {
                alert("Failed to send message. Please try again.");
                console.log("EmailJS error:", error);
            });
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
});
