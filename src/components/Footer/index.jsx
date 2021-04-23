import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//Images
import AppStoreImage from '../../assets/iStore.png'
import PlayStoreImage from '../../assets/Playstore.png'
import MobileImage from '../../assets/mobile.png'
import Corner from '../../assets/Corner.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  footer:{
    display:'flex',
    backgroundColor: 'white',
    borderRadius: '8px',
    textAlign: 'left',
  },
  section1:{
    flex: 1,
    flexDirection: 'column',
    margin: '1rem',
    padding: '1rem',
  },
  section1Inside:{
    flexDirection: 'row',
  },
  section2:{
    flex: 1,
    backgroundImage: `url(${Corner})`,
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
  },
}));

const Footer = () =>{
  const classes = useStyles();

  return(
    <Grid container spacing={3}>
      <Grid item xs={1}>
        <h1>blank</h1>
      </Grid>
      <Grid item xs={10} className={classes.footer}>
        <div className={classes.section1}>
          <h1>Get Fintech App</h1>
          <p>Available on</p>
          <div className={classes.section1Inside}>
            <img src={AppStoreImage} />
            <img src={PlayStoreImage} />
          </div>
        </div> 
        <div className={classes.section2}>
          <img src={MobileImage} />
        </div>    
      </Grid>
      <Grid item xs={1}>
        <h1>blank</h1>
      </Grid>
    </Grid>
  )
}

export default Footer;