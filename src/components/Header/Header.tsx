import { IHeader } from '../../models'
import classes from './MyHeader.module.css'

const Header = ({children}: IHeader) => {
  return (
    <header className={classes.myHeader}>
      {children}
    </header>
  )
}

export default Header
