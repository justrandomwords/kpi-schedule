import { NumberDaysOfWeek } from '../Enums/DaysOfWeek';
import './styles/schedule-grid.css'
import './styles/day-schedule.css'
import DaySchedule from './DaySchedule';
import { changeWeek } from '../App';

export default function ScheduleGrid(props) {
  return (
    <div className='schedule--grid'>
      <div className='schedule--column'>
        <div></div>
        <div className='schedule--lesson-time'>8:30</div>
        <div className='schedule--lesson-time'>10:25</div>
        <div className='schedule--lesson-time'>12:20</div>
        <div className='schedule--lesson-time'>14:15</div>
        <div className='schedule--lesson-time'>16:10</div>
      </div>
      <div className='schedule--column'>
        {DaySchedule(NumberDaysOfWeek.Monday, props.lessonSchedule)}
      </div>
      <div className='schedule--column'>
        {DaySchedule(NumberDaysOfWeek.Tuesday, props.lessonSchedule) }
      </div>
      <div className='schedule--column'>
        {DaySchedule(NumberDaysOfWeek.Wednesday, props.lessonSchedule)}
      </div>
      <div className='schedule--column highlighted'>
        {DaySchedule(NumberDaysOfWeek.Thursday, props.lessonSchedule)}
      </div>
      <div className='schedule--column'>
        {DaySchedule(NumberDaysOfWeek.Friday, props.lessonSchedule)}
      </div>
      <div className='schedule--week' onClick={() => changeWeek()}>
        <p>{props.name}</p>
      </div>
    </div>
  )
}

