import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import '../App.css';
import docppl from '../components/docppl.jpeg';
import watch from '../components/watchimg.jpeg';

import React from 'react'




const Home = () => {

    return (

        <div>
            <Grid className="content" direction={'column'}>
                <div>
                    <h1 className="forfont" style={{ color: '#03355A' }}>Self Care <br /> &nbsp; &nbsp; &nbsp; Isn't Selfish</h1>
                </div>
                <Grid direction={'row'} style={{ width: "30%", display: "flex", justifyContent: "space-between" }}>
                    <Button variant="outlined" sx={{ ":hover": { color: "white", bgcolor: "#03355A" }, color: "#03355A", backgroundColor: "white" }} style={{ width: "14vw", height: "7vh", borderColor: "#03355A", borderRadius: 15 }} >Contained</Button>
                    <Button variant="outlined" sx={{ ":hover": { color: "white", bgcolor: "#03355A" }, color: "#03355A", backgroundColor: "white" }} style={{ width: "14vw", height: "7vh", borderColor: "#03355A", borderRadius: 15 }} >Outlined</Button>
                </Grid>
            </Grid>
            <Grid direction={'column'}>

                <Grid direction={'row'} display="flex" justifyContent={"center"} style={{ backgroundColor: "rgb(0 0 0 / 8%)", marginTop: "10px", borderRadius: 10 }}>
                    <Grid direction={"column"} width={"50%"} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img className="docppl" src={docppl} alt="" />
                        <img className="watch" src={watch} alt="" />
                        {/* <h1>Hello</h1> */}
                    </Grid>
                    <Grid direction={"column"} width={"50%"} style={{ display: "flex", alignItems: "center" }}>
                        {/* <h1>Hello</h1> */}
                        <Grid>
                            <h1 style={{ color: "" }}>Medical Benifits</h1>
                            <ul>
                                <li>
                            <p> Explore possibilities of using the disease prediction model to aid in clinical trials, personalized treatment plans, and decision-making for your healthcare.</p></li>
                                <li><p>Make the use of Fine-tuned model's hyperparameters to achieve better accuracy parameters for your Health.</p></li>
                                <li><p>We respect your ethical concerns related to data privacy, informed consent, and potential bias to ensure responsible use of sensitive information.</p></li>
                                {/* <li></li> */}
                            </ul>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid display={"flex"} direction={'row'}>

                    <div style={{ width: "50%" }}>

                    </div>

                </Grid>
            </Grid>
        </div>
    );
}

export default Home;