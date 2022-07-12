import { AppBar, Box, MenuItem, Toolbar, Typography } from "@material-ui/core";

import { useHistory } from "react-router";
import { useStyles } from "../../styles/styles";

const Header = () => {
  const history = useHistory();
  const classes = useStyles();

  const sendTo = (path) => {
    history.push(path);
  };

  return (
    <AppBar position="static">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <Box className={classes.menu}>
          <Typography variant="h6" onClick={() => sendTo("/")}>
            VENDAS
          </Typography>
        </Box>

        <Box className={classes.menu}>
          <MenuItem onClick={() => sendTo("/new-sale")}>Nova Venda</MenuItem>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
