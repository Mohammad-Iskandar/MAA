const toggleButton = document.querySelector('.dark-mode-toggle');
const icon = toggleButton.querySelector('i');
const currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
    toggleButton.textContent = ' Light Mode';
    toggleButton.prepend(icon);
}

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    let theme = 'light';
    if (document.body.classList.contains('dark-mode')) {
        theme = 'dark';
        icon.classList.replace('fa-moon', 'fa-sun');
        toggleButton.textContent = ' Light Mode';
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        toggleButton.textContent = ' Dark Mode';
    }
    toggleButton.prepend(icon);
    localStorage.setItem('theme', theme);
});
