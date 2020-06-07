/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Nodata from "./image/srithai_empty-state150.png";
import { Typography, Link } from "@material-ui/core";
import { useStyles } from "./style";

export default function EmptyData(props) {
    const classes = useStyles();

    useEffect(() => {
       
    }, []);


    return (
        <>
            <img src={Nodata} alt={`No_data`} />
            <Typography variant="h4" gutterBottom className={classes.noDataHead}>
                No data available!
            </Typography>
            <Typography variant="h5" gutterBottom style={{ fontSize: "18px" }}>
                {/* <Link
                    // href="#"
                    onClick={props.addNewReacord}
                    className={classes.link}
                    underline={"always"}
                >
                    Add new
                </Link> */}
                &nbsp;&nbsp;<span className={classes.subNoData}>some records for create data table</span>
            </Typography>
        </>
    );
}
