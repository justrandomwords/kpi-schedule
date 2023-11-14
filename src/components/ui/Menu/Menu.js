import './menu.css'
import settingsIcon from '../../../assets/icons/settings.svg'
import arrowIcon from '../../../assets/icons/angle-left.svg'
import MenuButton from '../MenuButton/MenuButton'
import { useState } from 'react'
import Settings from '../Settings/Settings'
import { useDispatch, useSelector } from 'react-redux'
import { invertSettingsVisibility } from '../../../services/state/display/settingsVisibility'

export default function Menu() {
  const [ isShown, setIsShown ] = useState(false);
  const fullWidth = 50;
  const [ menuWidth, setMenuWidth ] = useState(0);

  function updateMenuVisibility() {
    setMenuWidth(prevWidth => prevWidth === fullWidth ? 0 : fullWidth)
    setIsShown(prevCondition => !prevCondition)
  }

  const menuContainerStyle = {
    width: `${menuWidth}px`, 
    paddingTop: `${fullWidth}px`,
  }

  const fixedContainerStyle = {
    width: `${fullWidth}px`, 
    left: `${50 - fullWidth}px`
  }


  const dispatch = useDispatch();

  function openSettings() {
    dispatch(invertSettingsVisibility())
  }

  return ( 
    <div className='menu-container' style={menuContainerStyle}>
      <Settings/>

      <div className='fixed-container' style={fixedContainerStyle}>
        <MenuButton
          icon={arrowIcon}
          handleClick={updateMenuVisibility}
          style={`${ !isShown && 'out'}`}
        />
      </div>
      <div className='top-container'>
        <MenuButton
        />
      </div>
      <div className='bottom-container'>
        <MenuButton
          icon={settingsIcon}
          handleClick={openSettings}
        />
      </div>
    </div>
  )
}