import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  button:{
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
    flexDirection: 'column',
    backgroundColor: '#525198',
    border: '1px solid #E9EFFF',
    borderRadius: '8px',
  }
}));

const Button = (props) =>{
  const classes = useStyles();
  const { icon, text } = props;

  return(
    <div className={classes.button}>
      <img src={icon} />
      <h4>{text}</h4>
    </div>  
  )
}

export default Button;