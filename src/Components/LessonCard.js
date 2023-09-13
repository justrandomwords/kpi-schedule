import './styles/lesson-card.css'

export default function LessonCard(props) {
  return (
    <div className={`lesson-container ${props.type} ${props.lessonLink ? 'has-link' : ''}`} 
    onClick={() => openLink(props.lessonLink)}>
      <p className='lesson-name'>{props.name}</p>
      <p className='lesson-teacher'>{props.teacher}</p>
    </div>
  )
}

function openLink(link) {
  if(link)
    window.open(link, '_blank')
}