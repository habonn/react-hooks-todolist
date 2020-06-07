import React, { useState, useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Input } from "antd";
import { Grid, FormControl, FormLabel, Button, FormHelperText } from "@material-ui/core";
import Card from "../../components/Card/Card/Card";
import CardHeader from "../../components/Card/CardHeader/CardHeader";
import CardBody from "../../components/Card/CardBody/CardBody";
import BootstrapInput from "../../components/BootstrapInput/BootstrapInput";
import { useHistory } from "react-router";
import HITSAPI from "../../shared/HITSAPI";
import { useGlobal } from "reactn";
import { useSnackbar } from "notistack";
const { TextArea } = Input;

const styles = {
    cardCategoryWhite: {
        color: "rgba(255,255,255,.62)",
        margin: "0",
        fontSize: "14px",
        marginTop: "0",
        marginBottom: "0"
    },
    cardTitleWhite: {
        color: "#FFFFFF",
        marginTop: "0px",
        minHeight: "auto",
        fontWeight: "300",
        fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
        marginBottom: "3px",
        textDecoration: "none"
    }
};

const useStyles = makeStyles(styles);

export default function TodosAdd(props) {
    const classes = useStyles();
    const hitsAPI = new HITSAPI();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();
    let history = useHistory();

    const [formMode, setFormMode] = useGlobal("formMode");
    const mode = localStorage.getItem("mode");

    const [model, setModel] = useState({
        title: "",
        titleError: "",
        description: "",
        descriptionError: "",
    });

    const handleChange = (name, e) => {
        // if (props.mode === "new") {
        //     props.handleChangeModelUser(name, e.target.value);
        // }
        setModel({ ...model, [name]: e.target.value });

    };

    const validate = () => {
        let isError = false;
        const errors = {
            titleError: "",
            descriptionError: ""
        };

        if (model.title.length === 0 && model.description.length === 0) {
            isError = true;
            errors.titleError = "Please enter your title name";
            errors.descriptionError = "Please enter your description name";
        } else if (model.title.length === 0) {
            isError = true;
            errors.titleError = "Please enter your title name";

        } else if (model.description.length === 0) {
            isError = true;
            errors.descriptionError = "Please enter your description name";

        }

        setModel({
            ...model,
            ...errors
        });

        return isError;
    };

    const onSave = (e) => {
        if (props.mode === "new") {
            const onAdd = async () => {
                await hitsAPI.axios
                    .post(`/todos`, model)
                    .then(function (response) {
                        console.log(response.data);
                        props.handleChangeModelTodo(model);
                        enqueueSnackbar(
                            `Save Success`,
                            {
                                variant: "success"
                            }
                        );
                        // redirect
                        history.push(`/main`);
                    });
            }
            e.preventDefault();
            const err = validate();
            if (!err) {
                // clear form
                setModel({
                    title: "",
                    titleError: "",
                    description: "",
                    descriptionError: "",
                });
                props.handleChangeModelTodo({
                    title: "",
                    description: "",
                });
                onAdd();
            }
        } else {
            const onEdit = async () => {
                await hitsAPI.axios
                    .put(`/todos/${props.userId}`, model)
                    .then(function (response) {
                        console.log(response.data);
                        props.handleChangeModelTodo(model);
                    });
                enqueueSnackbar("Save Success", {
                    variant: "success"
                });
                history.push(`/main`);
            }
            e.preventDefault();
            const err = validate();
            if (!err) {
                // clear form
                setModel({
                    title: "",
                    titleError: "",
                    description: "",
                    descriptionError: "",
                });
                props.handleChangeModelTodo({
                    title: "",
                    description: "",
                });
                onEdit();
            }
        }
    };

    useEffect(() => {
        if (props.model) {
            setModel(props.model);
        }

    }, [props.model]);


    return (
        <>
            {props.mode === 'new' ? (
                <Grid container direction="row"
                    justify="center"
                    alignItems="center">
                    <Grid item xs={12} sm={12} md={8}>
                        <Card>
                            <CardHeader color="success">
                                <h4 className={classes.cardTitleWhite}>Add New Todo</h4>
                                <p className={classes.cardCategoryWhite}>Complete your Todo on Day !!</p>
                            </CardHeader>
                            <CardBody>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={12} md={12}>
                                        <FormControl>
                                            <FormLabel>Title</FormLabel>
                                            <BootstrapInput
                                                value={model.title}
                                                onChange={e => handleChange("title", e)}
                                                type="text"
                                                inputProps={{ maxLength: 100 }}
                                            />
                                            <FormHelperText error={true}>
                                                {model.titleError}
                                            </FormHelperText>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={12}>
                                        <FormControl>
                                            <FormLabel>Description</FormLabel>
                                            <TextArea
                                                autoSize={{ minRows: 4, maxRows: 4 }}
                                                maxLength={180}
                                                style={{ marginTop: "10px" }}
                                                value={model.description}
                                                onChange={e =>
                                                    handleChange("description", e)
                                                }
                                            />
                                            <FormHelperText error={true}>
                                                {model.descriptionError}
                                            </FormHelperText>
                                            
                                        </FormControl>
                                    </Grid>
                                </Grid>

                                <Grid style={{ marginTop: "20px" }}>
                                    <Button
                                        className={classes.btnItem}
                                        variant="contained"
                                        color="primary"
                                        onClick={e => onSave(e)}
                                    >
                                        Save
                                    </Button>

                                </Grid>
                            </CardBody>

                        </Card>
                    </Grid>

                </Grid>

            ) : (
                    <Grid container direction="row"
                        justify="center"
                        alignItems="center">
                        <Grid item xs={12} sm={12} md={8}>
                            <Card>
                                <CardHeader color="warning">
                                    <h4 className={classes.cardTitleWhite}>Edit Todo</h4>
                                    <p className={classes.cardCategoryWhite}>Complete your Todo</p>
                                </CardHeader>
                                <CardBody>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} sm={12} md={12}>
                                            <FormControl>
                                                <FormLabel>Title</FormLabel>
                                                <BootstrapInput
                                                    value={model.title}
                                                    onChange={e => handleChange("title", e)}
                                                    type="text"
                                                    inputProps={{ maxLength: 100 }}
                                                />
                                            </FormControl>
                                            <FormHelperText error={true}>
                                                {model.titleError}
                                            </FormHelperText>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={12}>
                                            <FormControl>
                                                <FormLabel>Description</FormLabel>
                                                <TextArea
                                                    autoSize={{ minRows: 4, maxRows: 4 }}
                                                    maxLength={180}
                                                    style={{ marginTop: "10px" }}
                                                    value={model.description}
                                                    onChange={e =>
                                                        handleChange("description", e)
                                                    }
                                                />
                                                <FormHelperText error={true}>
                                                {model.descriptionError}
                                            </FormHelperText>
                                            </FormControl>
                                        </Grid>
                                    </Grid>

                                    <Grid style={{ marginTop: "20px" }}>
                                        <Button
                                            className={classes.btnItem}
                                            variant="contained"
                                            color="primary"
                                            onClick={e => onSave(e)}
                                        >
                                            Save
                                        </Button>

                                    </Grid>
                                </CardBody>

                            </Card>
                        </Grid>

                    </Grid>

                )
            }

        </>
    );
}
