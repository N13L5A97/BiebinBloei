// Function to handle page transitions
function handlePageTransitions() {
    let isReduced = false; // Assume a value or get it from somewhere
    if (isReduced != true) {
        let links = document.querySelectorAll('a');
        if (links) {
            links.forEach((link) => {
                if (!link.href.includes('#')) {
                    link.onclick = (e) => {
                        let bodyElement = document.querySelector('.transition-image');
                        e.preventDefault();
                        bodyElement.classList.add('fade-out');

                        setTimeout(function() {
                            let allFaded = true;

                            if (!bodyElement.classList.contains('fade-out')) {
                                allFaded = false;
                            }

                            if (allFaded) {
                                if (!e.srcElement.parentElement.href) {
                                    window.location = e.srcElement.href;
                                } else {
                                    window.location = e.srcElement.parentElement.href;
                                }
                            } else {
                                console.log('Something went wrong...', e.srcElement);
                            }
                        }, 500);
                    };
                }
            });
        }
    }
}

// Function to reset the animation state
function resetAnimationState() {
    let bodyElement = document.querySelector('.transition-image');
    if (bodyElement) {
        bodyElement.classList.remove('fade-out');
        bodyElement.style.transform = 'scale(1)'; // Reset scale if needed
    }
}

// Call the function to handle page transitions
handlePageTransitions();

// Reset animation state on page show (including back navigation)
window.addEventListener('pageshow', resetAnimationState);