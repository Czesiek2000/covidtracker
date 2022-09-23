import React, { useState } from 'react';
import { Button, TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        width: '80%',
        margin: '30px auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        [(theme.breakpoints.down('sm'))]: {
            flexDirection: 'column',
            width: '80%',
        },
        [(theme.breakpoints.up('sm'))]: {
            flexDirection: 'row'
        }
    },
    field: {
        width: '40%',
        margin: '10px 15px 10px 0',
        [(theme.breakpoints.down('sm'))]: {
            width: '100%'
        }
    },
    reset: {
        marginLeft: '10px',
    },
    buttons: {
        display: 'flex',
        alignItems: 'center',
        [(theme.breakpoints.down('sm'))]: {
            margin: '10px auto',
            gap: '5px'
        }
    }
}))

export default function SearchBar({ handleClick, handleReset }) {
    let [country, setCountry] = useState('');
    
    // needs to be here unless app is lagging
    function handleChange(e) {
        setCountry(e.target.value);
    }

    const classes = useStyles();
    return (
        <div className={classes.container}>
            <TextField 
                id="outlined-basic" 
                label="Search country" 
                variant="outlined" 
                className={classes.field} 
                onChange={handleChange}
                value={country} 
            />
            <div className={classes.buttons}>
                <Button variant="contained" color="primary" onClick={() => handleClick(country)}>Search</Button>
                <Button variant="contained" color="secondary" onClick={() => { handleReset(); setCountry('') }} className={classes.reset}>Reset</Button>
            </div>
        </div>
    )
}

