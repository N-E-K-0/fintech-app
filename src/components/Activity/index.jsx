import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//Components
import TabPanel from './tabPanel'

const useStyles = makeStyles((theme) => ({
  root:{
    backgroundColor: 'white',
    border: '1px solid #E9EFFF',
    borderRadius: '8px',
    padding: '1rem'
  },
  header:{
    display:'flex',
    justifyContent: 'flex-start'
  },
}));

const Activity = (props) =>{
  const classes = useStyles();
  
  return(
    <>
      <h1 className={classes.header}>Recent Activity</h1>
      <Grid container className={classes.root}>
        <Grid item xs={10}>
          <TabPanel />
        </Grid>
        <Grid item xs={2}>
          <a href='#'>View all</a>
        </Grid>
      </Grid>
    </>
  )
}

export default Activity;