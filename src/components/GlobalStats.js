import React, { useEffect, useState } from 'react';

import { makeStyles, Card, Grid, Typography } from '@material-ui/core';
import { red, green, blue } from '@material-ui/core/colors'

const useStyles = makeStyles({
    statsContainer: {
        width: '90%',
        margin: '20px auto'
    }
})

export default function GlobalStats() {

    const [global, setGlobal] = useState({})
    useEffect(() => {
        const fetchData = () => {
            fetch('https://api.covid19api.com/summary')
            .then(res => res.json())
            .then(d => {
                console.log(d["Countries"]);
                setGlobal(d["Global"])
            })
        }
        fetchData();
    },[])

    const checkZero = (d) => {
        return d < 10 ? `0${d}` : d
    }

    const formatDate = () => {
        let date = global.Date;
        let formated = `${checkZero(new Date(date).getDay() + 1)} / ${new Date(date).getMonth() + 1} / ${new Date(date).getFullYear()} ${checkZero(new Date(date).getHours())} : ${checkZero(new Date(date).getMinutes())}`;
        return formated;
    }

    const classes = useStyles();
    return (
        <div className={classes.statsContainer}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} lg={4}>
                    <Card style={{ textAlign: 'center', padding: '15px', backgroundColor: blue[500], color: 'white' }}>
                        <Typography variant="h4">Total Confirmed</Typography>
                        <Typography variant="h5">{global.TotalConfirmed}</Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <Card style={{ textAlign: 'center', padding: '15px', backgroundColor: red[500], color: 'white' }}>
                        <Typography variant="h4">Total deaths</Typography>
                        <Typography variant="h5">{global.TotalDeaths}</Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} md={4} lg={4}>
                    <Card style={{ textAlign: 'center', padding: '15px', backgroundColor: green[500], color: 'white' }}>
                        <Typography variant="h4">Total recovered</Typography>
                        <Typography variant="h5">{global.TotalRecovered}</Typography>
                    </Card>
                </Grid>                
            </Grid>
            <p style={{ textAlign: 'center'}}>Data from: {formatDate()}</p>
        </div>
    )
}