import Sale from "../Sale";

import { useStyles } from "../../styles/styles";
import { AuthContext } from "../../providers/Auth";

import { useContext } from "react";
import { Box, Grid, Typography } from "@material-ui/core";

const SaleList = () => {
  const { auth } = useContext(AuthContext);

  const classes = useStyles();

  return (
    <>
      <Grid item className={classes.gridItemOne}>
        <Box className={classes.boxOne}>
          <Typography variant="body1">
            {" "}
            <strong>Pedido</strong>
          </Typography>
          <Typography variant="body1">
            <strong>Nome</strong>
          </Typography>
          <Typography variant="body1">
            <strong>Status</strong>
          </Typography>
        </Box>
      </Grid>

      {auth.map((sale, index) => (
        <Sale key={sale.sale_uuid} sale={sale} number={index + 1} />
      ))}
    </>
  );
};

export default SaleList;
