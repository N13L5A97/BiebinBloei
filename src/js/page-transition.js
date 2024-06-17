if (isReduced != true) {
    let links = document.querySelectorAll('a');
    if (links) {
        links.forEach((link) => {
            if (!link.href.includes('#')) {
            link.onclick = (e) => {
                let bodyElements = document.querySelector('.transition-image');
                e.preventDefault();
                bodyElements.classList.add('fade-out')
    
                setTimeout(function() {
                    let allFaded = true;
    
                    if (!bodyElements.classList.contains('fade-out')) {
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
            }}
        });
    }
}
