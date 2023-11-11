import { useContext, useState } from "react";
import {
  Button,
  Grid,
  Typography,
  Paper,
  makeStyles,
  TextField,
  MenuItem,
} from "@material-ui/core";
import ChipInput from "material-ui-chip-input";
import axios from "axios";

import { SetPopupContext } from "../../App";

import apiList from "../../lib/apiList";

const useStyles = makeStyles((theme) => ({
  body: {
    height: "inherit",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    paddingTop: "60px",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.5rem",
      paddingTop: "20px",
    },
    [theme.breakpoints.up("sm")]: {
      fontSize: "2rem",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "2.5rem",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "3rem",
    },
  },
  paper: {
    padding: "20px",
    outline: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    marginBottom: theme.spacing(2),
  },
  button: {
    padding: "10px 50px",
    marginTop: theme.spacing(3),
  },
}));

const CreateJobs = () => {
  const classes = useStyles();
  const setPopup = useContext(SetPopupContext);

  const [jobDetails, setJobDetails] = useState({
    title: "",
    maxApplicants: 100,
    maxPositions: 30,
    deadline: new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000)
      .toISOString()
      .substr(0, 16),
    skillsets: [],
    jobType: "Full Time",
    duration: 0,
    salary: 0,
  });

  const handleInput = (key, value) => {
    setJobDetails({
      ...jobDetails,
      [key]: value,
    });
  };

  const handleUpdate = () => {
    axios
      .post(apiList.jobs, jobDetails, {
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
        setJobDetails({
          title: "",
          maxApplicants: 100,
          maxPositions: 30,
          deadline: new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000)
            .toISOString()
            .substr(0, 16),
          skillsets: [],
          jobType: "Full Time",
          duration: 0,
          salary: 0,
        });
      })
      .catch((err) => {
        setPopup({
          open: true,
          severity: "error",
          message: err.response.data.message,
        });
      });
  };

  return (
    <Grid
      container
      item
      direction="column"
      alignItems="center"
      style={{ padding: "30px", minHeight: "93vh", width: "100%" }}
    >
      <Grid item>
        <Typography variant="h2" className={classes.title}>
          Add Job
        </Typography>
      </Grid>
      <Grid
        container
        item
        direction="column"
        justify="center"
        alignItems="center"
        spacing={3}
        xs={12}
        sm={8}
        md={6}
        lg={4}
      >
        <Paper className={classes.paper}>
          <Grid container direction="column" alignItems="stretch" spacing={3}>
            <Grid item xs={12} className={classes.inputField}>
              <TextField
                label="Title"
                value={jobDetails.title}
                onChange={(event) => handleInput("title", event.target.value)}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} className={classes.inputField}>
              <ChipInput
                label="Skills"
                variant="outlined"
                helperText="Press enter to add skills"
                value={jobDetails.skillsets}
                onAdd={(chip) =>
                  setJobDetails({
                    ...jobDetails,
                    skillsets: [...jobDetails.skillsets, chip],
                  })
                }
                onDelete={(chip, index) => {
                  let skillsets = jobDetails.skillsets;
                  skillsets.splice(index, 1);
                  setJobDetails({
                    ...jobDetails,
                    skillsets: skillsets,
                  });
                }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} className={classes.inputField}>
              <TextField
                select
                label="Job Type"
                variant="outlined"
                value={jobDetails.jobType}
                onChange={(event) => handleInput("jobType", event.target.value)}
                fullWidth
              >
                <MenuItem value="Full Time">Full Time</MenuItem>
                <MenuItem value="Part Time">Part Time</MenuItem>
                <MenuItem value="Work From Home">Work From Home</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} className={classes.inputField}>
              <TextField
                select
                label="Duration"
                variant="outlined"
                value={jobDetails.duration}
                onChange={(event) => handleInput("duration", event.target.value)}
                fullWidth
              >
                <MenuItem value={0}>Flexible</MenuItem>
                <MenuItem value={1}>1 Month</MenuItem>
                <MenuItem value={3}>3 Months</MenuItem>
                <MenuItem value={6}>6 Months</MenuItem>
                <MenuItem value={12}>1 Year</MenuItem>
                <MenuItem value={24}>2 Years</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12} className={classes.inputField}>
              <TextField
                label="Salary"
                type="number"
                variant="outlined"
                value={jobDetails.salary}
                onChange={(event) => handleInput("salary", event.target.value)}
                InputProps={{ inputProps: { min: 0 } }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} className={classes.inputField}>
              <TextField
                label="Application Deadline"
                type="datetime-local"
                value={jobDetails.deadline}
                onChange={(event) => handleInput("deadline", event.target.value)}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} className={classes.inputField}>
              <TextField
                label="Maximum Number Of Applicants"
                type="number"
                variant="outlined"
                value={jobDetails.maxApplicants}
                onChange={(event) =>
                  handleInput("maxApplicants", event.target.value)
                }
                InputProps={{ inputProps: { min: 1 } }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} className={classes.inputField}>
              <TextField
                label="Positions Available"
                type="number"
                variant="outlined"
                value={jobDetails.maxPositions}
                onChange={(event) =>
                  handleInput("maxPositions", event.target.value)
                }
                InputProps={{ inputProps: { min: 1 } }}
                fullWidth
              />
            </Grid>
          </Grid>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => handleUpdate()}
          >
            Create Job
          </Button>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default CreateJobs;
