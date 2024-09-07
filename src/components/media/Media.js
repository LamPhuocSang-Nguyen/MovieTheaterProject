import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from "react";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
    }),
  }));

export default function Media(props){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    const heading = props.heading;
    const content = props.content;
    const right = props.right;
    const image = props.image;
    const youtobeId = props.youtobeId;

    return(
        <Container maxWidth="xl">
            <Grid container>
                <Grid Item data-aos={right ? "fade-right": "fade-left"}>
                    <Typography sx={{color:"white"}}>{heading}</Typography>
                    <Typography sx={{color:"white"}}>{content}</Typography>
                </Grid>
                <Grid Item data-aos="fade-right">
                    <Box component="img"
                    src={image}>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}