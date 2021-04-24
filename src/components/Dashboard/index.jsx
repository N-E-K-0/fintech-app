import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

//Components
import NavBar from '../NavigationBar'
import Breadcrumb from '../Breadcrumbs'
import CardList from '../Card/CardList'
import Action from '../Action'
import Activity from '../Activity'
import Footer from '../Footer'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  body:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1rem',
    padding: '1rem'
  },
}));

const Dashboard = () =>{
  const classes = useStyles();

  return(
    <>
      <NavBar />
      <Breadcrumb />
      <CardList />
      <Grid container className={classes.body}>
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