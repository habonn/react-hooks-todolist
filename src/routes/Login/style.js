import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    form: {
        width: '75%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        backgroundColor: "#4da6ff",
        color: "#ffff"
    },
    h4: {
        textAlign: "left",
        fontWeight: "600"
    },
    text: {
        textAlign: "left",
        marginBottom: "10px"
    },
    forgot: {
        textAlign: "right"
    },
    bannerContainer: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        marginTop: "20px"
    },
    bannerImage: {
        width: "100%",
        padding: "5px"
    },
    inputLabel: {
        fontSize: "16px",
        fontWeight: "500"
    }
}));

export { useStyles };
