
const links = document.querySelectorAll('nav ul li a');


links.forEach(link => {
    link.addEventListener('click', (e) => {
        const userConfirmed = confirm(`You are about to navigate to "${link.textContent}". Do you want to continue?`);
        if (!userConfirmed) {
            
            e.preventDefault();
        }
    });
});
