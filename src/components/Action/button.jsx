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
    border: '1px solid #E9EFFF',
    borderRadius: '8px',
    color:'white',
    margin:'0.5rem',
    padding: '0.5rem'
  }
}));

const Button = (props) =>{
  const classes = useStyles();
  const { icon, text, color } = props;

  return(
    <div 
      className={classes.button} 
      style={{backgroundColor: `${color}`}}
    >
      <img src={icon} />
      <p>{text}</p>
    </div>  
  )
}

export default Button;