import React from "react";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import SearchIcon from "@material-ui/icons/Search";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    margin: theme.spacing(10),
  },
  icon: {
    margin: theme.spacing(1),
  },
}));
export default function SearchBar({ query, onChange }) {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <SearchIcon className={classes.icon} />
      <InputBase onChange={onChange} value={query} />
    </Paper>
  );
}
