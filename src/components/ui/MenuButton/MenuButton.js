import './menu-button.css'

export default function MenuButton(props) {
  return ( 
    <button className={`menu-button ${props.handleClick && 'has-event'} ${props.style}`}
    onClick={props.handleClick}>
      <img className='button-icon' src={props.icon}/>
    </button>
  )
}