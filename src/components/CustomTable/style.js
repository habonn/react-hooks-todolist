import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        width: "100%",
        overflowX: "auto",
        marginTop: theme.spacing(1),
        // maxHeight: "100vh",
        maxHeight: `calc(100vh - 240px)`,
        overflow: "auto",
        borderRadius: 0,
        boxShadow: "none"
    },
    table: {
        minWidth: 650
    },
    panel: {
        // margin: theme.spacing(1),
        backgroundColor: "#fff",
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        margin: theme.spacing(3),
        overflow: "auto"
    },
    tableCell: {
        whiteSpace: "nowrap"
    },
    chip: {
        color: "#fff !important",
        width: "70px",
        height: "26px",
        fontSize: "12px"
    },
    chipActive: {
        backgroundColor: "#53c462 !important",
        boxShadow: "0 2px 4px 0 #53c462"
    },
    chipInactive: {
        backgroundColor: "#939393 !important",
        boxShadow: "0 2px 4px 0 #939393"
    },
    tableRow: {
        "&:hover": {
            backgroundColor: "#e3f2fd"
        }
    },
    progress: {
        margin: theme.spacing(2)
    },
    paginationActionsRoot: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5)
    },
    paginationActionsIconButton:{
        color:"rgba(0, 0, 0, 0.87)"
    },
    rootSearchDialog: {
        width: "100%",
        overflowX: "auto",
        marginTop: theme.spacing(1),
        // maxHeight: "100vh",
        maxHeight: `calc(100vh - 312px)`,
        overflow: "auto",
        borderRadius: 0,
        boxShadow: "none"
    },
    printIcon:{
        marginRight: theme.spacing(1),
        height: theme.spacing(2.5),
        width: "auto"
    },
    printButton:{
        color: "#008af3",
        backgroundColor: "#e4f4ff",
        "&:hover": {
            backgroundColor: "#b3e0ff"
        },
        "&:disabled": {
            backgroundColor: "#fff"
        },
    },
    add: {
        backgroundColor:"black !important"
    }
}));

export { useStyles };
