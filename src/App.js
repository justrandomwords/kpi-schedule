import './App.css';
import ScheduleGrid from './components/ui/ScheduleGrid/ScheduleGrid';
import { useEffect, useState } from 'react';
import Menu from './components/ui/Menu/Menu';
import { getSchedule, getScheduleByIndex, removeOptionalLessons } from './components/schedule';
import { getNowDay, getNowLesson } from './components/timeManage';
import { useDispatch, useSelector } from 'react-redux';
import { setOptionalLesson } from './services/state/user/settingsSlice';

export default function App() {
  const [ schedule, setSchedule ] = useState(getSchedule());
  const optionalLesson = useSelector(store => store.settings.optionalLesson);
  const dispatch = useDispatch();

  function setActiveLesson() {
    setSchedule(prevSchedule => {
      const newSchedule = { ...prevSchedule };
      newSchedule.data.forEach(day => {
        day.forEach(lesson => lesson.active = false)
      });

      try {
        const currentLessonIndex = getNowLesson() + 1;
        newSchedule.data[getNowDay()]
          .find(item => item.number == currentLessonIndex)
          .active = true;
      } catch (error) {}
      
      return newSchedule
    })
  } 

  function changeWeek() {
    setSchedule(prevSchedule => {
      if (prevSchedule.weekIndex == 0) {
        return getScheduleByIndex(1);
      } else if (prevSchedule.weekIndex == 1) {
        return getScheduleByIndex(0);
      }
    })
  }

  function readLocalStorage() {
    const storageOptionalLesson = JSON.parse(localStorage.getItem('settings')).optional_lesson;

    if (storageOptionalLesson)
      dispatch(setOptionalLesson(storageOptionalLesson))
  }

  useEffect(() => {
    readLocalStorage();
    setActiveLesson();

    const interval = setInterval(function() {
      setActiveLesson()
    }, 60000);

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    setSchedule(prevSchedule => getScheduleByIndex(prevSchedule.weekIndex))
    setActiveLesson()
  }, [optionalLesson])
  
  return (
    <div className='App'>
      <Menu/>
      <ScheduleGrid 
        name={schedule.name}
        lessonSchedule={schedule.data}
        handleClick={changeWeek}
      /> 
    </div>
  );
}