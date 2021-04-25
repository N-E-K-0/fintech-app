import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'white'
  },
}));

export default function Breadcrumb() {
  const classes = useStyles();

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link 
        color="inherit" 
        href="/" 
        className={classes.root}
      >
        Wallet
      </Link>
      <Link 
        color="inherit" 
        href="/getting-started/installation/" 
        className={classes.root}
      >
        Dashboard
      </Link>
    </Breadcrumbs>
  );
}