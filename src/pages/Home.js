import { Button, Grid } from "@mui/material";
import React from "react";
import test from "../assets/img/Mar-Business_11.jpg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Grid>
      <section style={{ height: "85vh" }} className="home-sections">
        <Grid container spacing={2}>
          <Grid
            item
            sm={6}
            container
            justifyContent="center"
            alignItems="center"
          >
            <div className="home-flex">
              <h2 style={{ marginBottom: "1rem" }}>Maaş Hesaplama</h2>
              <h3 style={{ marginBottom: "2rem" }}>
                Brütten Nete, Netten Brüte
              </h3>
              <div>
                <Button
                  variant="outlined"
                  color="primary"
                  sx={{ marginX: "1rem" }}
                  endIcon={<ArrowForwardIosIcon />}
                  LinkComponent={Link}
                  to="/maas-hesaplama "
                >
                  Hesapla
                </Button>
                <Button variant="outlined" disabled>
                  Öğren
                </Button>
              </div>
            </div>
          </Grid>
          <Grid
            item
            sm={6}
            container
            justifyContent="center"
            alignItems="center"
          >
            <img
              src={test}
              alt=""
              style={{
                width: "100%",
                height: "auto",
                textAlign: "center",
              }}
            />
          </Grid>
        </Grid>
      </section>
      <section style={{ height: "100vh" }} className="home-sections">
        {" "}
        Asgari ücret için:
      </section>
      <section style={{ height: "100vh" }} className="home-sections">
        Kıdem ve İhbar ücreti için:
      </section>
    </Grid>
  );
};

export default Home;
