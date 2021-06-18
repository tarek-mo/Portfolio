
// Add style to nav links when clicked

const navLinks = document.querySelectorAll('.nav-link');
const navBar = document.querySelector('.navbar-nav');

navBar.addEventListener('click', e => {
    navLinks.forEach(link => {
        link.classList.remove('current')
    })
    e.target.classList.add('current')

})

// Add style to filter btns when clicked

const filterContainer = document.querySelector('.filter-projects')
const filterProjects = document.querySelectorAll('.filter-projects span')

filterContainer.addEventListener('click', e => {
    filterProjects.forEach(filter => {
         filter.classList.remove('clicked')
    })

    e.target.classList.add('clicked')
})


