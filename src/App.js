import ReactDOM from 'react-dom/client';
import './App.css';
import ScheduleGrid from './Components/ScheduleGrid';
import firstWeekSchedule from './Data/firstWeekSchedule'
import secondWeekSchedule from './Data/secondWeekSchedule'
import { useState } from 'react';

export default function App() {
  const startDate = new Date('2023-09-04T00:00');
  let [ isDisplayFirstWeek, setIsDisplayFirstWeek ] = useState(isFirstWeek(startDate));

  function changeWeek() {
    setIsDisplayFirstWeek(prevCondition => !prevCondition)
  }

  function isFirstWeek(startDate) {
    const nowDate = new Date(Date.now()); 
    let weeks = ((nowDate - startDate) / (7 * 24 * 60 * 60 * 1000));
  
    return weeks % 2 < 1 ? true : false;
  }

  return (
    <div className='App'>
      <ScheduleGrid 
        name={isDisplayFirstWeek ? 'Перший тиждень' : 'Другий тиждень'}
        lessonSchedule={isDisplayFirstWeek ? firstWeekSchedule : secondWeekSchedule}
        handleClick={changeWeek}
      />
    </div>
  );
}