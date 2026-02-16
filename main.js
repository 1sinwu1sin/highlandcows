document.addEventListener('DOMContentLoaded', () => {
    // Modal elements
    const modal = document.getElementById('modal');
    const openModalBtnTop = document.getElementById('consultation-btn');
    const openModalBtnBottom = document.getElementById('consultation-btn-bottom');
    const closeModalBtn = document.querySelector('.close-btn');
    const consultationForm = document.getElementById('consultation-form');

    const openModal = () => {
        modal.style.display = 'block';
    }

    const closeModal = () => {
        modal.style.display = 'none';
    }

    // Open modal listeners
    if (openModalBtnTop) {
        openModalBtnTop.addEventListener('click', openModal);
    }
    if (openModalBtnBottom) {
        openModalBtnBottom.addEventListener('click', openModal);
    }

    // Close modal with the 'x' button
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }

    // Close modal when clicking outside of it
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            closeModal();
        }
    });

    // Handle form submission
    if (consultationForm) {
        consultationForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Prevent actual form submission
            alert('성공적으로 신청되었습니다');
            closeModal();
            consultationForm.reset();
        });
    }

    // Dark Mode Toggle
    const themeSwitch = document.getElementById('checkbox');
    if (themeSwitch) {
        // Apply the saved theme on page load
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark-mode') {
            document.body.classList.add('dark-mode');
            themeSwitch.checked = true;
        }

        // Listen for theme changes
        themeSwitch.addEventListener('change', function() {
            if (this.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark-mode');
            } else {
                document.body.classList.remove('dark-mode');
                // explicitly set light mode for clarity
                localStorage.setItem('theme', 'light-mode');
            }
        });
    }
});
