import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Paper,Grid, Container} from "@material-ui/core";
import Navbar from "./Navbar";
import SearchBlock from "./Search";
import SwitchPlatforms from "./SideNav";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

export default function Main() {
  const classes = useStyles();

  return (
    <div>
      <Navbar />
      <Container maxWidth="lg" style={{marginTop:20}}>
        <div className={classes.root}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Paper className={classes.paper} style={{background:'white',height:100}}>
                <SwitchPlatforms/>
              </Paper>
            </Grid>
            <Grid item xs={9}>
                <SearchBlock />
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
