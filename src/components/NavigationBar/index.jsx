import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Avatar from '@material-ui/core/Avatar';
import AvatarImage from '../../assets/Avatar.png';
import Flag from '../../assets/Flag.svg';
import Bell from '../../assets/Vector.png'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    borderBottom: '1px solid rgba(255, 255, 255, 0.24)', 
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
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
  },
  tab:{
    backgroundColor: 'rgba(0, 0, 0, 0.0005)',
    color: 'white',
    '&:hover':{
      background: 'rgba(255, 255, 255, 0.16)',
      borderRadius: '4px',
    }
  }
}));

const NavBar = () =>{
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return(
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Fintech App
          </Typography>
          <div className={classes.grow}>
            <Tabs
              value={value}
              indicatorColor="primary"
              onChange={handleChange}
              aria-label="disabled tabs example"
            >
              <Tab label="Wallet" />
              <Tab label="History" />
              <Tab label="Recipeints" />
              <Tab label="QR Codes" />
            </Tabs>
          </div>
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge color="secondary">
                <NotificationsNoneIcon />
              </Badge>
            </IconButton>
            <img src={Flag} className={classes.flag}/>
            <Avatar alt="Travis Howard" src={AvatarImage}/>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavBar