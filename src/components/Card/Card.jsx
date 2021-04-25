import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

//Images
import QRImage from '../../assets/images/QR.png'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    margin: '1rem',
    padding: '1rem'
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  qrimage:{
    alignItems: 'flex-end',
    width: '5rem',
    height: '5rem'
  }
}));

export default function SingleCard(props) {
  const classes = useStyles();
  const { balanceType, type, balance } = props

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            {balanceType}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {type}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Available Balance
          </Typography>
          <Typography component="h5" variant="h5" >
            ${balance}
          </Typography>
        </CardContent>
      </div>
      <div className={classes.qrimage}>
        <img src={QRImage} alt="qrImage"/>
      </div>
    </Card>
  );
}
