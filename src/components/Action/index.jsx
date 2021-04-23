import { makeStyles } from '@material-ui/core/styles';

//Components
import Button from './button'

//icons
import Pay from '../../assets/pay.png'
import Request from '../../assets/request.png'
import TopUp from '../../assets/top-up.png'
import Withdraw from '../../assets/withdraw.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    display: 'flex',  
    flexWrap: 'wrap',
  },
}));

const Action = () =>{
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Button 
        icon={Pay} 
        text="Pay" 
      />
      <Button 
        icon={Request} 
        text="Request" 
      />
      <Button 
        icon={TopUp} 
        text="TopUp" 
      />
      <Button 
        icon={Withdraw} 
        text="Withdraw" 
      />
    </div>
  )
}

export default Action;