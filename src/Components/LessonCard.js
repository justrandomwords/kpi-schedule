import './styles/lesson-card.css'
import { getTypeName } from "../Enums/lessonsType"
import { useEffect, useRef } from 'react';

export default function LessonCard(props) {
  return (
    <div className={`lesson-container ${props.type} ${props.lessonLink && 'has-link'}`}
    onClick={() => openLink(props.lessonLink)}>
      <div className='lesson-statusbar'>
        <p className='lesson-type'>{getTypeName(props.type)}</p>
      </div>
      <div className='text-container'>
        <p className='lesson-name'>{props.name}</p>
        <p className='lesson-teacher'>{props.teacher}</p>
      </div>
    </div>
  )
}

function openLink(link) {
  if(link)
    window.open(link, '_blank')
}