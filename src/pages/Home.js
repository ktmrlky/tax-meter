import { Button, Grid } from "@mui/material";
import React from "react";
import maasHesaplama from "../assets/img/Mar-Business_11.jpg";
import wageSection from "../assets/img/wage-salary.jpg";
import severanceSection from "../assets/img/severance-notice.jpg";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "Salary Calculator - Home";
  }, []);

  return (
    <Grid className="container-sections">
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
              <h2 style={{ marginBottom: "1rem", textAlign: "center" }}>
                Maaş Hesaplama
              </h2>
              <h3 style={{ marginBottom: "2rem", textAlign: "center" }}>
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
                  size="large"
                >
                  Hesapla
                </Button>
                <Button variant="outlined" disabled size="large">
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
              src={maasHesaplama}
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
        <div className="home-flex">
          <h2 style={{ marginBottom: "1rem", textAlign: "center" }}>
            Asgari Ücret Hakkında
          </h2>
          <h3 style={{ marginBottom: "2rem", textAlign: "center" }}>
            Yıllara ilişkin bilgiler ve daha fazlası...
          </h3>
          <div>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              sx={{ marginX: "1rem" }}
              endIcon={<ArrowForwardIosIcon />}
              LinkComponent={Link}
              to="/asgari-ucret"
            >
              Hesapla
            </Button>
            <Button
              variant="outlined"
              size="large"
              LinkComponent={Link}
              to="/asgari-ucret"
            >
              Öğren
            </Button>
          </div>
          <img
            src={wageSection}
            alt=""
            style={{
              maxWidth: "450px",
              width: "100%",
              height: "auto",
              textAlign: "center",
              opacity: "0.8",
            }}
          />
        </div>
      </section>
      <section style={{ height: "100vh" }} className="home-sections">
        <div className="home-flex">
          <h2 style={{ marginBottom: "1rem", textAlign: "center" }}>
            Kıdem ve İhbar Tazminatı
          </h2>
          <h3 style={{ marginBottom: "2rem", textAlign: "center" }}>
            İşten ayrılmanız durumunda haklarınızı öğrenin
          </h3>
          <div>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              sx={{ marginX: "1rem" }}
              endIcon={<ArrowForwardIosIcon />}
              LinkComponent={Link}
              to="/kidem-ve-ihbar"
            >
              Hesapla
            </Button>
            <Button
              variant="outlined"
              size="large"
              LinkComponent={Link}
              to="/kidem-ve-ihbar"
            >
              Öğren
            </Button>
          </div>
          <img
            src={severanceSection}
            alt=""
            style={{
              maxWidth: "450px",

              width: "100%",
              height: "auto",
              textAlign: "center",
              opacity: "0.8",
            }}
          />
        </div>
      </section>
    </Grid>
  );
};

export default Home;
