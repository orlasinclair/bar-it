import React from "react";
import {AppBar, Toolbar, CssBaseline, Typography, makeStyles, useTheme, useMediaQuery} from "@material-ui/core";
import { Link } from "react-router-dom";
import DrawerComponent from "./components/Drawer";
import './navbar.css'



const useStyles = makeStyles((theme) => ({
    
    navlinks: {
      marginLeft: theme.spacing(0),
      display: "flex",
      color: "#FFFFFF",
      mr:"0px",
      width: "100%",
      
    },
    logo: {
      flexGrow: "1",
      cursor: "pointer",
      marginLeft: theme.spacing(0),
      color: "#F5F5F5",
      mr:"0px",
      fontFamily: 'Roboto',
      fontSize: "30px",
      fontStyle: "oblique"
    },
    link: {
        textDecoration: "none",
        color: "white",
        fontSize: "13px",
        marginLeft: theme.spacing(5),
        width: "100%",
        "&:hover": {
          color: "#B0B0B0",
          borderBottom: "1px solid white",
          r:"0px",
        },
      },
    }));

    function Navbar() {
        const classes = useStyles();
        const theme = useTheme();
        const isMobile = useMediaQuery(theme.breakpoints.down("md"));
      
        return (
          <AppBar position="static">
            <CssBaseline />
            <Toolbar className="toolbar">
              <Typography variant="inherit" className={classes.logo}>B</Typography>
              {isMobile ? (
          <DrawerComponent />
        ) : (
          <div className={classes.navlinks}>
            <Link to="/" className={classes.link}>
              Home
            </Link>
            <Link to="/about" className={classes.link}>
              About
            </Link>
            <Link to="/settings" className={classes.link}>
              Settings
            </Link>
            <Link to="/previous" className={classes.link}>
            Previous
            </Link>
            <Link to="/signup" className={classes.link}>
            SignUp
            </Link>
            <Link to="/login" className={classes.link}>
            Login
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
export default Navbar;
       
