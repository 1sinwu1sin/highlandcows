document.addEventListener('DOMContentLoaded', () => {
    const heroImage = document.querySelector('.hero img');
    if (heroImage) {
        heroImage.addEventListener('click', () => {
            alert('Moo!');
        });
    }
});
