import React from "react";
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "./MyButton.css"

const theme = createTheme({
  palette: {
    ochre: {
      main: 'red',
    },
  },
});

export default function MyButton(props){
    const label = props.label;
    return (
    <ThemeProvider theme={theme}>
        <Button 
        variant="contained" 
        size="large"
        disableElevation
        sx={{
            backgroundColor:"ochre.main",
          borderRadius:"10px",
          padding:{
            xs:"8px 4px",
            sm:"8px 10px",
            md:"10px",
            lg:"10px"
          },
          fontSize:{
            xs:"8px",
            sm:"14px",
            md:"20px",
            lg:"20px"
          },
          textTransform:"uppercase"
          
           }}
           className="my_button">
            <div style={{display: "flex", gap: "5px", justifyContent:"center", alignItems: "center"}}>{label}</div>
        </Button>
    </ThemeProvider>
    )
}