// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.85
    );
}

// Function to handle scroll animation
function handleScroll() {
    const courseCards = document.querySelectorAll('.course-card');
    const interestCards = document.querySelectorAll('.interest-card');

    courseCards.forEach(card => {
        if (isInViewport(card) && !card.classList.contains('visible')) {
            card.classList.add('visible');
        }
    });

    interestCards.forEach(card => {
        if (isInViewport(card) && !card.classList.contains('visible')) {
            card.classList.add('visible');
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', handleScroll);

// Trigger on page load to check initial visible elements
