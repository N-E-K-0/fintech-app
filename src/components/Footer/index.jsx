import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//Images
import AppStoreImage from '../../assets/images/iStore.png'
import PlayStoreImage from '../../assets/images/Playstore.png'
import MobileImage from '../../assets/images/mobile.png'
import Corner from '../../assets/images/Corner.png'

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
    borderRadius: '8px'
  },
  copyright:{
    float: 'left',
    fontSize: '13px',
  },
  legal:{
    float: 'right',
    fontSize: '13px',
  },
}));

const Footer = () =>{
  const classes = useStyles();

  return(
    <Grid container>
      <Grid item xs={12} className={classes.footer}>
        <div className={classes.section1}>
          <h1>Get Fintech App</h1>
          <p>Available on</p>
          <div className={classes.section1Inside}>
            <img src={AppStoreImage} alt="appStore"/>
            <img src={PlayStoreImage} alt="playStore"/>
          </div>
        </div> 
        <div className={classes.section2}>
          <img src={MobileImage} alt="mobileImage"/>
        </div>    
      </Grid>
      <Grid item xs={11}>
        <p className={classes.copyright}>Copyright © 2017 - 2020 Fintech Pte. Ltd. All rights reserved.</p>
      </Grid>
      <Grid item xs={1}>
        <p className={classes.legal}>Legal | Privacy</p>
      </Grid>
    </Grid>
  )
}

export default Footer;