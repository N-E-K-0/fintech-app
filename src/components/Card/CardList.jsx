import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

//Components
import Card from './Card'

//Data
import Data from '../../assets/data/dummyData.json'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
}));


const CardList = () =>{
  const classes = useStyles();
  const [type, setType] = useState("")
  const [dollarbalance, setDollarBalance] = useState("")
  const [balance, setBalance] = useState("")

  useEffect(()=>{
    setType(Data[1].type)
    setDollarBalance(Data[1].dollarBalance)
    setBalance(Data[1].balance)
  },[])

  return(
    <div className={classes.root}>
      <Card 
        balanceType="Dollar Balance"
        type={type}
        balance={dollarbalance}
      />
      <Card 
        balanceType="My Dollar"
        type={type}
        balance={balance}
      />
    </div>
  )
}

export default CardList;