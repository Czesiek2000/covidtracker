import { Grid, Card } from "@material-ui/core";
import { blue, red } from "@material-ui/core/colors";
import { useEffect, useRef } from "react";

export default function Footer(props) {
    const { bottom } = props;
    useEffect(() => {
        const f = footer.current;
        let height = f.clientHeight;
        if(typeof window !== 'undefined'){
            if(window.innerHeight > height){
                if(bottom){
                    f.style.position = 'fixed';
                    f.style.bottom = 0;
                    f.style.width = '100%';
                }
            }
        }
    }, [bottom]);
    
    const footer = useRef();

    return (
        <div ref={footer}>
            <Card style={{ padding: '15px', backgroundColor: blue[600], color: 'white' }}>
                <Grid container justifyContent="space-between" style={{ padding: '10px 50px'}}>
                    <Grid item>Created with <a href="https://covid19api.com" style={{ textDecoration: 'none', color: red[200] }}>Covid19api</a></Grid>
                    <Grid item>Developed by <a href="https://github.com/Czesiek2000" style={{ textDecoration: 'none', color: red[200] }}>Czesiek2000</a></Grid>
                </Grid>
                <div style={{ textAlign: 'center', color: 'white' }}>All rights reserved</div>
            </Card>
        </div>
    )
}