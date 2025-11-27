
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.card').forEach((card, index) => {
        setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, index * 250);
    });
});
