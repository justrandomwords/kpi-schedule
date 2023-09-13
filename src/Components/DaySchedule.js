import LessonCard from '../Components/LessonCard';
import lessonData from '../Data/lessonData';
import lessonsType from '../Enums/lessonsType';
import { WordDaysOfWeek } from '../Enums/DaysOfWeek';
import './styles/day-schedule.css'

function GetLessonInfo(lessonID) {
  let lessonInfo;

  lessonData.forEach(lessonData => {
    if (lessonData.id == lessonID) {
      lessonInfo = lessonData;
      return
    }
  })

  return lessonInfo
}

function GetCurrentLessonInfo(lessonType, lessonData) {
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
  }
  return { teacher: currentTeacher, link: currentLink}
}

export default function DaySchedule(index, lessonSchedule) {
  const todayDayOfWeek = new Date(Date.now()).getDay() - 1;
  const isSameDayOfWeek = todayDayOfWeek === index;
  console.log(isSameDayOfWeek);

  let schedule = [];

  schedule.push(<div className='schedule--day-name'>{WordDaysOfWeek[index]}</div>)
  for (let i = 1; i < 6; i++) {
    schedule.push(<LessonCard/>)
  }

  if (lessonSchedule[index].length === 0) {
    return schedule;
  }
  
  lessonSchedule[index].forEach(lesson => {
    const lessonInfo = GetLessonInfo(lesson.id);
    const current = GetCurrentLessonInfo(lesson.type, lessonData[lesson.id]);
    
    lesson.number && schedule.splice(lesson.number, 1, 
      <LessonCard
        name={lessonInfo.name}
        teacher={current.teacher}
        type={lesson.type}
        lessonLink={current.link}
      />
    )
  })

  return schedule;
}
