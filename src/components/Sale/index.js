import { Box, Typography, Grid } from "@material-ui/core";

import { useStyles } from "../../styles/styles";

const Sale = ({ sale, number }) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.gridItemOne}>
      <Box className={classes.boxTwo}>
        <Typography variant="body1" className={classes.typographyOne}>
          {number}
        </Typography>
        <Typography variant="body1">{sale.name}</Typography>
        <Typography
          variant="body1"
          className={classes.typographyTwo}
          style={
            sale.status === "Pronto"
              ? { background: "chartreuse" }
              : sale.status === "Cancelado"
              ? { background: "red" }
              : { background: "yellow" }
          }
        >
          {sale.status}
        </Typography>
      </Box>
    </Grid>
  );
};

export default Sale;
