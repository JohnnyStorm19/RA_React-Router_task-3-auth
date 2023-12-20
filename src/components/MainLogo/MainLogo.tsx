import { ReactNode } from 'react'
import classes from './MainLogo.module.css'

const MainLogo = ({children}: {children: ReactNode[]| ReactNode}) => {
  const handleClick = () => {
    window.location.reload();
  }
  return (
    <div className={classes.mainLogo} onClick={handleClick}>
      {children}
    </div>
  )
}

export default MainLogo
