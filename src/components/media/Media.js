import { Container, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function Media(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const heading = props.heading;
  const content = props.content;
  const right = props.right;
  const image = props.image;
  const youtobeId = props.youtobeId;

  return (
      <Container maxWidth="lg" sx={{ overflow: 'hidden' }}>
        <Grid container columnSpacing={2} rowSpacing={4}>
          <Grid item xs={12} md={7}
                data-aos="fade-right"
                sx={{
                  display: { xs: "none", md: right ? "none" : "block" },
                  position: 'relative',
                  overflow: 'hidden',
                }}>
            <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
            >
              <img
                  src={image}
                  alt={heading}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    position: 'relative',
                    zIndex: 0
                  }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={5}
                data-aos={right ? "fade-right" : "fade-left"}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                    color: "white"
                }}>
            <Typography variant='h3' textAlign="center" mb={6}>{heading}</Typography>
            <Typography variant='h5' textAlign="center">{content}</Typography>
          </Grid>
          <Grid item xs={12} md={7}
                data-aos="fade-left"
                sx={{
                  display: { xs: "block", md: right ? "block" : "none" },
                  position: 'relative',
                  overflow: 'hidden',
                }}>
            <Box
                sx={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
            >
              <img
                  src={image}
                  alt={heading}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    position: 'relative',
                    zIndex: 0
                  }}
              />
              {youtobeId && <iframe
                  src={`https://www.youtube.com/embed/${youtobeId}?autoplay=1&loop=1&playlist=${youtobeId}&mute=1&controls=0&showinfo=0&rel=0`}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  style={{
                    position: 'absolute',
                    top: '30%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '60%',
                    height: '40%',
                    objectFit: 'cover',
                    zIndex: -1
                  }}
              />}
            </Box>
          </Grid>
        </Grid>
      </Container>
  );
}
