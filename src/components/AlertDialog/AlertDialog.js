/* eslint-disable react-hooks/exhaustive-deps */
import React, {
    useState,
    forwardRef,
    useImperativeHandle,
    useMemo
} from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { Dialog, DialogTitle, DialogActions, Button } from "@material-ui/core";
import { useStyles } from "./style";
import ErrorOutlineOutlinedIcon from '@material-ui/icons/ErrorOutlineOutlined';
import Slide from '@material-ui/core/Slide';
import { useHistory } from "react-router";
import HITSAPI from "../../shared/HITSAPI";
import { useSnackbar } from "notistack";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function AlertDialog(props, ref) {
    const classes = useStyles();
    const hitsAPI = new HITSAPI();
    let history = useHistory();
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const [open, setOpen] = React.useState(false);
    const [count, setCount] = React.useState(0);
    const [customTableAction, setCustomTableAction] = useState(false);

    const [uniqueId, setUniqueId] = useState('');
    const [title, setTitle] = useState('');

    const apiPathInit = useMemo(() => {
        return props.apiPath;
    }, []);

    const onDelete = (uniqueId) => {
        const handleOk = async () => {
            await hitsAPI.axios
                .delete(`${apiPathInit}/${uniqueId}`)
                .then(function (response) {
                    enqueueSnackbar("Delete Success", {
                        variant: "success"
                    });
                    // re fecth api
                    props.fecthModel();
                });
            setOpen(false);
        };
        handleOk();
    }


    useImperativeHandle(ref, () => ({
        open: (uniqueId, title) => {
            setOpen(true);
            // console.log("customerere", uniqueId);
            setUniqueId(uniqueId);
            setTitle(title);
        }
    }));

    const handleClose = () => {
        setOpen(false);
        //clear selection list in table
    };

    return (
        <>
            <Dialog
                // fullWidth={true}
                maxWidth={"sm"}
                TransitionComponent={Transition}
                open={open}
                onClose={handleClose}
                disableBackdropClick
                disableEscapeKeyDown
            >
                <DialogTitle id="alert-dialog-title">
                    <ErrorOutlineOutlinedIcon className={classes.alertIcon} />
                    Are you sure delete this {title}?
                </DialogTitle>

                <DialogActions>
                    <Button
                        variant="outlined"
                        // style={{ backgroundColor: "red", color: "white" }}
                        onClick={handleClose} >
                        Cancle
          </Button>
                    <Button
                        variant="contained"
                        style={{ backgroundColor: "red", color: "white" }}
                        onClick={e => onDelete(uniqueId, e)} autoFocus>
                        Delete
          </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default forwardRef(AlertDialog);
