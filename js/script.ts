document.addEventListener('DOMContentLoaded', (event: Event) => {

})

let menuIcon = document.querySelector<HTMLDivElement>('#menu-icon');
let navbar = document.querySelector<HTMLElement>('.navbar');
let sections = document.querySelectorAll<HTMLElement>('section');
let navLinks = document.querySelectorAll<HTMLAnchorElement>('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                const activeLink = document.querySelector<HTMLAnchorElement>('header nav a[href*="' + id + '"]');
                activeLink?.classList.add('active'); // Optional chaining to avoid null reference
            });
        }
    });
}

document.getElementById('menu-icon')?.addEventListener('click', function() {
    var navbar = document.querySelector<HTMLElement>('.navbar');
    var menuIcon = document.querySelector<HTMLDivElement>('#menu-icon');
    if (navbar && menuIcon) { // Check if navbar and menuIcon are not null
        if (navbar.style.display === 'block') {
            menuIcon.classList.toggle('bx-x');
            navbar.style.display = 'none';
        } else {
            menuIcon.classList.toggle('bx-x');
            navbar.style.display = 'block';
        }
    }
});

document.addEventListener('DOMContentLoaded', (event: Event) => {
    const form = document.querySelector<HTMLFormElement>('form');
    
    form?.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission for validation

        const fullName = (document.querySelector<HTMLInputElement>('input[placeholder="Full Name"]')?.value || '').trim();
        const email = (document.querySelector<HTMLInputElement>('input[placeholder="Email"]')?.value || '').trim();
        const phoneNumber = (document.querySelector<HTMLInputElement>('input[placeholder="Phone Number"]')?.value || '').trim();
        const subject = (document.querySelector<HTMLInputElement>('input[placeholder="Subject"]')?.value || '').trim();
        const message = (document.querySelector<HTMLTextAreaElement>('textarea[placeholder="Your Message"]')?.value || '').trim();

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

    function validateEmail(email: string): boolean {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simple email regex
        return re.test(email);
    }
});