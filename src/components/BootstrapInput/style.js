import { makeStyles, fade } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        "label + &": {
            marginTop: theme.spacing(2)
        },
        flexGrow: 1,
        "&& .Mui-disabled":{
            backgroundColor: "#F5F5F5"
        }
    },
    inputNumberZero: {
        borderRadius: 4,
        position: "relative",
        // backgroundColor: theme.palette.common.white,
        border: "1px solid #ced4da",
        fontSize: 16,
        width: "100%",
        padding: "8px 10px",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        backgroundColor: "#FFFFFF",
        "&:focus": {
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main
        },
        "&:required": {
            borderLeft: "3px solid red",
            paddingLeft: "8px"
        },
        "&:placeholder-shown": {
            backgroundColor: "#fff"
        },
        "&:disabled": {
            padding: "10px 0px",
            border: "0px solid #ced4da",
            backgroundColor: "#fff"
        }
    },
    input: {
        borderRadius: 4,
        position: "relative",
        // backgroundColor: theme.palette.common.white,
        border: "1px solid #ced4da",
        fontSize: 16,
        width: "100%",
        padding: "8px 10px",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        backgroundColor: "#eff6fd",
        "&:focus": {
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main
        },
        "&:required": {
            borderLeft: "3px solid red",
            paddingLeft: "8px"
        },
        "&:placeholder-shown": {
            backgroundColor: "#fff"
        },
        "&:disabled": {
            padding: "10px 10px",
            border: "0px solid #ced4da",
            backgroundColor: "#fff"
        }
    },
    rootDate: {
        // border: "1px solid #ced4da",
    },
    inputDate: {
        borderRadius: 4,
        // border: "1px solid #ced4da",
        fontSize: 16,
        padding: "8px 10px",
        transition: theme.transitions.create(["border-color", "box-shadow"])
    },
    dateViewMode: {
        fontSize: "16px",
        marginTop: "8px",
        padding: "10px 0px"
    }
}));

export { useStyles };
