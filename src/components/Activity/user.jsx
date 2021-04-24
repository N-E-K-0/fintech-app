import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import AvatarImage from '../../assets/Avatar.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex', 
    margin: '1rem' 
  },
  userInfo:{
    display: 'flex',  
    justifyContent: 'flex-start',
  }
}));

const User = () =>{
  const classes = useStyles();

  return(
    <Grid container className={classes.root}>
      <Grid xs={1}>
        <img src={AvatarImage} />
      </Grid>
      <Grid xs={9} className={classes.userInfo}>
        <h5>Status: Dollar balance</h5>
        <p>To: John doe, john@gmail.com</p>
      </Grid>
      <Grid xs={2}>
        <h3>+1759.00</h3>
        <button>Approved</button>
      </Grid>
    </Grid>  
  )
}

export default User