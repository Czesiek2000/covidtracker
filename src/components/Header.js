import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(({
  header: {
    textAlign: 'center',
    textTransform: 'uppercase',
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px',
    fontWeight: 'bold'
  }
}))

function Header() {
  const classes = useStyles();
    return (
      <div className={classes.header}>
        <h3>Covid19 tracker</h3>
      </div>
    );
  }
  
  export default Header;