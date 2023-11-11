import React, { useContext, useEffect, useState } from "react";
import {
  Button,
  Grid,
  Typography,
  Paper,
  TextField,
  makeStyles,
} from "@material-ui/core";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css"; // Import the stylesheet

import { SetPopupContext } from "../../App";

import apiList from "../../lib/apiList";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  customGridItem: {
    flexBasis: "100%",
    maxWidth: "80%",
  },
  updateButton: {
    width: "100%",
    maxWidth: "100%",
    marginTop: theme.spacing(2),
  },
}));

const Profile = () => {
  const setPopup = useContext(SetPopupContext);
  const classes = useStyles();

  const [profileDetails, setProfileDetails] = useState({
    name: "",
    bio: "",
    contactNumber: "",
  });

  const [phone, setPhone] = useState("");

  const handleInput = (key, value) => {
    setProfileDetails({
      ...profileDetails,
      [key]: value,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(apiList.user, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setProfileDetails(response.data);
        setPhone(response.data.contactNumber);
      })
      .catch((err) => {
        console.log(err.response.data);
        setPopup({
          open: true,
          severity: "error",
          message: "Error",
        });
      });
  };

  const handleUpdate = () => {
    let updatedDetails = {
      ...profileDetails,
    };
    if (phone !== "") {
      updatedDetails = {
        ...profileDetails,
        contactNumber: `+${phone}`,
      };
    } else {
      updatedDetails = {
        ...profileDetails,
        contactNumber: "",
      };
    }

    axios
      .put(apiList.user, updatedDetails, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setPopup({
          open: true,
          severity: "success",
          message: response.data.message,
        });
        getData();
      })
      .catch((err) => {
        setPopup({
          open: true,
          severity: "error",
          message: err.response.data.message,
        });
        console.log(err.response);
      });
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: "100vh" }}>
      <Grid item xs={12} sm={8} md={6} lg={4} className={classes.customGridItem}>
        <Paper className={classes.paper}>
          <Typography variant="h3" component="h2" style={{ color: "#3f51b5", fontWeight: "bold", marginBottom: "20px" }}>
            Profile
          </Typography>
          <TextField
            label="Name"
            value={profileDetails.name}
            onChange={(event) => handleInput("name", event.target.value)}
            variant="outlined"
            fullWidth
            style={{ marginBottom: "20px" }}
          />
          <TextField
            label="Bio (up to 250 words)"
            multiline
            rows={8}
            variant="outlined"
            value={profileDetails.bio}
            onChange={(event) => {
              if (
                event.target.value.split(" ").filter(function (n) {
                  return n !== "";
                }).length <= 250
              ) {
                handleInput("bio", event.target.value);
              }
            }}
            fullWidth
            style={{ marginBottom: "20px" }}
          />
          <PhoneInput
            country={"in"}
            value={phone}
            onChange={(phone) => setPhone(phone)}
            inputProps={{
              style: { width: "100%", marginBottom: "20px" },
            }}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.updateButton}
            onClick={() => handleUpdate()}
          >
            Update Details
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Profile;
