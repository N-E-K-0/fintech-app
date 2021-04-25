import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

//Images
import AvatarImage from '../../assets/images/Avatar.png';

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
  },
  btn:{
    backgroundColor:'white',
    color: '#114B39',
    border: '1px solid #114B39',
    borderRadius: '4px'
  }
}));

const User = (props) =>{
  const classes = useStyles();
  const { name, email, balance } = props;

  return(
    <Grid container className={classes.root}>
      <Grid item xs={1} className={classes.image}>
        <img src={AvatarImage} />
      </Grid>
      <Grid item xs={8} className={classes.userInfo}>
        <h3> Dollar balance</h3>
        <p>To: {name}, {email}</p>
      </Grid>
      <Grid item xs={2}>
        <h3>+{balance}</h3>
        <button className={classes.btn}>Approved</button>
      </Grid>
    </Grid>  
  )
}

export default User