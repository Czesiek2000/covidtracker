import React, { useState } from 'react';
import { Button, TextField, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        width: '100%',
        margin: '30px auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    field: {
        width: '40%',
        marginRight: '15px',
    }
})

export default function SearchBar({ handleClick, onFocus, handleReset }) {
    let [country, setCountry] = useState('');
    
    function handleChange(e) {
        setCountry(e.target.value);
    }

    const classes = useStyles();
    return (
        <div className={classes.container}>
            <TextField id="outlined-basic" label="Search for country" variant="outlined" className={classes.field} onChange={handleChange} value={country}/>
            <Button variant="contained" color="primary" onClick={(e) => handleClick(country)}>Search</Button>
            <Button variant="contained" color="secondary" onClick={(e) => { handleReset(country = ""); setCountry('') }} style={{ marginLeft: '10px' }}>Reset</Button>
        </div>
    )
}

