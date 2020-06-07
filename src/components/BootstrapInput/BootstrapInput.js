/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import "./style.css";
import InputBase from "@material-ui/core/InputBase";
import { useStyles } from "./style";
import "antd/dist/antd.css";
import { DatePicker, TimePicker } from "antd";
import { useGlobal } from "reactn";
import moment from "moment";
import { Typography } from "@material-ui/core";

export default function BootstrapInput(props) {
    const classes = useStyles();
    const [formMode] = useGlobal("formMode");
    const { RangePicker } = DatePicker;

    const mode = localStorage.getItem("mode");

    // const dt = new Date();
    // const tz = dt.getTimezoneOffset();

    const handleDateTimeChange = date => {
        let isoDate = "";
        if (date !== null) {
            isoDate = date.format("YYYY-MM-DDTHH:mm:ss");
            // isoDate = date.add(tz, "minutes").format("YYYY-MM-DDTHH:mm:ss");
        }
        if (props.onChange !== undefined) {
            let e = { target: { value: isoDate } };
            props.onChange(e);
        }
    };
    const dateTimeValue = () => {
        let date = null;
        if (
            props.value !== undefined &&
            props.value !== null &&
            props.value !== ""
        ) {
            date = moment.utc(props.value);
            // date = moment.utc(props.value).add(-tz, "minutes");
        }
        return date;
    };

    const handleDateChange = date => {
        let isoDate = "";
        if (date !== null) {
            isoDate = date.format("YYYY-MM-DD");
        }
        if (props.onChange !== undefined) {
            let e = { target: { value: isoDate } };
            props.onChange(e);
        }
    };
    const dateValue = () => {
        let date = null;
        if (
            props.value !== undefined &&
            props.value !== null &&
            props.value !== ""
        ) {
            date = moment(props.value);
        }
        return date;
    };

    function handleDateRangeChange(date, dateString) {
        console.log("date", date);
        console.log("dateString", dateString);
        if (
            props.fieldForm !== undefined &&
            props.fieldForm !== null &&
            props.fieldForm !== "" &&
            props.fieldTo !== undefined &&
            props.fieldTo !== null &&
            props.fieldTo !== ""
        ) {
            if (props.onChange) {
                props.onChange(props.fieldForm, props.fieldTo, dateString);
            }
        } else {
            if (props.onChange) {
                props.onChange(dateString);
            }
        }
    }
    const dateRangeValue = () => {
        let date = [];
        if (props.value) {
            for (const value of props.value) {
                if (value && value !== "") {
                    date.push(moment(value));
                }
            }
        }
        return date;
    };

    const handleTimeChange = (time, timeString) => {
        let e = { target: { value: timeString } };
        if (props.onChange) {
            props.onChange(e);
        }
    };
    const timeValue = () => {
        let time = null;
        if (
            props.value !== undefined &&
            props.value !== null &&
            props.value !== ""
        ) {
            time = moment(props.value, "HH:mm:ss");
        }
        return time;
    };

    useEffect(() => {
        // console.log("props.disabled",props.disabled);
    }, [props.disabled]);

    const handleNumberChange = e => {
        let number = parseFloat(e.target.value.replace(/^0+/, ""));
        if (props.inputProps !== undefined) {
            //check maxlength
            if (props.inputProps.max !== undefined) {
                number =
                    number >= props.inputProps.max
                        ? props.inputProps.max
                        : number;
            }
        }
        if (isNaN(number)) {
            number = 0;
        }
        let newE = { target: { value: number } };
        if (props.onChange) {
            props.onChange(newE);
        }
    };

    if (props.type === "date") {
        if (formMode === "view" || props.disabled) {
            let text = "";
            if (
                props.value !== undefined &&
                props.value !== null &&
                props.value !== ""
            ) {
                text = moment(props.value).format("YYYY-MM-DD");
            }
            return (
                <Typography className={classes.dateViewMode}>{text}</Typography>
            );
        } else {
            return (
                <DatePicker onChange={handleDateChange} value={dateValue()} />
            );
        }
    } else if (props.type === "daterange") {
        if (formMode === "view" || props.disabled) {
            return <RangePicker format={"YYYY-MM-DD"} disabled />;
        } else {
            return (
                <RangePicker
                    format={"YYYY-MM-DD"}
                    onChange={handleDateRangeChange}
                    value={dateRangeValue()}
                />
            );
        }
    } else if (props.type === "datetime") {
        if (formMode === "view" || props.disabled) {
            let text = "";
            if (
                props.value !== undefined &&
                props.value !== null &&
                props.value !== ""
            ) {
                text = moment.utc(props.value).format("YYYY-MM-DD HH:mm");
                // text = moment
                //     .utc(props.value)
                //     .add(-tz, "minutes")
                //     .format("YYYY-MM-DD HH:mm");
            }
            return (
                <Typography className={classes.dateViewMode}>{text}</Typography>
            );
        } else {
            return (
                <DatePicker
                    showTime
                    onChange={handleDateTimeChange}
                    value={dateTimeValue()}
                />
            );
        }
    } else if (props.type === "time") {
        if (formMode === "view") {
            let text = "";
            if (
                props.value !== undefined &&
                props.value !== null &&
                props.value !== ""
            ) {
                text = moment(props.value, "HH:mm:ss").format("HH:mm");
            }
            return (
                <Typography className={classes.dateViewMode}>{text}</Typography>
            );
        } else {
            return (
                <TimePicker
                    onChange={handleTimeChange}
                    value={timeValue()}
                    format={"HH:mm"}
                />
            );
        }
    } else if (props.type === "number") {
        return (
            <InputBase
                placeholder={" "}
                disabled={formMode === "edit" && props.primaryfield === 1}
                {...props}
                className={classes.root}
                inputProps={{
                    className:
                        props.value === 0 || props.value === null
                            ? classes.inputNumberZero
                            : classes.input,
                    ...props.inputProps
                }}
                value={props.value ? props.value : 0}
                onChange={handleNumberChange}
            />
        );
    } else {
        return (
            <InputBase
                placeholder={" "}
                disabled={
                    props.disabled === undefined
                        ? mode === "view" || mode === "edit_approve"
                        : props.disabled
                }
                {...props}
                className={classes.root}
                inputProps={{
                    className: classes.input,
                    ...props.inputProps
                }}
                value={props.value ? props.value : ""}
            />
        );
    }
}
