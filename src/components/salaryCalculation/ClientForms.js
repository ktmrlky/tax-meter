import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  InputAdornment,
  MenuItem,
  Stack,
  TextField,
  Typography,
  Zoom,
} from "@mui/material";
import React, { useState } from "react";

const ClientForms = ({ tip, nextStep }) => {
  const [currency, setCurrency] = useState("TL");
  const [year, setYear] = useState("2022");
  const [marriage, setMarriage] = useState("Bekar");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const handleChangeYear = (event) => {
    setYear(event.target.value);
  };

  const handleChangeMarriage = (event) => {
    setMarriage(event.target.value);
  };

  return (
    <>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "70vh" }}
      >
        <Zoom in={true} style={{ transitionDelay: "80ms" }}>
          <Typography gutterBottom variant="h5" component="div">
            {tip === "Brüt"
              ? "Brütten Nete Maaş Hesaplama"
              : "Netten Brüte Maaş Hesaplama"}
          </Typography>
        </Zoom>
        <Stack m="2rem" spacing={3} direction="row">
          <Zoom in={true} style={{ transitionDelay: "100ms" }}>
            <TextField
              id="outlined-basic"
              label="Maaş"
              variant="outlined"
              required
              helperText={"Lütfen " + tip + " maaşınızı giriniz."}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    {currencies
                      .filter((x) => x.value === currency)
                      .map((x) => x.label)}
                  </InputAdornment>
                ),
              }}
            />
          </Zoom>
          <Zoom in={true} style={{ transitionDelay: "120ms" }}>
            <TextField
              id="outlined-select-currency"
              select
              label="Para Birimi"
              value={currency}
              onChange={handleChange}
              helperText="Lütfen bir para birimi seçiniz"
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Zoom>
          <Zoom in={true} style={{ transitionDelay: "140ms" }}>
            <TextField
              id="outlined-select-year"
              label="Yıl"
              select
              value={year}
              onChange={handleChangeYear}
              helperText="Lütfen çalışma yılınızı giriniz."
            >
              {years.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </Zoom>
        </Stack>
        <Stack spacing={3} direction="row" mb="3rem">
          <Zoom in={true} style={{ transitionDelay: "160ms" }}>
            <TextField
              id="outlined-select-marriagestatus"
              select
              label="Medeni Durumu"
              value={marriage}
              onChange={handleChangeMarriage}
              helperText="Lütfen medeni durumunuzu giriniz"
            >
              {marriedStatuses.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </TextField>
          </Zoom>
          <Zoom in={true} style={{ transitionDelay: "180ms" }}>
            <TextField
              id="outlined-number"
              label="Çocuk Sayısı"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              {...(marriage === "Evli"
                ? { required: true }
                : { disabled: true })}
            />
          </Zoom>
        </Stack>
        <Stack spacing={2} direction="row">
          <Zoom in={true} style={{ transitionDelay: "200ms" }}>
            <Card
              sx={{
                maxWidth: 345,
                borderBottom: "5px solid #e3dbd9",
              }}
              variant="outlined"
              onClick={() => nextStep(2)}
            >
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    Çalışan için hesapla
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Zoom>
          <Zoom in={true} style={{ transitionDelay: "200ms" }}>
            <Card
              sx={{
                maxWidth: 345,
                borderBottom: "5px solid #89b4c4",
              }}
              variant="outlined"
              onClick={() => nextStep(2)}
            >
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ textAlign: "center" }}
                  >
                    İşveren için hesapla
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Zoom>
        </Stack>
      </Grid>
    </>
  );
};

export default ClientForms;

const currencies = [
  {
    value: "TL",
    label: "₺",
  },
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
];

const years = [
  2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010,
];

const marriedStatuses = ["Bekar", "Evli"];
