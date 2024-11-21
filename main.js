document.querySelectorAll('.main-nav ul li').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const dropdown = item.querySelector('.dropdown');
        if (dropdown) dropdown.style.display = 'block';
    });
    item.addEventListener('mouseleave', () => {
        const dropdown = item.querySelector('.dropdown');
        if (dropdown) dropdown.style.display = 'none';
    });
});


const navLinks = document.querySelectorAll('.main-nav ul li a');
navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});
window.addEventListener('load', () => {
    const header = document.querySelector('.site-header');
    header.style.opacity = '1';
});


const naМLinks = document.querySelectorAll('.main-nav ul li a');

// Цвета для фона
const colors = ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF', '#A0C4FF'];

navLinks.forEach((link, index) => {
    link.addEventListener('mouseover', () => {
        document.body.style.backgroundColor = colors[index % colors.length]; // Меняем цвет
    });

    link.addEventListener('mouseout', () => {
        document.body.style.backgroundColor = '#fff'; // Возвращаем фон на белый
    });
});



