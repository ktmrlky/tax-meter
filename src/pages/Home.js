import { Grid, Stack } from "@mui/material";
import React from "react";
import CardComp from "../components/CardComp";

const Home = () => {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <h1>Maaş Hesaplama</h1>
      <span>Brütten Nete, Netten Brüte Maaş Hesapla</span>

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{ marginTop: "2rem" }}
      >
        <CardComp
          title={"Netten Brüte"}
          text={
            "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          }
        />
        <CardComp
          title={"Brütten Nete"}
          text={
            "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          }
        />
      </Stack>
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={2}
        sx={{ marginTop: "1rem" }}
      >
        <CardComp
          title={"Asgari Ücret"}
          text={
            "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          }
        />
        <CardComp
          title={"Kıdem ve İhbarcl"}
          text={
            "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          }
        />
      </Stack>
    </Grid>
  );
};

export default Home;
