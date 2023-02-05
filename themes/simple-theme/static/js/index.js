const hamburgerCheckbox = document.getElementById('hamburger-checkbox')
const mainContent = document.getElementById('main-content')

hamburgerCheckbox.addEventListener('change', () => {
    if (hamburgerCheckbox.checked) {
        document.body.style.overflowY = 'hidden'
        mainContent.style.display = 'none'
        return
    }
    document.body.style.overflowY = 'auto'
    mainContent.style.display = 'block'
})