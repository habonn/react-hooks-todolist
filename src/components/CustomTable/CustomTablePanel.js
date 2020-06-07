/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { Grid } from "@material-ui/core";
import { useStyles } from "./style";

export default function CustomTablePanel(props) {
    const classes = useStyles();

    return <Grid className={classes.panel}>{props.children}</Grid>;
}
