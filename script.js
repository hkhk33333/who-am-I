document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
            section.classList.add('show');
        }
    });
});



window.addEventListener('load', () => {
    const imageTransition = document.getElementById('image-transition');

    // Check if the transition has already been shown
    const hasSeenTransition = localStorage.getItem('seenTransition');

    if (!hasSeenTransition) {
        // Show the transition
        setTimeout(() => {
            imageTransition.classList.add('fade-out'); // Trigger fade-out
        }, 4500); // Matches your previous timing (8 seconds)

        // Mark the transition as seen in localStorage
        localStorage.setItem('seenTransition', 'true');
    } else {
        // Immediately hide the transition container
        imageTransition.style.display = 'none';
    }
});

document.getElementById('reset-transition').addEventListener('click', () => {
    localStorage.removeItem('seenTransition');
    alert('Transition reset! Reload the page to see it again.');
});

// Add event listeners to SVG elements
document.getElementById('parrot-head').addEventListener('click', () => {
    window.location.href = 'about.html'; // Navigate to About section
});

document.getElementById('parrot-wing').addEventListener('click', () => {
    window.location.href = 'project.html'; // Navigate to Projects section
});

document.getElementById('parrot-tail').addEventListener('click', () => {
    window.location.href = 'contact.html'; // Navigate to Contact section
});
document.getElementById('secret').addEventListener('click', () => {
    window.location.href = 'secret.html'; // Navigate to Contact section
});


// Select the header element
const header = document.querySelector('header');

// Track the scroll position
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    if (window.scrollY > lastScrollY) {
        // If scrolling down, hide the header
        header.classList.add('hidden');
    } else {
        // If scrolling up, show the header
        header.classList.remove('hidden');
    }
    lastScrollY = window.scrollY; // Update the last scroll position
});
