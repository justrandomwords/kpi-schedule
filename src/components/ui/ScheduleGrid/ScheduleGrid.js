import { NumberDaysOfWeek } from '../../../enums/DaysOfWeek';
import './schedule-grid.css'
import DaySchedule from '../DaySchedule/DaySchedule';
import { useState } from 'react';

export default function ScheduleGrid(props) {
  const [isFullSize, setIsFullSize] = useState(JSON.parse(localStorage.getItem('isFullScreen')) || false);
  const [lessonContainerHeight, setLessonContainerHeight] = useState(20)

  const columnStyle = {
    gridTemplateRows: `40px repeat(5, minmax(${lessonContainerHeight}px, 1fr))`
  }

  function updateIsFullSize() {
    setIsFullSize(prevCondition => {
      const newCondition = !prevCondition
      localStorage.setItem('isFullScreen', newCondition)
      return newCondition
    })
  }

  return (
    <div className={`schedule-container ${isFullSize && 'full'}`}>
      <div className={`schedule--week-name top ${isFullSize && 'hidden'}`} onClick={props.handleClick}>
        <p>{props.name}</p>
      </div>
      <div className='schedule--grid'>
        <div style={columnStyle} className={`schedule--column time-container ${ isFullSize && 'full'}`}>
          <div></div>
          <div>8:30</div>
          <div>10:25</div>
          <div>12:20</div>
          <div>14:15</div>
          <div>16:10</div>
        </div>
        <div style={columnStyle} className='schedule--column lesson'>
          <DaySchedule 
            index={NumberDaysOfWeek.Monday}  
            lessonSchedule={props.lessonSchedule}
          />
        </div>
        <div style={columnStyle} className='schedule--column lesson'>
          <DaySchedule 
            index={NumberDaysOfWeek.Tuesday}  
            lessonSchedule={props.lessonSchedule}
          />
        </div>
        <div style={columnStyle} className='schedule--column lesson'>
          <DaySchedule 
            index={NumberDaysOfWeek.Wednesday}  
            lessonSchedule={props.lessonSchedule}
          />
        </div>
        <div style={columnStyle} className='schedule--column lesson highlighted'>
          <DaySchedule 
            index={NumberDaysOfWeek.Thursday}  
            lessonSchedule={props.lessonSchedule}
          />
        </div>
        <div style={columnStyle} className='schedule--column lesson'>
          <DaySchedule 
            index={NumberDaysOfWeek.Friday}  
            lessonSchedule={props.lessonSchedule}
          />
        </div>
        <div className='schedule--week-name-container'>
          <button className={`schedule--size-button ${!isFullSize && 'full'}`} onClick={updateIsFullSize}>
            <svg viewBox="0 0 24 24" width="512" height="512">
              <path d="M22.5,15.5A1.5,1.5,0,0,0,21,17v1.5A2.5,2.5,0,0,1,18.5,21H17a1.5,1.5,0,0,0,0,3h1.5A5.506,5.506,0,0,0,24,18.5V17A1.5,1.5,0,0,0,22.5,15.5Z"/>
              <path d="M7,0H5.5A5.506,5.506,0,0,0,0,5.5V7A1.5,1.5,0,0,0,3,7V5.5A2.5,2.5,0,0,1,5.5,3H7A1.5,1.5,0,0,0,7,0Z"/>
              <path d="M7,21H5.5A2.5,2.5,0,0,1,3,18.5V17a1.5,1.5,0,0,0-3,0v1.5A5.506,5.506,0,0,0,5.5,24H7a1.5,1.5,0,0,0,0-3Z"/>
              <path d="M18.5,0H17a1.5,1.5,0,0,0,0,3h1.5A2.5,2.5,0,0,1,21,5.5V7a1.5,1.5,0,0,0,3,0V5.5A5.506,5.506,0,0,0,18.5,0Z"/>
            </svg>
          </button>
          <div className={`schedule--week-name right ${!isFullSize && 'hidden'}`}  onClick={props.handleClick}>
            <p>{props.name}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

