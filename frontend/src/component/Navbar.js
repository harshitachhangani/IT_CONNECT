import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  makeStyles,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useHistory } from "react-router-dom";
import isAuth, { userType } from "../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  title: {
    flexGrow: 1,
  },
  drawer: {
    width: 200,
  },
  navButtons: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const Navbar = (props) => {
  const classes = useStyles();
  let history = useHistory();
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleClick = (location) => {
    history.push(location);
    setDrawerOpen(false); // Close the drawer after clicking a link
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const renderNavLinks = () => {
    if (isAuth()) {
      return userType() === "recruiter" ? (
        <>
          <ListItem button onClick={() => handleClick("/home")}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => handleClick("/addjob")}>
            <ListItemText primary="Add Jobs" />
          </ListItem>
          <ListItem button onClick={() => handleClick("/myjobs")}>
            <ListItemText primary="Posted" />
          </ListItem>
          <ListItem button onClick={() => handleClick("/employees")}>
            <ListItemText primary="Employees" />
          </ListItem>
          <ListItem button onClick={() => handleClick("/profile")}>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button onClick={() => handleClick("/logout")}>
            <ListItemText primary="Logout" />
          </ListItem>
        </>
      ) : (
        <>
          <ListItem button onClick={() => handleClick("/home")}>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => handleClick("/applications")}>
            <ListItemText primary="Applied" />
          </ListItem>
          <ListItem button onClick={() => handleClick("/profile")}>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button onClick={() => handleClick("/logout")}>
            <ListItemText primary="Logout" />
          </ListItem>
        </>
      );
    } else {
      return (
        <>
          <ListItem button onClick={() => handleClick("/login")}>
            <ListItemText primary="Login" />
          </ListItem>
          <ListItem button onClick={() => handleClick("/signup")}>
            <ListItemText primary="SignUp" />
          </ListItem>
        </>
      );
    }
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        style={{
          backgroundImage:
            "linear-gradient(144.39deg, #ffffff -278.56%, #6d6d6d -78.47%, #11101d 91.61%)",
          boxShadow: "0px 20px 100px -10px rgba(66, 71, 91, 0.1)",
        }}
      >
        <Toolbar style={{ minHeight: "80px", flexDirection: "row" }}>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            className={classes.title}
            style={{ fontSize: "32px", fontWeight: "800", marginLeft: "16px" }}
          >
            IT CONNECT
          </Typography>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            classes={{ paper: classes.drawer }}
          >
            <List>{renderNavLinks()}</List>
          </Drawer>
          <div className={classes.navButtons}>
            {isAuth() ? (
              userType() === "recruiter" ? (
                <>
                  <Button color="inherit" onClick={() => handleClick("/home")}>
                    <Typography style={{ fontSize: "18px" }}>Home</Typography>
                  </Button>
                  <Button
                    color="inherit"
                    onClick={() => handleClick("/addjob")}
                  >
                    <Typography style={{ fontSize: "18px" }}>Add Jobs</Typography>
                  </Button>
                  <Button
                    color="inherit"
                    onClick={() => handleClick("/myjobs")}
                  >
                    <Typography style={{ fontSize: "18px" }}>Posted</Typography>
                  </Button>
                  <Button
                    color="inherit"
                    onClick={() => handleClick("/employees")}
                  >
                    <Typography style={{ fontSize: "18px" }}>Employees</Typography>
                  </Button>
                  <Button
                    color="inherit"
                    onClick={() => handleClick("/profile")}
                  >
                    <Typography style={{ fontSize: "18px" }}>Profile</Typography>
                  </Button>
                  <Button
                    color="inherit"
                    onClick={() => handleClick("/logout")}
                  >
                    <Typography style={{ fontSize: "18px" }}>Logout</Typography>
                  </Button>
                </>
              ) : (
                <>
                  <Button color="inherit" onClick={() => handleClick("/home")}>
                    <Typography style={{ fontSize: "18px" }}>Home</Typography>
                  </Button>
                  <Button
                    color="inherit"
                    onClick={() => handleClick("/applications")}
                  >
                    <Typography style={{ fontSize: "18px" }}>Applied</Typography>
                  </Button>
                  <Button
                    color="inherit"
                    onClick={() => handleClick("/profile")}
                  >
                    <Typography style={{ fontSize: "18px" }}>Profile</Typography>
                  </Button>
                  <Button
                    color="inherit"
                    onClick={() => handleClick("/logout")}
                  >
                    <Typography style={{ fontSize: "18px" }}>Logout</Typography>
                  </Button>
                </>
              )
            ) : (
              <>
                <Button color="inherit" onClick={() => handleClick("/login")}>
                  <Typography style={{ fontSize: "18px" }}>Login</Typography>
                </Button>
                <Button color="inherit" onClick={() => handleClick("/signup")}>
                  <Typography style={{ fontSize: "18px" }}>SignUp</Typography>
                </Button>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
