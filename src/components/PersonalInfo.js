import { useEffect, useState } from "react";
import { red, green, blue } from '@material-ui/core/colors'
import { Line } from "react-chartjs-2";

export default function PersonalInfo(props) {
    const { country } = props;
    const [data, setData] = useState([]);
    const [dataset, setDataset] = useState([]);

    function addZero(i) {
        return i < 10 ? "0" + i : i;
    }

    useEffect(() => {
        fetch(`https://api.covid19api.com/total/dayone/country/${country}`)
            .then((response) => response.json())
            .then((data) => {
                setData(data);
            });
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
        if(data.length > 0){
            getLabels();
        }
    }, [data]);

    return (
        <div style={{ paddingBottom: '140px'}}>
            <h1>Information for { country }</h1>
            {dataset.length !== 0 && <Line data={dataset}/> }
        </div>
    );
}