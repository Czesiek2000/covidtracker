import { Grid, Card } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

export default function Footer(props) {
    const { bottom } = props;
    
    return (
        <div style={{ position: bottom && "fixed", bottom: bottom && 0, width: '100%' }}>
            <Card style={{ padding: '15px', backgroundColor: blue[700], color: 'white' }}>
                <Grid container justifyContent="space-between" style={{ padding: '10px 50px'}}>
                    <Grid item>Created with <a href="https://covid19api.com" style={{ textDecoration: 'none', color: blue[300] }}>Covid19api</a></Grid>
                    <Grid item>Developed by <a href="https://github.com/Czesiek2000" style={{ textDecoration: 'none', color: blue[300] }}>Czesiek2000</a></Grid>
                </Grid>
                <div style={{ textAlign: 'center', color: 'white' }}>All rights reserved</div>
            </Card>
        </div>
    )
}