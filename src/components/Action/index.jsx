import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//Components
import Button from './button'

//icons
import Pay from '../../assets/pay.png'
import Request from '../../assets/request.png'
import TopUp from '../../assets/top-up.png'
import Withdraw from '../../assets/withdraw.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',  
    flexWrap: 'wrap',
  },
  header:{
    display:'flex',
    justifyContent: 'flex-start'
  }
}));

const Action = () =>{
  const classes = useStyles();

  const violetColor = '#525198'
  const yellowColor = '#F1B31C'

  return(
    <>
      <h1 className={classes.header}>Action</h1>
      <Grid container className={classes.root}>
        <Grid xs={5}>
          <Button 
            icon={Pay} 
            text="Pay"
            color={violetColor} 
          />
          <Button 
            icon={Request} 
            text="Request"
            color={violetColor}  
          />
        </Grid>
        <Grid xs={5}>
          <Button 
            icon={TopUp} 
            text="TopUp" 
            color={violetColor} 
          />
          <Button 
            icon={Withdraw} 
            text="Withdraw" 
            color={yellowColor} 
          />
        </Grid>
      </Grid>
    </>
  )
}

export default Action;