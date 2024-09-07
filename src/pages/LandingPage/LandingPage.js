import { Container, Typography, Box } from "@mui/material";
import React from "react";
import GetStartedButton from "../../components/GetStartedButton.js/GetStartedButton";
import media from "../../assets/media";
import Media from "../../components/media/Media";

export default function LandingPage(){
    return(
        <Container maxWidth="xl" disableGutters sx={{backgroundColor:"rgb(18, 18, 18)"}}>
            <Box sx={{padding:{xs:4, sm:8, md:8, lg:10}, color:"white", display:"flex", alignItems:"center", flexDirection:"column"}}>
                <Typography textAlign="center" gutterBottom mb={6} sx={{ fontWeight: 900, fontSize : {xs: "30px", sm: "45px", md:"53px", lg: "60px"}}} variant='h2'>Unlimited anime movies, shows and more</Typography>
                <Typography textAlign="center" gutterBottom mb={6} sx={{ fontWeight: 400, fontSize : {xs: "25px", sm: "30px", md:"43px", lg: "50px"} }} variant='h3'>Watch anywhere. Cancel anytime</Typography>
                <Typography textAlign="center" gutterBottom mb={6} sx={{ fontWeight: 100, fontSize : {xs: "28px", sm: "35px", md:"48px", lg: "55px"} }} variant='h3'>Ready to watch? Enter your email to create or restart your membership</Typography>
                <Box textAlign="center">
                    <GetStartedButton />
                </Box>
            </Box>

            {media.map((item,index)=>
            (<Media key={index} heading={item.heading} content={item.content} right={item.right} image={item.image} youtubeId={item?.youtubeId}/>)
            )
            }
        </Container>
    );
}