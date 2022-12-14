const welcome = document.querySelector('.welcome'),
  day = document.querySelector('.day'),
  time = document.querySelector('.time'),
  left = document.querySelector('.left');
let interval;

const getTimeRemaining = () => {
  let date = new Date();
  const deadline = new Date(date.getFullYear() + 1, 0, 1);

  const hours = date.getHours();

  let welcomeMessage = '';
  switch (true) {
    case hours <= 10:
      welcomeMessage = 'Доброе утро';
      break;
    case hours <= 16:
      welcomeMessage = 'Добрый день';
      break;
    case hours <= 21:
      welcomeMessage = 'Добрый вечер';
      break;
    default:
      welcomeMessage = 'Доброй ночи';
      break;
  }

  const time = date.toLocaleTimeString('en');
  const dayOfWeek = date.toLocaleDateString('ru-Ru', { weekday: 'long' });

  let dateStop = new Date(deadline).getTime();
  let dateNow = date.getTime();
  let timeRemaining = (dateStop - dateNow) / 1000;

  let days = Math.floor(timeRemaining / 60 / 60 / 24);

  return {
    days,
    time,
    dayOfWeek,
    welcomeMessage,
  };
};

const updateClock = () => {
  let getTime = getTimeRemaining();

  welcome.textContent = getTime.welcomeMessage;
  day.textContent = `Сегодня: ${getTime.dayOfWeek}`;
  time.textContent = `Текущее время: ${getTime.time}`;
  left.textContent = `До нового года осталось ${getTime.days} дней`;
};

updateClock();
interval = setInterval(updateClock, 1000);
