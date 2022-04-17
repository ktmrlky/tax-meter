import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
  Zoom,
} from "@mui/material";
import React from "react";

const ChooseStep = ({ nextStep, handleTip }) => {
  const handleClick = (t, s) => {
    handleTip(t);
    nextStep(s);
  };
  return (
    <>
      <Grid
        container
        direction={["column", "column"]}
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "70vh" }}
      >
        <Zoom in={true} style={{ transitionDelay: "160ms" }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            m="1rem"
            mb="2rem"
          >
            Lütfen maaş hesaplama yönünü seçiniz
          </Typography>
        </Zoom>
        <Zoom in={true} style={{ transitionDelay: "180ms" }}>
          <Card
            sx={{ maxWidth: 345, m: "1rem" }}
            raised
            onClick={() => handleClick("Brüt", 1)}
          >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Brütten Nete
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Maaş hesaplamanızı <u>Brüt maaşınızdan Net maaşına</u>{" "}
                  dönüştürmek için buradan ilerleyiniz.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Zoom>
        <Zoom in={true} style={{ transitionDelay: "200ms" }}>
          <Card
            sx={{ maxWidth: 345, m: "1rem" }}
            raised
            onClick={() => handleClick("Net", 1)}
          >
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Netten Brüte
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Maaş hesaplamanızı <u>Net maaşınızdan Brüt maaşına</u>{" "}
                  dönüştürmek için buradan ilerleyiniz.
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Zoom>
      </Grid>
    </>
  );
};

export default ChooseStep;
