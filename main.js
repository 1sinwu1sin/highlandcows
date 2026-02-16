document.addEventListener('DOMContentLoaded', () => {
    // Modal elements
    const modal = document.getElementById('modal');
    const openModalBtn = document.getElementById('consultation-btn');
    const closeModalBtn = document.querySelector('.close-btn');
    const consultationForm = document.getElementById('consultation-form');

    // Open modal
    if (openModalBtn) {
        openModalBtn.addEventListener('click', () => {
            modal.style.display = 'block';
        });
    }

    // Close modal with the 'x' button
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });

    // Handle form submission
    if (consultationForm) {
        consultationForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent actual form submission
            alert('성공적으로 신청되었습니다');
            modal.style.display = 'none';
            consultationForm.reset();
        });
    }

    // Dark Mode Toggle
    const themeSwitch = document.getElementById('checkbox');
    if (themeSwitch) {
        // Apply the saved theme on page load
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            document.body.classList.add(currentTheme);
            if (currentTheme === 'dark-mode') {
                themeSwitch.checked = true;
            }
        }

        // Listen for theme changes
        themeSwitch.addEventListener('change', function() {
            if (this.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light-mode');
            }
        });
    }
});
