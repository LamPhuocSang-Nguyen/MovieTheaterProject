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
          padding:"10px",
          fontSize:"20px",
          textTransform:"uppercase"
          
           }}
           className="my_button">
            <div style={{display: "flex", gap: "5px", justifyContent:"center", alignItems: "center"}}>{label}</div>
        </Button>
    </ThemeProvider>
    )
}