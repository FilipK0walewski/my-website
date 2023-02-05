const hamburgerCheckbox = document.getElementById('hamburger-checkbox')
const contactForm = document.getElementById('contact-form')
hamburgerCheckbox.addEventListener('change', () => {
    if (hamburgerCheckbox.checked) {
        document.body.style.overflowY = 'hidden'
        return
    }
    document.body.style.overflowY = 'auto'
})

contactForm.addEventListener('submit', (e) => {
    console.log(e)
})