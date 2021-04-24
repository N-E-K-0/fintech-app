import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//Components
import TabPanel from './tabPanel'
import User from './user'

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
  date:{
    display: 'flex',
    justifyContent: 'flex-start',
    margin: '1rem' 
  }
}));

const Activity = (props) =>{
  const classes = useStyles();
  const { children, value, index, ...other } = props;
  const date = "15 January, 2021"

  const userData ={
    name: "Moohan",
    email: "mohan@gmail.com",
    balance: "$1750",
  }
  
  return(
    <>
      <h1 className={classes.header}>Recent Activity</h1>
      <Grid container className={classes.root}>
        <Grid xs={10}>
          <TabPanel />
        </Grid>
        <Grid xs={2}>
          <a href='#'>View all</a>
        </Grid>
        <Grid xs={12} className={classes.date}>
          {date}
        </Grid>
        <Grid xs={12}>
          <User />
          <User />
          <User />
          <User />
        </Grid>
      </Grid>
    </>
  )
}

export default Activity;