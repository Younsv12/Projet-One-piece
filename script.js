const navLinks = document.querySelectorAll('nav ul li a');
const mainArticle = document.querySelector('main article');

// Fonction pour mettre en surbrillance l'élément de navigation actif
function highlightNavLink() {
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (window.location.href.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });
}

// Fonction pour charger un article dynamiquement
function loadArticle(event) {
    event.preventDefault();
    const articleUrl = event.target.getAttribute('href');
    fetch(articleUrl)
        .then(response => response.text())
        .then(data => {
            mainArticle.innerHTML = data;
        });
}

// Écouteurs d'événements
window.addEventListener('load', highlightNavLink);
navLinks.forEach(link => {
    link.addEventListener('click', loadArticle);
});