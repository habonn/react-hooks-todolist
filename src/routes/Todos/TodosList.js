/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { Grid, Button, Paper, Typography } from "@material-ui/core";
import { useGlobal } from "reactn";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import TableListAnt from "../../components/TableListAnt/TableListAnt";
import { useHistory } from "react-router";
import { useStyles } from "./style";
import { Divider, Modal } from "antd";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import moment from "moment";
// import useMediaQuery from '@material-ui/core/useMediaQuery';
import IconList from "./images/checklist.png"
import useWindowDimensions from "../../components/Resize/ResizeComponent";
import AlertDialog from "../../components/AlertDialog/AlertDialog"


export default function TodosList() {
    const { height, width } = useWindowDimensions();
    // const matches = useMediaQuery(theme => theme.breakpoints.down(1281));
    const classes = useStyles();
    let history = useHistory();

    const deleteDialogRef = useRef();
    const tableRef = useRef();
    const menuAccessCode = "todos";
    const apiPath = "/todos";



    const headerAdd = () => {
        return (
            <span onClick={e => addNew()}>
                <PlaylistAddIcon
                    style={{
                        marginRight: "2px",
                        marginBottom: "-6px"
                    }}

                /> Add
            </span>
        );
    };

    const deleteDialog = (uniqueId, title) => {
        deleteDialogRef.current.open(uniqueId, title);
    };

    const fecthModel = () => {
        tableRef.current.fetchModelsApi("");
    };


    const editUser = (userId, e) => {
        history.push(`/main/form/${userId}`);
    };

    const addNew = () => {
        history.push(`/main/form`);
    };

    const columnsInit = [
        {
            title: headerAdd,
            dataIndex: "add",
            onHeaderCell: column => {
                return {
                    onClick: () => {
                        // console.log("onClick", column);
                        addNew();
                    }
                };
            },
            // sorter: true,
            // render: name => `Edit | Delete`,
            align: "center",
            render: (text, record) => (
                <>
                    <span>
                        <Button
                            variant="outlined"
                            size="small"
                            // color="primary"
                            onClick={e => editUser(record._id, e)}
                            style={{
                                maxWidth: '10px',
                                maxHeight: '20px',
                                minWidth: '35px',
                                minHeight: '30px',
                                color: "rgba(252, 184, 85, 0.89)",
                                border: "1px solid rgba(252, 184, 85, 0.89)"
                            }}
                        >
                            <EditIcon fontSize="small" />
                        </Button>
                    </span>
                    <span>
                        <Divider type="vertical" />
                        <Button
                            variant="outlined" size="small"
                            // color="primary"
                            onClick={e => deleteDialog(record._id, record.title, e)}
                            style={{
                                maxWidth: '10px',
                                maxHeight: '20px',
                                minWidth: '35px',
                                minHeight: '30px',
                                color: "rgba(241, 58, 58, 1)",
                                border: "1px solid rgba(241, 58, 58, 1)"
                            }}
                        >
                            <DeleteIcon fontSize="small" />
                        </Button>
                    </span>
                </>
            ),
            // fixed: "left",
            width: 170,
            className: "header-add"
        },
        {
            title: "Title",
            dataIndex: "title",
            // sorter: true,
            // fixed: "left",
            width: 250
        },
        {
            title: "Description",
            dataIndex: "description",
            // sorter: true,
            width: 200,
            // fixed: matches ? "" : "left",
        },
    ];

    return (
        <>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
            <img src={IconList} alt="godzillaLogin" style={{ width: "100px", marginBottom: "35px" }} />
                <Typography variant="h1"  gutterBottom >
                    TodosList
                </Typography>
            </Grid>
           

            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >

                <AlertDialog ref={deleteDialogRef} apiPath={apiPath} fecthModel={fecthModel} />

                <Paper style={{ width: "1000px", justifyContent: "flex", align: "center" }}>
                    <TableListAnt
                        menuAccessCode={menuAccessCode}
                        // apiPath={apiPath}
                        columnsInit={columnsInit}
                        ref={tableRef}
                        // type={width-100}
                        uniqueId={"_id"}
                    />
                </Paper>

            </Grid>

            <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            >
                <p style={{ marginTop: "30px"}}>
                {moment().format('MMMM Do YYYY, h:mm:ss a')}

                </p>
            </Grid>
        </>

    );
}
