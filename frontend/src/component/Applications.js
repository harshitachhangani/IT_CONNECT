import {
  Button,
  Chip,
  Grid,
  IconButton,
  InputAdornment,
  makeStyles,
  Paper,
  TextField,
  Typography,
  Modal,
  Slider,
  FormControlLabel,
  FormGroup,
  MenuItem,
  Checkbox,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import axios from "axios";
import { SetPopupContext } from "../App";
import apiList from "../lib/apiList";
import React, { useContext, useEffect, useState } from "react";
import StarIcon from "@material-ui/icons/Star";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  body: {
    height: "inherit",
  },
  jobTileOuter: {
    padding: "30px",
    margin: "20px 0",
    boxSizing: "border-box",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "10px",
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.02)",
    },
  },
  jobTitle: {
    fontWeight: "bold",
    fontSize: "1.25rem",
    marginBottom: "10px",
  },
  statusBlock: {
    width: "fit-content",
    padding: "5px 10px",
    borderRadius: "5px",
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  dateInfo: {
    fontSize: "0.875rem",
    color: "#888",
    marginTop: "5px",
  },
  chip: {
    marginRight: "5px",
    marginBottom: "5px",
  },
  rateButton: {
    backgroundColor: theme.palette.primary.main,
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalPaper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    outline: "none",
    borderRadius: "10px",
  },
  modalCloseButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
  },
  ratingLabel: {
    fontSize: "1rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  ratingSlider: {
    width: "80%",
  },
  rateSubmitButton: {
    marginTop: "10px",
    backgroundColor: theme.palette.primary.main,
    color: "white",
    fontWeight: "bold",
    "&:hover": {
      backgroundColor: theme.palette.primary.dark,
    },
  },
}));

const ApplicationTile = (props) => {
  const classes = useStyles();
  const { application } = props;
  const setPopup = useContext(SetPopupContext);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(application.job.rating);

  const appliedOn = new Date(application.dateOfApplication);
  const joinedOn = new Date(application.dateOfJoining);

  const fetchRating = () => {
    axios
      .get(`${apiList.rating}?id=${application.job._id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setRating(response.data.rating);
        console.log(response.data);
      })
      .catch((err) => {
        // console.log(err.response);
        console.log(err.response.data);
        setPopup({
          open: true,
          severity: "error",
          message: "Error",
        });
      });
  };

  const changeRating = () => {
    axios
      .put(
        apiList.rating,
        { rating: rating, jobId: application.job._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setPopup({
          open: true,
          severity: "success",
          message: "Rating updated successfully",
        });
        fetchRating();
        setOpen(false);
      })
      .catch((err) => {
        // console.log(err.response);
        console.log(err);
        setPopup({
          open: true,
          severity: "error",
          message: err.response.data.message,
        });
        fetchRating();
        setOpen(false);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const colorSet = {
    applied: "#3454D1",
    shortlisted: "#DC851F",
    accepted: "#09BC8A",
    rejected: "#D1345B",
    deleted: "#B49A67",
    cancelled: "#FF8484",
    finished: "#4EA5D9",
  };

  return (
    <Paper className={classes.jobTileOuter} elevation={3}>
      <Grid container>
        <Grid container item xs={9} spacing={1} direction="column">
          <Grid item>
            <Typography variant="h5" className={classes.jobTitle}>
              {application.job.title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">
              Posted By: {application.recruiter.name}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">Role: {application.job.jobType}</Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">
              Salary: &#8377; {application.job.salary} per month
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2">
              Duration:{" "}
              {application.job.duration !== 0
                ? `${application.job.duration} month`
                : `Flexible`}
            </Typography>
          </Grid>
          <Grid item>
            <div>
              {application.job.skillsets.map((skill) => (
                <Chip
                  key={skill}
                  label={skill}
                  className={classes.chip}
                  variant="outlined"
                />
              ))}
            </div>
          </Grid>
          <Grid item>
            <Typography variant="subtitle2" className={classes.dateInfo}>
              Applied On: {appliedOn.toLocaleDateString()}
            </Typography>
            {application.status === "accepted" ||
            application.status === "finished" ? (
              <Typography variant="subtitle2" className={classes.dateInfo}>
                Joined On: {joinedOn.toLocaleDateString()}
              </Typography>
            ) : null}
          </Grid>
        </Grid>
        <Grid item container direction="column" xs={3}>
          <Grid item xs>
            <Paper
              className={classes.statusBlock}
              style={{
                background: colorSet[application.status],
                color: "#ffffff",
              }}
            >
              {application.status}
            </Paper>
          </Grid>
          {application.status === "accepted" ||
          application.status === "finished" ? (
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                className={classes.rateButton}
                onClick={() => {
                  fetchRating();
                  setOpen(true);
                }}
              >
                Rate Job
              </Button>
            </Grid>
          ) : null}
        </Grid>
      </Grid>
      <Modal open={open} onClose={handleClose} className={classes.modal}>
        <Paper className={classes.modalPaper}>
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            className={classes.modalCloseButton}
          >
            <CloseIcon />
          </IconButton>
          <Typography variant="h6" className={classes.ratingLabel}>
            Rate this Job
          </Typography>
          <Rating
            name="simple-controlled"
            className={classes.ratingSlider}
            value={rating === -1 ? null : rating}
            precision={0.5}
            emptyIcon={<StarIcon fontSize="inherit" />}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.rateSubmitButton}
            onClick={() => changeRating()}
          >
            Submit Rating
          </Button>
        </Paper>
      </Modal>
    </Paper>
  );
};

const Applications = (props) => {
  const setPopup = useContext(SetPopupContext);
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get(apiList.applications, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setApplications(response.data);
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

  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      style={{
        padding: "30px",
        minHeight: "93vh",
        backgroundColor: "#f2f2f2",
      }}
    >
      <Grid item>
        <Typography variant="h2" style={{ color: "#333", fontWeight: "bold" }}>
          Applications
        </Typography>
      </Grid>

      <Grid
        container
        item
        xs
        direction="column"
        style={{ width: "100%" }}
        alignItems="stretch"
        justify="center"
      >
        {applications.length > 0 ? (
          applications.map((obj) => (
            <Grid item key={obj._id}>
              <ApplicationTile application={obj} />
            </Grid>
          ))
        ) : (
          <Typography
            variant="h5"
            style={{
              height: "50px",
              textAlign: "center",
              background: "rgba(255,255,255,0.5)",
              marginLeft: "25%",
              marginRight: "25%",
              paddingTop: "15px",
            }}
          >
            No Applications Found
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default Applications;
