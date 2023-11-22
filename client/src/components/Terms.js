import { Grid } from "@mui/material";
import { Card, CardHeader, CardContent, CardActions, Button, Checkbox } from "@mui/material";
import { useState } from "react";

const Terms = () => {

    const [check, setCheck] = useState(false);

    const handleCheck = () => {
        if(check === true){
            window.location.href = '/finalprediction';
            setCheck(false);
        }
        else{
            alert("Please agree to terms and conditions");
        }
    }

    const handleCheckbox = () => {
        if(check === true)
        {
            setCheck(false);
        }
        else{
            setCheck(true);
        }
    }

    return (
        <div className="Terms">
            <Grid display={"flex"} justifyContent={"center"} alignItems={"center"} style={{ height: "800px" }}>
                <Card style={{ height: "80vh", width: "50vw", background: "white", borderRadius: 15 }}>
                    <CardHeader title="Terms and Conditions" style={{ textAlign: "center", borderBottom: "5px solid black" }} />
                    <CardContent>
                        <p><Checkbox onChange={handleCheckbox}/>I agree to the terms and conditions</p>
                    </CardContent>
                    <CardActions sx={{ display: "flex", justifyContent: "center", borderTop: "5px solid black" }}>
                        <Button sx={{ ":hover": { bgcolor: "#68b9f1", color: "black" }, backgroundColor: "#03355A", color: "white" }} style={{ borderRadius: 15, padding: "15px", fontWeight: "bold", fontSize: "15px" }} onClick={handleCheck} >Proceed</Button>
                    </CardActions>
                </Card>
            </Grid>
        </div>
    );
}

export default Terms;