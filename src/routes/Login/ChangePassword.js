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

const jwtDecode = require("jwt-decode");

export default function ChangePassword() {
    const classes = useStyles();
    const hitsAPI = new HITSAPI();
    let history = new useHistory();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();


    const token = Cookie.get("token");
    let decoded = jwtDecode(token);

    const [model, setModel] = useState({
        password: "",
    });

    const [model2, setModel2] = useState({
        passwordagian: "",
    });

    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowPassword2, setIsShowPassword2] = useState(false);

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // history.push(`/main`);
    // }

    useEffect(() => {
        // const token = Cookie.get("token");
        // if (token != null && token !== "" && token !== "null") {
        //     history.push(`/main`);
        // } else {
        //     setRedirect(false);
        // }

        ////By pass
        // history.push(`/main`);
    }, []);

    const handleChange = (name, e) => {
        setModel({ ...model, [name]: e.target.value });
    };

    const handleChange2 = (name, e) => {
        setModel2({ ...model2, [name]: e.target.value });
    };

    const handleClick = () => {
        enqueueSnackbar(`Please Contact your Admin`, {
            variant: 'info',
        });
    }

    const handleClickShowPassword = () => {
        setIsShowPassword(!isShowPassword);
    };

    const handleClickShowPassword2 = () => {
        setIsShowPassword2(!isShowPassword2);
    };

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     hitsAPI.axios
    //         // .post("/signon/SignOn/authenticate", model)
    //         .post("/users/login", model)
    //         .then(function(response) {
    //             console.log(response);
    //             Cookie.set("token", response.data.token);
    //             localStorage.clear();
    //             const domRecaptcha = document.getElementsByClassName(
    //                 "grecaptcha-badge"
    //             );
    //             for (const element of domRecaptcha) {
    //                 element.style.visibility = "hidden";
    //             }
    //             history.push(`/main`);
    //         });

    //     // //By pass login
    //     // history.push(`/main`);
    // };


    const handleSubmit = event => {
        console.log("uidddd", decoded.uid);
        if (model.password !== "" && model2.passwordagian !== "") {
            if (model.password !== model2.passwordagian) {
                enqueueSnackbar(`Password your not same, please your check`, {
                    variant: 'error',
                });
                localStorage.clear();
            } else {
                event.preventDefault();
                hitsAPI.axios
                    // .post("/signon/SignOn/authenticate", model)
                    .put(`/crud/sys_user/${decoded.uid}`, model)
                    .then(function (response) {
                        // Cookie.set("token", response.data.token);
                        localStorage.clear();
                        history.push(`/`);
                    });
            }

        }

        // //By pass
        // history.push(`/main`);
    };

    return (
        <>
            {/* <GoogleReCaptchaProvider reCaptchaKey="6LfIz7kUAAAAACaMlpJVjLc29h-nE-KwKC1KU5ql"> */}
            <form className={classes.form}>
                <Typography component="h6" variant="h6" className={classes.h6}>
                    Reset!
                </Typography>
                <Typography className={classes.text}>
                    Please enter your new password
                </Typography>
                {/* <TextField
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
                /> */}
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    type={isShowPassword ? "text" : "password"}
                    autoComplete="current-password"
                    label="New Password"
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
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    type={isShowPassword2 ? "text" : "password"}
                    autoComplete="current-password"
                    label="New Password again"
                    id="passwordagin"
                    name="passwordagin"
                    value={model2.passwordagian}
                    onChange={e => handleChange2("passwordagian", e)}
                    InputLabelProps={{
                        className: classes.inputLabel,
                        shrink: true
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword2}
                                >
                                    {isShowPassword2 ? (
                                        <VisibilityOffOutlined />
                                    ) : (
                                            <VisibilityOutlined />
                                        )}
                                </IconButton>
                            </InputAdornment>
                        )
                    }}
                />
                {/* <Grid container>
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
                </Grid> */}
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    // color="#4da6ff"
                    onClick={handleSubmit}
                    className={classes.submit}
                >
                    Save
                </Button>
                <br />
                {/* <AppDownloadBanner /> */}
            </form>
        </>

    );
}
