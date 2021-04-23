import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import QRImage from '../../assets/QR.png'

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

export default function SingleCard() {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Dollar Balance
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Available Balance
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            $2700,00
          </Typography>
        </CardContent>
      </div>
      <div className={classes.qrimage}>
        <img src={QRImage} />
      </div>
    </Card>
  );
}
