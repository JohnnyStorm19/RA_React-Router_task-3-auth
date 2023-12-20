import { ReactNode } from "react"
import classes from './MyMain.module.css'

const Main = ({children}: {children: ReactNode[]| ReactNode}) => {
  return (
    <main className={classes.myMain}>
      {children}
    </main>
  )
}

export default Main
