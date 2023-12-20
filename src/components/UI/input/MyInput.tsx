import { MyInputProps } from "../../../models"
import classes from './MyInput.module.css'

const MyInput: React.FC<MyInputProps> = (props) => {
    return (
      <input className={classes.myInput} {...props}/>
    )
  }

export default MyInput
