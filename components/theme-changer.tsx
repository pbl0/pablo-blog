import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useTheme } from 'next-themes'




const ThemeChanger = () => {
  const { theme, setTheme, resolvedTheme } = useTheme();

  function isDarkTheme(): boolean {
    let darkTheme: boolean = false;
    if (
      ( theme === 'system' && resolvedTheme === 'dark')
      || theme === 'dark'
      ){
          darkTheme = true;
      }
    return darkTheme;
  }

  let darkTheme = isDarkTheme();
  return (
    <div className='column mr-1 is-4'>
        { darkTheme ? (
            <a onClick={() => setTheme('light')}>
                <FontAwesomeIcon className='' icon={faSun} size="2x"/>
            </a>
        )
        : ( 
            <a onClick={() => setTheme('dark')}>
                <FontAwesomeIcon className='' icon={faMoon} size="2x"/>
            </a>
        ) }
    
  
    </div>
  )
}

export default ThemeChanger