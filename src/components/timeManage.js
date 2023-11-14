const startDate = new Date('2023-09-04T00:00');

const lessonLenght = timeToNumber(1, 35);
const scheduleTime = [
  { hours: 8, minutes: 30},
  { hours: 10, minutes: 25},
  { hours: 12, minutes: 20},
  { hours: 14, minutes: 15},
  { hours: 16, minutes: 10},
]
const numberScheduleTime = scheduleTime.map(lessontTime => timeToNumber( ...Object.values(lessontTime) ))


function timeToNumber( hours, minutes) {
  return hours + minutes / 60;
}

export function isFirstWeek() {
  const nowDate = new Date(Date.now()); 
  let weeks = ((nowDate - startDate) / (7 * 24 * 60 * 60 * 1000));

  return weeks % 2 < 1 ? true : false;
}

function getNowDate() {
  const nowDate = new Date(Date.now());
  return nowDate;
}

export function getNowDay() {
  const nowDate = getNowDate(); 
  return nowDate.getDay() - 1;
}  

export function getNowLesson() {
  const nowDate = getNowDate(); 
  const time = timeToNumber(nowDate.getHours(), nowDate.getMinutes());

  let indexLesson = -1;
  if (time >= numberScheduleTime[0] && time <= (numberScheduleTime[0] + lessonLenght)) {
    indexLesson = 0;
  } else if (time >= numberScheduleTime[1] && time <= (numberScheduleTime[1] + lessonLenght)) {
    indexLesson = 1;
  } else if (time >= numberScheduleTime[2] && time <= (numberScheduleTime[2] + lessonLenght)) {
    indexLesson = 2;
  } else if (time >= numberScheduleTime[3] && time <= (numberScheduleTime[3] + lessonLenght)) {
    indexLesson = 3;
  } else if (time >= numberScheduleTime[4] && time <= (numberScheduleTime[4] + lessonLenght)) {
    indexLesson = 4;
  }

  return indexLesson;
}