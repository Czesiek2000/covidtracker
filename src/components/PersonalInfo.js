import { useEffect, useState } from "react";
import { red, green, blue } from '@material-ui/core/colors'
import { Line } from "react-chartjs-2";

export default function PersonalInfo(props) {
    const { country } = props;
    const [data, setData] = useState([]);
    const [dataset, setDataset] = useState(null);

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
                // let date = `${new Date(element.Date).getDay() + 1} / ${new Date(element.Date).getMonth()} / ${new Date(element.Date).getFullYear()}`;
                label.push(element.Date);
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
        getLabels();
    }, [data]);

    return (
        <div style={{ paddingBottom: '140px'}}>
            <h1>Information for { country }</h1>
            <Line data={dataset}/>
        </div>
    );
}