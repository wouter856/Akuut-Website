//Open and close the navigation bar on small screens
const Logo2 = document.getElementById('dropdown');
const toggleNav = document.getElementById('toggleNav');


Logo2.addEventListener('click', function(event) {
    event.preventDefault();
    if (toggleNav.style.display === 'none' || toggleNav.style.display === '') {
        toggleNav.style.display = 'block';
    } else {
        toggleNav.style.display = 'none';
    }
});

window.addEventListener('resize', function() {
    const windowWidth = window.innerWidth;

    if (windowWidth > 760) {
        toggleNav.style.display = 'none';
    } 
});

window.dispatchEvent(new Event('resize'));