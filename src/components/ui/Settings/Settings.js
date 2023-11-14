import lessonData from '../../../data/lessonData'
import './settings.css'
import { useDispatch, useSelector } from 'react-redux'
import { setOptionalLesson } from '../../../services/state/user/settingsSlice'
import { invertSettingsVisibility } from '../../../services/state/display/settingsVisibility';
import { ReactComponent as CrossIcon } from '../../../assets/icons/cross-small.svg'
 

function OptionalLesson() {
  const optionalLessonsId = lessonData
  .filter(elememt => elememt.is_optional)
  .map(elememt => elememt.id)

  const optionalLessons = optionalLessonsId.map(index => {
    return (
      <option className='test' value={index}>{lessonData[index].name}</option>
    )
  }) 

  return (<>
    <option value={-1}>Всі</option>
    {optionalLessons}
  </>)
}


export default function Settings() {
  const isOpen = useSelector(store => store.settingsVisibility.value);
  const optionalLesson = useSelector(store => store.settings.optionalLesson);
  const dispatch = useDispatch();

  function closeSettings() {
    dispatch(invertSettingsVisibility())
  }

  function updateSettings(event) {
    const updatedSettings = { optional_lesson: +event.target.value };
    dispatch(setOptionalLesson(updatedSettings.optional_lesson))
    localStorage.setItem('settings', JSON.stringify(updatedSettings))
  }



  return (
    <div className={`settings-container`} open={isOpen}>
      <div className='page'>
        <header className='header'>
          <div>
            Налаштування
          </div>
          <button className='close-button' onClick={closeSettings}>
            <CrossIcon/>
          </button>
        </header>
        <main>
          <div className='optional-lesson-container'>
            <p>Вибірковий предмет</p>
            <select
              value={optionalLesson}
              onChange={updateSettings}
              name='optionalLesson'
            >
              <OptionalLesson/>
            </select>
          </div>
        </main>
      </div>
    </div>
  )
}