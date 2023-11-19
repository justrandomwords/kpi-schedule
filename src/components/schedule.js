import firstWeekSchedule from '../data/firstWeekSchedule';
import secondWeekSchedule from '../data/secondWeekSchedule';
import { isFirstWeek } from './timeManage'
import { store } from '../services/state/store';
import lessonData from '../data/lessonData';

export function getSchedule() {
  let scheduleName, weekIndex, scheduleData;

  if (isFirstWeek()) {
    weekIndex = 0;
    scheduleName = 'Перший тиждень';
    scheduleData = firstWeekSchedule;
  }
  else {
    weekIndex = 1;
    scheduleName = 'Другий тиждень';
    scheduleData = secondWeekSchedule;
  }

  return { 
    weekIndex: weekIndex,
    name: scheduleName,
    data: removeOptionalLessons(scheduleData)
  }
}

export function getScheduleByIndex(weekIndex) {
  let scheduleName, scheduleData;

  if (weekIndex === 0) {
    scheduleName = 'Перший тиждень';
    scheduleData = firstWeekSchedule;
  }
  else if (weekIndex === 1) {
    scheduleName = 'Другий тиждень';
    scheduleData = secondWeekSchedule;
  }

  return { 
    weekIndex: weekIndex,
    name: scheduleName,
    data: removeOptionalLessons(scheduleData)
  }
}

export function removeOptionalLessons(prevSchedule) {
  let optionalLesson = store.getState().settings.optionalLesson;

  if (optionalLesson === -1) {
    try {
      const storageOptionalLesson = JSON.parse(localStorage.getItem('settings'));
      optionalLesson = storageOptionalLesson.optional_lesson;
    } catch (error) {
      return prevSchedule;
    }
  }

  const idOptionalLessons = lessonData
    .filter(elememt => { if (elememt.is_optional) return elememt })
    .map(elememt => elememt.id);
  const optionalLessonIndex = idOptionalLessons.indexOf(optionalLesson);
  idOptionalLessons.splice(optionalLessonIndex, 1)

  function isHasElement(id) {
    for (let index = 0; index < idOptionalLessons.length; index++) {
      if (idOptionalLessons[index] === id)
        return true
    }
    return false
  }

  let newSchedule = [...prevSchedule];
  newSchedule = newSchedule.map(day => {
    return day.filter(lesson => !isHasElement(lesson.id))
  });

  return newSchedule;
}