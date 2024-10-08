import LessonCard from '../LessonCard/LessonCard';
import lessonData from '../../../data/lessonData';
import lessonsType from '../../../enums/lessonsType';
import { WordDaysOfWeek } from '../../../enums/DaysOfWeek';
import './day-schedule.css'

function getLessonInfo(lessonID) {
  let lessonInfo;

  lessonData.forEach(lessonData => {
    if (lessonData.id === lessonID) {
      lessonInfo = lessonData;
      return
    }
  })

  return lessonInfo
}

function getCurrentLessonInfo(lessonType, lessonData) {
  let currentTeacher;
  let currentLink = '';

  switch (lessonType) {
    case lessonsType.lecture:
      currentTeacher = lessonData.lecture.teacher;
      currentLink = lessonData.lecture.link;
      break;
    case lessonsType.practice:
      currentTeacher = lessonData.practice.teacher !== '' ? lessonData.practice.teacher : lessonData.lecture.teacher 
      currentLink = lessonData.practice.link !== '' ? lessonData.practice.link : lessonData.lecture.link;
      break;
    case lessonsType.laboratory:
      currentTeacher = lessonData.laboratory.teacher !== '' ? lessonData.laboratory.teacher : lessonData.lecture.teacher
      currentLink = lessonData.laboratory.link !== '' ? lessonData.laboratory.link : lessonData.lecture.link;
      break;
    default:
      break;
  }

  return { teacher: currentTeacher, link: currentLink}
}


export default function DaySchedule(props) {
  let schedule = [];

  schedule.push(<div className='schedule--day-name'>{WordDaysOfWeek[props.index]}</div>)
  for (let i = 1; i < 6; i++) {
    schedule.push(<LessonCard/>)
  }

  if (props.lessonSchedule[props.index].length === 0) {
    return schedule;
  }
  
  props.lessonSchedule[props.index].forEach(lesson => {
    const lessonInfo = getLessonInfo(lesson.id);
    const currentLesson = getCurrentLessonInfo(lesson.type, lessonData[lesson.id]);
    
    lesson.number && schedule.splice(lesson.number, 1, 
      <LessonCard
        active={lesson.active}
        name={lessonInfo.name}
        teacher={currentLesson.teacher}
        type={lesson.type}
        lessonLink={currentLesson.link}
      />
    )
  })

  return (
    <>{schedule}</>
  )
}
