import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  menu: {
    display: "flex",
    cursor: "pointer",
  },

  gridItemOne: {
    border: "none",
    margin: "2px",

    "@media (min-width:768px)": {
      margin: "2px auto",
      maxWidth: "760px",
      border: "2px solid darkblue",
      borderRadius: "4px",
    },
  },

  gridItemTwo: {
    margin: "0 auto",
    padding: "25px 0px",
    width: "250px",
    display: "flex",
    justifyContent: "space-evenly",
  },

  gridItemThree: {
    border: "none",
    margin: "2px",
    display: "flex",
    justifyContent: "space-between",
    "@media (min-width:768px)": {
      margin: "2px auto",
      maxWidth: "760px",
      border: "2px solid darkblue",
      borderRadius: "4px",
    },
  },

  boxOne: {
    padding: "5px 25px",
    width: "100%",
    color: "white",
    backgroundColor: "darkblue",
    display: "flex",
    justifyContent: "space-between",
    "@media (min-width:768px)": {
      padding: "5px 30px",
    },
  },

  boxTwo: {
    padding: "5px 2px",
    width: "100%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
  },

  boxThree: {
    padding: "5px 2px",
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    position: "relative",
    "@media (min-width:768px)": {
      width: "250px",
    },
  },

  boxFour: {
    padding: "5px",
    width: "100%",
    color: "white",
    backgroundColor: "darkblue",
    display: "flex",
    justifyContent: "space-between",
    "@media (min-width:768px)": {
      padding: "5px 30px",
    },
  },

  iconRight: {
    position: "absolute",
    right: "0",
    cursor: "pointer",
  },

  iconLeft: {
    position: "absolute",
    left: "0",
    cursor: "pointer",
  },

  typographyOne: {
    width: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },

  typographyTwo: {
    width: "110px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: "30px",
    marginTop: "20px",
    color: "darkblue",
    textShadow: "0.5px 0.5px 2px black",
  },
}));
