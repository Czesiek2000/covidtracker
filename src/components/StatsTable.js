import React, { useEffect, useState } from 'react';

import { Button, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';

const useStyles = makeStyles({
    tableRow: {
        "&:hover": {
            backgroundColor: '#ddd'
        }
    }
})

export default function StatsTable(){
    const classes = useStyles();
    const [countries, setCountries] = useState([])

    useEffect(() => {
        const fetchData = () => {
            fetch('https://api.covid19api.com/summary')
            .then(res => res.json())
            .then(d => {
                setCountries(d["Countries"]);
            })
        }
        fetchData();
    },[])

    function numberWithCommas(x) {
        if (x !== undefined) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }

    return (
        <div>
            <TableContainer>
                <Table sx={{ minWidth: 650 }}>
                <TableHead>
                    <TableRow>
                        <TableCell style={{ textAlign: 'center' }}>Country</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>Total Confirmed</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>Total Deaths</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>Total Recover</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>New Confirmed</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>New Deaths</TableCell>
                        <TableCell style={{ textAlign: 'center' }}>New Recovered</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {countries.map((c, i) => (
                        <TableRow style={ i % 2 ? { backgroundColor : "#f2f2f2" } : { backgroundColor : "white" }} className={classes.tableRow} key={i}>
                            <TableCell style={{ textAlign: 'center' }}>{c["Country"]}</TableCell>
                            <TableCell style={{ textAlign: 'center' }}>{numberWithCommas(c["TotalConfirmed"])}</TableCell>
                            <TableCell style={{ textAlign: 'center' }}>{numberWithCommas(c["TotalDeaths"])}</TableCell>
                            <TableCell style={{ textAlign: 'center' }}>{numberWithCommas(c["TotalRecovered"])}</TableCell>
                            <TableCell style={{ textAlign: 'center' }}>{numberWithCommas(c["NewConfirmed"])}</TableCell>
                            <TableCell style={{ textAlign: 'center' }}>{numberWithCommas(c["NewDeaths"])}</TableCell>
                            <TableCell style={{ textAlign: 'center' }}>{numberWithCommas(c["NewRecovered"])}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}