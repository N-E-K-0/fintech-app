import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import AvatarImage from '../../assets/Avatar.png';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex', 
  },
  userInfo:{
    textAlign:'left'
  },
  image:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem'
  }
}));

const User = () =>{
  const classes = useStyles();

  return(
    <Grid container className={classes.root}>
      <Grid xs={1} className={classes.image}>
        <img src={AvatarImage} />
      </Grid>
      <Grid xs={8} className={classes.userInfo}>
        <h3>Status: Dollar balance</h3>
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