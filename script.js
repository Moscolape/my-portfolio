// Declaration of Variables
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('img1');
const image2 = document.getElementById('img2');
const image3 = document.getElementById('img3');
const textBox = document.getElementById('text-box');


// Toggle Light-Dark mode
function toggleLightDarkMode (isDark) {
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 97%)' : 'rgb(255 255 255 / 97%)';
    textBox.style.color = isDark ? 'rgba(255,255,255,0.7)': 'var(--on-background)';
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon') : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
}

// Switch theme dynamically
function switchTheme(event) {
    if(event.target.checked){
        document.documentElement.setAttribute('dark-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleLightDarkMode(true);
    } else {
        document.documentElement.setAttribute('dark-theme', 'light');
        localStorage.setItem('theme', 'light');
        toggleLightDarkMode(false);
    }
}

// Event Listener for Switch
toggleSwitch.addEventListener('change', switchTheme);

// Check localstorage for theme
const currentTheme = localStorage.getItem('theme');
if(currentTheme) {
    document.documentElement.setAttribute('dark-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        toggleLightDarkMode(true);
    }
}

// Scroll to top
function scrollToTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth'  
    });
}
