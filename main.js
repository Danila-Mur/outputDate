const welcome = document.querySelector('.welcome'),
  day = document.querySelector('.day'),
  time = document.querySelector('.time'),
  left = document.querySelector('.left');
let interval;

const getDayWeek = (date) => {
  const days = [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ];

  return days[date.getDay()];
};

const getTimeRemaining = () => {
  const deadline = '1 january 2023';
  let date = new Date();

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
  const dayOfWeek = getDayWeek(date);

  let dateStop = new Date(deadline).getTime();
  let dateNow = new Date().getTime();
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

  if (getTime.timeRemaining < 0) {
    clearInterval(interval);
    day.textContent = `До нового года осталось 0 дней`;
  }
};

updateClock();
interval = setInterval(updateClock, 1000);
