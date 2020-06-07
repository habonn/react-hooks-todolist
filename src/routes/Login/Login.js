import React, { useState, useEffect } from "react";
import {
    Button,
    TextField,
    Link,
    Grid,
    FormControlLabel,
    Checkbox,
    Box
} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
// import HITSAPI from "../../shared/HITSAPI";
import { Link as RouterLink } from "react-router-dom";
// import Cookie from "js-cookie";
import { useStyles } from "./style";
// import AppDownloadBanner from "./AppDownloadBanner";
import InputAdornment from "@material-ui/core/InputAdornment";
import { VisibilityOutlined, VisibilityOffOutlined } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router";
import Cookie from "js-cookie";
import HITSAPI from "../../shared/HITSAPI";
import { useSnackbar } from "notistack";

export default function Login() {
    const classes = useStyles();
    const hitsAPI = new HITSAPI();
    let history = new useHistory();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const [model, setModel] = useState({
        username: "",
        password: ""
    });
    const [isShowPassword, setIsShowPassword] = useState(false);

    useEffect(() => {

    }, []);

    const handleChange = (name, e) => {
        setModel({ ...model, [name]: e.target.value });
    };

    const handleClick = () => {
        enqueueSnackbar(`Please Contact your Admin`, { 
            variant: 'info',
        });
    }

    const handleClickShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    };

    const jwtDecode = require("jwt-decode");

    const handleSubmit = event => {
        if (model.username !== "" && model.password !== "") {
            event.preventDefault();
            hitsAPI.axios
                .post("/users/auth", model)
                .then(function(response) {
                    Cookie.set("token", response.data.token);
                    // var decoded = jwtDecode(response.data.token);
                    localStorage.clear();
                        history.push(`/main`);
                });
        }

        // //By pass
        // history.push(`/main`);
    };

    return (
        <>
            <form className={classes.form}>
            {/* <form className={classes.form} onSubmit={handleSubmit}> */}
                <Typography component="h6" variant="h6" className={classes.h6}>
                    Welcome!
                </Typography>
                <Typography className={classes.text}>
                    Please enter your username
                </Typography>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    autoComplete="email"
                    label="Username"
                    value={model.username}
                    onChange={e => handleChange("username", e)}
                    InputLabelProps={{
                        className: classes.inputLabel,
                        shrink: true
                    }}
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    type={isShowPassword ? "text" : "password"}
                    autoComplete="current-password"
                    label="Password"
                    id="password"
                    name="password"
                    value={model.password}
                    onChange={e => handleChange("password", e)}
                    InputLabelProps={{
                        className: classes.inputLabel,
                        shrink: true
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                >
                                    {isShowPassword ? (
                                        <VisibilityOffOutlined />
                                    ) : (
                                        <VisibilityOutlined />
                                    )}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
                <Grid container>
                    <Grid item xs className={classes.forgot}>
                        <Link
                            variant="body2"
                            // component={RouterLink}
                            // to={"/ResetPassword"}
                            onClick={handleClick}
                        >
                            Recovery password
                        </Link>
                    </Grid>
                </Grid>
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    // color="#4da6ff"
                    onClick={handleSubmit}
                    className={classes.submit}
                >
                    Sign In
                </Button>
                <br />
                {/* <AppDownloadBanner /> */}
            </form>
        </>
        
    );
}
