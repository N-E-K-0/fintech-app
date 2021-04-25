import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//Components
import Button from './button'

//icons
import Pay from '../../assets/images/pay.png'
import Request from '../../assets/images/request.png'
import TopUp from '../../assets/images/top-up.png'
import Withdraw from '../../assets/images/withdraw.png'

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
        <Grid item xs={5}>
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
        <Grid item xs={5}>
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
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  )
}

export default Action;