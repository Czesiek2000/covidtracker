import { useEffect, useState } from "react";
import { red, green, blue } from '@material-ui/core/colors'
import { Line } from "react-chartjs-2";
import { Button } from "@material-ui/core";

export default function PersonalInfo({ country, handleReset }) {
    const [data, setData] = useState([]);
    const [dataset, setDataset] = useState([]);

    function addZero(i) {
        return i < 10 ? "0" + i : i;
    }

    useEffect(() => {
        fetch(`https://api.covid19api.com/total/dayone/country/${country}`)
            .then((response) => {
                if(response.ok){
                    return response.json();
                }
                throw new Error("cannot fetch data")
            })
            .then((data) => {
                setData(data);
            })
            .catch(err => {
                setData(err);
            })
    }, [country]);

    useEffect(() => {

        function getLabels(){
            const label = [];
            data.forEach((element) => {
                let date = `${addZero(new Date(element.Date).getDate())} / ${addZero(new Date(element.Date).getMonth() + 1)} / ${addZero(new Date(element.Date).getFullYear())}`;
                label.push(date);
            });
            let set = {
                labels: label,
                datasets: [
                    {
                        label: 'Confirmed',
                        data: data.map((element) => element.Confirmed),
                        fill: false,
                        backgroundColor: blue[500],
                        borderColor: blue[500],
                    },
                    {
                        label: 'Deaths',
                        data: data.map((element) => element.Deaths),
                        fill: false,
                        backgroundColor: red[500],
                        borderColor: red[500],
                    },
                    {
                        label: 'Recovered',
                        data: data.map((element) => element.Recovered),
                        fill: false,
                        backgroundColor: green[500],
                        borderColor: green[500],
                    }
                ]
            }
            setDataset(set);
        }
        if(Array.isArray(data) && data.length > 0){
            getLabels();
        }
    }, [data]);

    return (
        <div style={{ paddingBottom: '140px'}}>
            <h1 style={{ textAlign: 'center' }}>Information for { country }</h1>
            {(Array.isArray(data) && data.length !== 0) && <Line data={dataset}/> }
            {(!Array.isArray(data) || data.length === 0) && <h3 style={{ color: red[500], textAlign: 'center' }}>{country} was not found</h3>}
            <Button variant="contained" color="primary" 
                onClick={() => handleReset()} 
                style={{ marginTop: '10px' }}>
                    Go back to list
            </Button>
        </div>
    );
}