import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    noDataHead: {
        fontSize: "14px",
        fontWeight: "500",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "normal",
        letterSpacing: "normal"
    },
    subNoData: {
        fontSize: "12px",
        fontWeight: "300",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "1.75",
        letterSpacing: "normal",
        color: "#7a7a7a"
    },
    link: {
        fontWeight: "600",
        color: "#3ea7e5"
    }
}));

export { useStyles };
