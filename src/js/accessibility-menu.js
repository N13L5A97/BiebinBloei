// not used anymore
function reducedMotion() {
    const checkbox = document.getElementById('reducedMotion')
    if (checkbox.checked) {
        const body = document.querySelector('body')
        body.classList.add('reduced-motion')
    } else if (checkbox) {
        const body = document.querySelector('body')
        body.classList.remove('reduced-motion')
    }
}