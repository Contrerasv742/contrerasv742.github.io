// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85
    );
}

// Function to handle scroll animation
function handleScroll() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        if (isInViewport(card) && !card.classList.contains('visible')) {
            card.classList.add('visible');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Trigger on page load to check initial visible elements
window.addEventListener('load', handleScroll);
