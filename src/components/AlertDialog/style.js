import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    successtext: {
        color: '#47b552',
        fontSize: '22px'
    },
    checkicon: {
        color: '#47b552',
        fontSize: '100px',
        marginLeft: '245px',
    },
    cursor: {
        cursor: "pointer",
        float: 'right',
        marginTop: '5px',
        width: '40px'
    },
    alertIcon: {
        color: "#fcb855", 
        width: "45px", 
        height: "45px", 
        marginBottom: "-17px", 
        marginRight: "5px"
    }
    
}));

export { useStyles };
