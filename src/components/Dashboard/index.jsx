import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//Components
import NavBar from '../NavigationBar'
import Breadcrumb from '../Breadcrumbs'
import CardList from '../Card/CardList'
import Action from '../Action'
import Activity from '../Activity'
import Footer from '../Footer'

import Banner from '../../assets/top-bg.png'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  upperBody:{
    backgroundImage: `url(${Banner})`,
    backgroundRepeat: 'no-repeat',
  },
  lowerBody:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: '1rem',
    padding: '1rem'
  },
}));

const Dashboard = () =>{
  const classes = useStyles();

  return(
    <>
      <Grid container className={classes.upperBody}>
        <Grid xs={12}><NavBar /></Grid>
        <Grid xs={12}><Breadcrumb /></Grid>
        <Grid xs={12}><CardList /></Grid>
      </Grid>
      <Grid container className={classes.lowerBody}>
        <Grid xs={4}>
          <Action />
        </Grid>
        <Grid xs={8}>
          <Activity />
        </Grid>
      </Grid>
      <Footer />
    </>
  )
}

export default Dashboard;