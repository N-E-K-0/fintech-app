import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

//Components
import Card from './Card'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
}));


const CardList = () =>{
  const classes = useStyles();

  return(
    <div className={classes.root}>
      <Card />
      <Card />
      <Card />
    </div>
  )
}

export default CardList;