import React from "react";
import "./App.css";
import LoginLayout from "./routes/LoginLayout/LoginLayout";
import Todos from "./routes/Todos/TodosList";
import TodosAdd from "./routes/Todos/TodosAdd";
import { Switch, Route } from "react-router";
import CssBaseline from "@material-ui/core/CssBaseline";
import { SnackbarProvider } from "notistack";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import LoadingOverlay from "react-loading-overlay";
import { WindMillLoading } from 'react-loadingg';

import { useGlobal } from "reactn";

const customTheme = createMuiTheme({
    palette: {
        primary: {
            // light: will be calculated from palette.primary.main
            main: "#008B8B",
            dark: "#008B8B"
            // dark: will be calculated from palette.primary.main,
            // contrastText: will be calculated to contrast with palette.primary.main
        },
        secondary: {
            main: "#008af3"
        }
    },
    typography: {
        // fontFamily: "Prompt",
        fontFamily: "K2D", 
        button: {
            textTransform: "none"
        }
    },
    props: {
        MuiTextField: {
            InputLabelProps: {
                shrink: true
            }
        }
        // MuiCheckbox: {
        //     checkedIcon: <CheckOutlinedIcon />
        // }
    },
    overrides: {
        MuiCardContent: {
            root: {
                padding: "0px",
                "&:last-child": {
                    paddingBottom: "9px"
                }
            }
        },
        MuiToolbar: {
            regular: {
                minHeight: "40px",
                "@media (min-width: 600px)": {
                    // minHeight: '40px',
                }
            },
            gutters: {
                padding: "0",
                "@media (min-width: 600px)": {
                    padding: "0"
                }
            }
        },
        MuiContainer: {
            root: {
                padding: "0",
                "@media (min-width: 600px)": {
                    padding: "0"
                }
            }
        },
        MuiPaper: {
            elevation4: {
                boxShadow: "none"
            }
        },
        MuiTableCell: {
            head: {
                background: "#008B8B",
                fontSize: "16px",
                // textAlign: "center",
                color: "black",
                fontWeight: "600",
                whiteSpace: "nowrap"
            },
            body: {
                // textAlign: "center",
                fontSize: "14px",
                whiteSpace: "nowrap"
            },
            root: {
                paddingLeft: "10px",
                paddingTop: "6px",
                paddingBottom: "6px"
                // padding: "0px 0px 5px 14px"
            },
            stickyHeader: {
                backgroundColor: "#78bebf"
            }
        },
        MuiOutlinedInput: {
            input: {
                padding: "8px 14px"
            }
        },
        MuiFormLabel: {
            root: {
                color: "#535353",
                "&&&&:hover": {
                    color: "#535353"
                },
                "&$focused": {
                    color: "#535353"
                },
                fontSize: "12px",
                textAlign: "left"
            }
        },
        MuiInput: {
            underline: {
                "&&&&:before": {
                    borderBottom: "solid 1px #008af3"
                }
            }
        },
        MuiInputBase: {
            root: {
                color: "#535353"
            },
            input: {
                color: "black",
                padding: "6px",
                fontSize: "16px"
            }
        },
        MuiCheckbox: {
            root: {
                color: "#cccccc"
            },
            colorSecondary: {
                "&&&&.Mui-checked": {
                    // border: "solid 2px #cccccc",
                    // borderRadius: "4px",
                    // width: "20px",
                    // height: "20px"
                }
            }
        },
        MuiIconButton: {
            root: {
                color: "#008af3"
                // padding: "0px"
            }
        },
        //Disable Toolbar
        MUIDataTableToolbar: {
            root: {
                display: "none"
            }
        },
        MuiFormControl: {
            root: {
                width: "100%"
            },
            marginNormal: {
                marginTop: 8
            }
        },
        MuiRadio: {
            root: {
                "&:disabled": {
                    color: "grey !important"
                }
            }
        },
        MuiTypography: {
            body1: {
                fontSize: "14px"
            }
        },
        MuiTableSortLabel: {
            root: {
                color: "white",
                whiteSpace: "nowrap",
                "&:hover": {
                    color: "rgba(235, 245, 255) !important"
                }
            }
        },
        MuiExpansionPanelDetails: {
            root: {
                display: "flow-root"
            }
        },
        MuiTableRow: {
            hover: {
                "&:hover": {
                    backgroundColor: "#ebf5ff !important",
                    cursor: "pointer"
                }
            }
        }
    }
});

export default function App() {
    const [loading] = useGlobal("loading");

    return (
        <div className="App">
            <CssBaseline />
            <ThemeProvider theme={customTheme}>
                <SnackbarProvider
                    maxSnack={3}
                    anchorOrigin={{
                        vertical: "top",
                        horizontal: "right"
                    }}
                    autoHideDuration={3000}
                >
                    <LoadingOverlay
                        active={loading > 0}
                        spinner={<WindMillLoading/>}
                    >
                        <Switch>
                        <Route
                            path="/main/form/:id"
                            component={TodosAdd}
                        />
                        <Route
                            path="/main/form"
                            component={TodosAdd}
                        />
                            <Route path="/main" component={Todos} />
                            <Route path="/" component={LoginLayout} />
                        </Switch>
                    </LoadingOverlay>
                </SnackbarProvider>
            </ThemeProvider>
        </div>
    );
}
