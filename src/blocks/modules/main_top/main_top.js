const MainTop = class MainTop {
    constructor(){}
    setCookies() {
        document.addEventListener("DOMContentLoaded", function() {
            const mainTop = document.querySelector('.main_top');
            const closeButton = document.querySelector('.main_top__close');

            // Проверяем, была ли плашка закрыта ранее
            const closedTimestamp = localStorage.getItem('mainTopClosedTimestamp');
            if (closedTimestamp) {
                const currentTime = new Date().getTime();
                const elapsedTime = currentTime - parseInt(closedTimestamp);
                const twentyFourHours = 24 * 60 * 60 * 1000; // 24 часа в миллисекундах
                if (elapsedTime < twentyFourHours) {
                    mainTop.style.display = 'none';
                }
            }

            // Обработчик клика на крестик
            closeButton.addEventListener('click', function() {
                mainTop.style.display = 'none';
                // Сохраняем метку времени закрытия плашки
                localStorage.setItem('mainTopClosedTimestamp', new Date().getTime().toString());
            });
        });
    }
    initTimer() {
        document.addEventListener('DOMContentLoaded', () => {
            // Устанавливаем дату окончания
            const endDate = new Date("2024-04-30T00:00:00").getTime();
    
            // Обновляем таймер каждую секунду
            const timerInterval = setInterval(function() {
                // Получаем текущую дату и время
                const now = new Date().getTime();
                
                // Вычисляем разницу между текущим временем и временем окончания
                const distance = endDate - now;
                
                // Рассчитываем дни, часы и минуты
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                
                // Обновляем отображение таймера
                document.getElementById("days").innerText = days;
                document.getElementById("hours").innerText = hours;
                document.getElementById("minutes").innerText = minutes;
    
                // Обновляем текст окончаний в зависимости от числа
                document.getElementById("days-text").innerText = getEnding(days, ['День', 'Дня', 'Дней']);
                document.getElementById("hours-text").innerText = getEnding(hours, ['Час', 'Часа', 'Часов']);
                document.getElementById("minutes-text").innerText = getEnding(minutes, ['Минута', 'Минуты', 'Минут']);
    
                // Если таймер истек, очищаем интервал
                if (distance < 0) {
                    clearInterval(timerInterval);
                    // Можно выполнить какие-то действия по истечении времени
                }
            }, 1000);
    
            // Функция для выбора правильного окончания в зависимости от числа
            function getEnding(number, endings) {
                let ending;
                if (number % 10 == 1 && number % 100 != 11) {
                    ending = endings[0];
                } else if ([2, 3, 4].includes(number % 10) && ![12, 13, 14].includes(number % 100)) {
                    ending = endings[1];
                } else {
                    ending = endings[2];
                }
                return ending;
            }
        });
    }
    init() {
        this.setCookies();
        this.initTimer();
    }
}

export default MainTop;