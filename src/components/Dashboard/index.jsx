//Components
import NavBar from '../NavigationBar'
import Breadcrumb from '../Breadcrumbs'
import CardList from '../Card/CardList'
import Footer from '../Footer'

const Dashboard = () =>{
  return(
    <>
      <NavBar />
      <Breadcrumb />
      <CardList />
      <Footer />
    </>
  )
}

export default Dashboard;