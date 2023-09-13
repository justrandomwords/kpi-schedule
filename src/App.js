import ReactDOM from 'react-dom/client';
import './App.css';
import ScheduleGrid from './Components/ScheduleGrid';
import firstWeekSchedule from './Data/firstWeekSchedule'
import secondWeekSchedule from './Data/secondWeekSchedule'

const startDate = new Date('2023-09-04T00:00');
let isDisplayFirstWeek = isFirstWeek(startDate);

export default function App() {
  return (
    <div className='App'>
      {isDisplayFirstWeek ? (
        <ScheduleGrid name='Перший тиждень' lessonSchedule={firstWeekSchedule}/>
      ) : (
        <ScheduleGrid name='Другий тиждень' lessonSchedule={secondWeekSchedule}/>
      )}
    </div>
  );
}

export function changeWeek() {
  isDisplayFirstWeek = isDisplayFirstWeek ? false : true;

  ReactDOM.createRoot(document.querySelector('.App')).render(
    isDisplayFirstWeek ? (
      <ScheduleGrid name='Перший тиждень' lessonSchedule={firstWeekSchedule}/>
    ) : (
      <ScheduleGrid name='Другий тиждень' lessonSchedule={secondWeekSchedule}/>
    )
  )
}

function isFirstWeek(startDate) {
  const nowDate = new Date(Date.now()); 
  const weeks = Math.floor(nowDate - startDate) / (7 * 24 * 60 * 60 * 1000);

  return weeks % 2 === 0 ? true : false;
}