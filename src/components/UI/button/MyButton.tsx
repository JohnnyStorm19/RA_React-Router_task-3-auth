import { MyButtonProps } from "../../../models";
import classes from './MyButton.module.css';

const MyButton: React.FC<MyButtonProps> = ({children, type, className='', handler=null}) => {
  const btnClass = [classes.myButton, className].join(' ');
  const emptyFunc = () => {return};
  return (
    <button className={btnClass} type={type} onClick={handler ? handler : emptyFunc}>
      {children}
    </button>
  )
}

export default MyButton
