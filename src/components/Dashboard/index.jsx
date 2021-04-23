import { makeStyles } from '@material-ui/core/styles';

//Components
import NavBar from '../NavigationBar'
import Breadcrumb from '../Breadcrumbs'
import CardList from '../Card/CardList'
import Action from '../Action'
import Footer from '../Footer'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  body:{
    display: 'flex',
  }
}));

const Dashboard = () =>{
  const classes = useStyles();

  return(
    <>
      <NavBar />
      <Breadcrumb />
      <CardList />
      <div className={classes.body}>
        <Action />
      </div>
      <Footer />
    </>
  )
}

export default Dashboard;