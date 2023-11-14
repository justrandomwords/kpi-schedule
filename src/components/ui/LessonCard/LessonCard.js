import './lesson-card.css'
import { getTypeName } from "../../../enums/lessonsType"
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export default function LessonCard(props) {
  const cardGlow = useSelector(store => store.settings.cardGlow) 
  
  useEffect(() => {
    const target = document.documentElement.style;
    target.setProperty('--blur-glow-card-lesson', cardGlow.blur+'rem')
    target.setProperty('--strength-glow-card-lesson', cardGlow.strength+'rem')
  }, [cardGlow])

  return (
    <div className={`lesson-container ${props.type} ${props.lessonLink && 'has-link'} ${props.active && 'active'} ${props.type && 'has-lesson'}`}
    onClick={() => openLink(props.lessonLink)}>
      { props.type && 
      <div className='lesson-statusbar'>
        <p className='lesson-type'>{getTypeName(props.type)}</p>
      </div>}
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