import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

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

  console.log('data',Object.values(Data))
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