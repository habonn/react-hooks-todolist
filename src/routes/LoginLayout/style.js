import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    // margin: theme.spacing(18, 12),
    // display: 'flex',
    // flexDirection: 'column',
    // alignItems: 'center'
    marginTop: theme.spacing(9),
    marginBottom: theme.spacing(4),
    marginLeft: "100px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "75% !important"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  drawerHeaderText: {
    fontSize: "14px",
    color: "black"
    // marginLeft: theme.spacing(1)
  },
  drawerHeaderTextSub: {
    fontSize: "20px",
    color: "black"
    // marginLeft: theme.spacing(1)
  },
  drawerHeaderText2: {
    fontSize: "22px",
    color: "black"
    // marginLeft: theme.spacing(1)
  },
  drawerHeaderTextSub2: {
    fontSize: "7px",
    color: "black"
    // marginLeft: theme.spacing(1)
  },
  paperLogo: {
    height: "63px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100% !important",
    backgroundColor: "#BD2744",
    borderRadius: "unset !important"
  },
  actionForm: {
    width: "70%",
    margin: "auto",
    marginTop: "0",
    paddingTop: "20px",
    display: "flex",
    justifyContent: "center"
  },
  slide: {
    height: "100vh",
    width: "100%"
  },
  left: {},
  gridList: {
    width: 500,
    height: 450
  },
  scrollheight: {
    height: "-webkit-fill-available",
    justifyContent: "center"
  },
  rightGrid: {
    height: "100%",
    overflowY: "overlay",
    position: "relative"
  },
  logo: {
    height: "60px",
    width: "180px",
    position: "absolute",
    top: theme.spacing(1),
    left: theme.spacing(1)
  },
  langButton: {
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1)
  },
  h5: {
    color: "#565757",
    fontWeight: "600",
    marginTop: "80px"
  },
  flag: {
    marginRight: theme.spacing(1)
  },
  breakpoint: {
    [theme.breakpoints.down("sm")]: {
      display: 'none',
    },
  }
}));

export { useStyles };
