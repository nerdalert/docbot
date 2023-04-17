document.addEventListener('DOMContentLoaded', (event) => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const darkTheme = 'dark-theme';

    // Function to toggle the theme
    function toggleTheme() {
        document.body.classList.toggle(darkTheme);
        localStorage.setItem('theme', document.body.classList.contains(darkTheme) ? darkTheme : '');
    }

    // Set the theme based on the user's last preference
    if (localStorage.getItem('theme') === darkTheme) {
        document.body.classList.add(darkTheme);
    }

    // Add the event listener to the theme toggle button
    themeToggleButton.addEventListener('click', toggleTheme);
});

