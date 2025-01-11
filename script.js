// Функция для создания новой звезды
function createNewStar() {
    var newStar = document.createElement('div');
    newStar.className = 'new-star';
    newStar.innerHTML = '★';

    var container = document.querySelector('.star-container');

    // Генерация случайного угла и радиуса для новой звезды
    var randomAngle = Math.random() * Math.PI * 2; // Случайный угол в радианах
    var randomRadius = Math.random() * 50 + 50; // Случайный радиус от 50 до 100

    // Вычисление координат для новой звезды
    var starX = Math.cos(randomAngle) * randomRadius;
    var starY = Math.sin(randomAngle) * randomRadius;

    // Установка начальных координат
    newStar.style.top = calc(50vh + ${starY}px); // Позиция по вертикали
    newStar.style.left = calc(50vw + ${starX}px); // Позиция по горизонтали

    container.appendChild(newStar);

    // Плавное уменьшение размера новой звезды после 0.3 секунды
    setTimeout(() => {
        newStar.style.opacity = 0; // Делаем звезду прозрачной
        newStar.style.transform = 'scale(0.5)'; // Уменьшаем размер в половину
        setTimeout(() => {
            newStar.remove(); // Удаляем звезду после анимации
        }, 300); // Устанавливаем задержку в 0.3 секунды
    }, 300); // Устанавливаем задержку в 0.3 секунды
}

// Функция обработки нажатия по главной звезде
function mainStarClick() {
    // Создание новой звезды при нажатии по главной звезде
    createNewStar();
}

// Вызов функции создания новой звезды при клике по главной звезде
document.querySelector('.central-star').addEventListener('click', 
