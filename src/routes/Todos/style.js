import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    rootStepper: {
        background: "white",
        padding: "15px"
    },
    status: {
        width: "10px",
        height: "10px",
        boxShadow: "0 2px 4px 0 #21c4fc",
        backgroundColor: "#21c4fc",
        borderRadius: "50%",
        display: "inline-block"
    },
    drawerHeader: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: "space-between",
        // backgroundColor: "#ebf5ff",
        minHeight: `${theme.spacing(6)}px !important`,
        height: "75px",
        overflow: 'hidden',
      },
    drawerHeaderText: {
            fontSize: "14px",
            color: "#008B8B"
            // marginLeft: theme.spacing(1)
    }

}));

export { useStyles };
