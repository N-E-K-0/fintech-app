import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

//Components
import User from './user'

//Data
import Data from '../../assets/data/dummyData.json'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 'auto',
  },
  datecss:{
    display: 'flex',
    justifyContent: 'flex-start',
    margin: '1rem' 
  }
}));

const TabPanel = () => {
  const classes = useStyles();
  const [datePosted, setDatePosted] = useState("0");

  useEffect(()=>{
    setDatePosted(Data[1].date)
  },[])

  return (
    <div className={classes.root}>
      <div item xs={12} className={classes.datecss}>
        {datePosted}
      </div> 
      <Grid container>
        {Object.values(Data).map(userData=>{
          return(
            <Grid item xs={12}>
              <User 
                name={userData.name}
                email={userData.email}
                balance={userData.balance}
              />
            </Grid>
          )
        })}
        
      </Grid>
    </div>
  );
}

export default TabPanel