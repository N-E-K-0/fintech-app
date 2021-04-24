import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

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

const Activity = () =>{
  const classes = useStyles();

  return(
    <h1>Recent Activity</h1>
  )
}

export default Activity;