import * as React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Container, Link, Typography } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Footer() {
  return (
    <Container maxWidth="xl" disableGutters>
      <Grid container spacing={1}>
        <Grid item xs={12}  sm={12} md={6} lg={3} xl={3}>
          <Item>
            <Link href="#">support@blockbuster.com</Link>
          </Item>
          <Item>
            <Link href="#">+1 234 509 798</Link>
          </Item>
          <Item>
            <Link href="#">www.blockbuster.com</Link>
          </Item>
          <Item>
            <Link href="#">97 Ilchester Road, Muirhead, KY15 2GP</Link>
          </Item>
        </Grid>

        <Grid item xs={12}  sm={12} md={6} lg={2} xl={2}>
          <Item>
            <Link href="#">About BlockBuster</Link>
          </Item>
          <Item>
            <Link href="#">About BlockBuster</Link>
          </Item>
          <Item>
            <Link href="#">About BlockBuster</Link>
          </Item>
          <Item>
            <Link href="#">About BlockBuster</Link>
          </Item>
          <Item>
            <Link href="#">About BlockBuster</Link>
          </Item>
        </Grid>

        <Grid item xs={12}  sm={12} md={6} lg={2} xl={2}>
          <Item>
            <Link href="#">My Account</Link>
          </Item>
          <Item>
            <Link href="#">My Account</Link>
          </Item>
          <Item>
            <Link href="#">My Account</Link>
          </Item>
          <Item>
            <Link href="#">My Account</Link>
          </Item>
        </Grid>

        <Grid item xs={12}  sm={12} md={6} lg={2} xl={2}>
          <Item>
            <Link href="#">Terms of Use</Link>
          </Item>
          <Item>
            <Link href="#">Terms of Use</Link>
          </Item>
          <Item>
            <Link href="#">Terms of Use</Link>
          </Item>
        </Grid>

        <Grid item xs={12}  sm={12} md={12} lg={3} xl={3}>
          <Typography variant="h4" textAlign="center" fontWeight="700">
            Newsletter
          </Typography>
          <Typography variant="body1" my={4} textAlign="center">
            Ready to watch? Enter your email to create or restart your
            membership.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}