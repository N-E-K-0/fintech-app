import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

//Images
import AvatarImage from '../../assets/Avatar.png';
import Flag from '../../assets/Flag.svg';
// import BellIcon from '../../assets/'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    borderBottom: '1px solid white'
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
    color:'white'
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  flag:{
    width: '20%',
    height: 'auto',
    padding: '0.5rem'
  },
  tab:{
    backgroundColor: 'rgba(0, 0, 0, 0.0005)',
    color: 'white',
    fontSize: '13px',
    '&:hover':{
      backgroundColor: 'rgba(255, 255, 255, 0.16)',
      borderRadius: '4px',
    }
  },
  avatar:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '0.8rem',
    height: '50%',
  }
}));

const NavBar = () =>{
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return(
    <Grid xs={12} className={classes.root}>
      <Toolbar>
        <Grid xs={2}>
          <Typography className={classes.title} variant="h6" noWrap>
            Fintech App
          </Typography>
        </Grid>
        <Grid xs={8}>
          <Tabs
            value={value}
            indicatorColor="#ede7f6"
            onChange={handleChange}
            aria-label="disabled tabs example"
          >
            <Tab label="Wallet" className={classes.tab}/>
            <Tab label="History" className={classes.tab}/>
            <Tab label="Recipeints" className={classes.tab}/>
            <Tab label="QR Codes" className={classes.tab}/>
          </Tabs>
        </Grid>
        <Grid xs={2} className={classes.sectionDesktop}>
          <IconButton aria-label="show 17 new notifications" color="inherit">
            <Badge>
              <NotificationsNoneIcon 
                style={{ color: 'white' }}
              />
            </Badge>
          </IconButton>
          <img src={Flag} className={classes.flag}/>
          <img src={AvatarImage} className={classes.avatar}/>
        </Grid>
      </Toolbar>
    </Grid>
  )
}

export default NavBar