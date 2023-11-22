import { useState } from "react";
import { Grid, Button, IconButton } from "@mui/material";
import allSymptoms from "../components/AllSymptoms";
import axios from 'axios';
import ClearIcon from '@mui/icons-material/Clear';

const Prediction = () => {

    const [symptoms, setSymptoms] = useState([]);
    const [result, setResult] = useState("");

    const handleSelect = (event) => {
        if(symptoms.find((item) => {return item === event.target.value}))
        {
            return;
        }
        setSymptoms([...symptoms, event.target.value]);
    }

    const handlePredict = () => {
        if(symptoms.length === 0)
        {
            alert("Please select at least one symptom!!");
            return;
        }
        // console.log(symptoms);
        axios.post('http://localhost:8000/finalprediction', symptoms)
            .then((res) => {
                setResult(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleClear = async (event) => {
        const newsympts = await symptoms.filter((item) => {return item !== event});
        setSymptoms(newsympts);
    }

    return (
        <div>
            <Grid direction={"column"} display={"flex"} justifyContent={"center"} alignItems={"center"} style={{ marginTop: "200px" }} >
                <Grid>
                    <select onChange={handleSelect} style={{height:"40px", width: "400px", border: "5px solid black", borderRadius: 8, marginBottom: "20px"}}>
                        <option disabled selected>Choose your symptoms</option>
                        {allSymptoms.map((option, index) => {
                            return <option key={index} >
                                {option}
                            </option>
                        })}
                    </select>
                </Grid>
                <Grid direction={"row"} display={"flex"} style={{ maxWidth: "500px" }}>
                    {
                        symptoms.map((e, index) => {
                            return <>
                                <h3 key={index} style={{ margin: "12px", padding: "7px", backgroundColor: "#d8e1eb", borderRadius: 5 }}>{e} <IconButton onClick={() => handleClear(e)}><ClearIcon /></IconButton></h3> 
                            </>
                        })
                    }
                </Grid>
                <Grid>
                    <Button sx={{ ":hover": { bgcolor: "#68b9f1", color: "black" }, backgroundColor: "#03355A", color: "white" }} style={{ borderRadius: 15, padding: "15px", fontWeight: "bold", fontSize: "15px" }} onClick={handlePredict} >Predict</Button>
                </Grid>
                <Grid>
                    <h1>{result}</h1>
                </Grid>
            </Grid>
        </div>
    );
}

export default Prediction;