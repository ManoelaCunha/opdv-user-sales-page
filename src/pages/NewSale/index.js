import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useStyles } from "./style";
import {
  Button,
  TextField,
  Paper,
  Typography,
  MenuItem,
  Box,
} from "@material-ui/core";

import { useHistory } from "react-router-dom";
import { useContext } from "react";

import { AuthContext } from "../../providers/Auth";

const NewSale = () => {
  const history = useHistory();
  const classes = useStyles();

  const { createSale } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório!"),
    status: yup.string().required("Selecione um Status!"),
    products: yup.string().required("Produtos obrigatório!"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(formSchema) });

  const handleFormRegister = (data) => {
    const { products } = data;
    data.products = products.replace(",", "").split(" ");

    createSale(data);
    history.push("/");
  };

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.box}>
        <Typography variant="h3" className={classes.title}>
          CADASTRO
        </Typography>
        <form onSubmit={handleSubmit(handleFormRegister)}>
          <Box>
            <TextField
              type="text"
              size="small"
              label="Nome"
              margin="normal"
              variant="standard"
              {...register("name")}
              error={!!errors.name}
              helperText={errors.name?.message}
              className={classes.textfield}
            />
          </Box>
          <Box>
            <TextField
              id="select"
              size="small"
              label="Status"
              variant="outlined"
              {...register("status")}
              error={!!errors.status}
              helperText={errors.status?.message}
              className={classes.textfield}
              select
            >
              <MenuItem value={undefined}>None</MenuItem>
              <MenuItem value={"Em produção"}>Em produção</MenuItem>
              <MenuItem value={"Pronto"}>Pronto</MenuItem>
              <MenuItem value={"Cancelado"}>Cancelado</MenuItem>
            </TextField>
          </Box>

          <Box>
            <TextField
              type="text"
              size="small"
              label="Produtos"
              margin="normal"
              variant="standard"
              {...register("products")}
              error={!!errors.products}
              helperText={errors.products?.message}
              className={classes.textfield}
            />
          </Box>

          <Box>
            <Button
              type="submit"
              size="large"
              color="primary"
              variant="outlined"
              className={classes.button}
            >
              Cadastrar
            </Button>
          </Box>
        </form>
      </Paper>
    </div>
  );
};

export default NewSale;
