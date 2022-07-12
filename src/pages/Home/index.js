import { useContext, useEffect, useState } from "react";
import { ArrowRight, ArrowLeft } from "@material-ui/icons";
import { Box, Button, Grid, Typography } from "@material-ui/core";

import { useStyles } from "../../styles/styles";
import { AuthContext } from "../../providers/Auth";

import Modal from "../../components/Modal";
import SaleList from "../../components/SaleList";

const Home = () => {
  const {
    auth,
    filterSales,
    updateStatus,
    saleProduction,
    saleCompleted,
    saleCanceled,
  } = useContext(AuthContext);

  const [isShow, setIsShow] = useState(true);

  const classes = useStyles();

  const handleUpdateStatusProduction = (sale_uuid, data) => {
    updateStatus(sale_uuid, data);
  };

  const handleUpdateStatusCompleted = (sale_uuid, data) => {
    updateStatus(sale_uuid, data);
  };

  const [id, setId] = useState();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const UpdateStatusCanceled = (data) => {
    updateStatus(id, data);
  };

  const openAndCloseModal = (id) => {
    setModalIsOpen(!modalIsOpen);
    setId(id);
  };

  useEffect(() => {
    setTimeout(() => {
      filterSales(auth);
    }, 1000);
  }, [auth]);

  return (
    <>
      <Grid item className={classes.gridItemTwo}>
        <Button
          color="primary"
          variant="contained"
          size="medium"
          style={{ width: "120px" }}
          onClick={() => setIsShow(true)}
        >
          Lista
        </Button>
        <Button
          color="primary"
          variant="contained"
          size="medium"
          style={{ width: "120px" }}
          onClick={() => {
            filterSales(auth);
            setIsShow(false);
          }}
        >
          Tabela
        </Button>
      </Grid>

      {isShow ? (
        <SaleList />
      ) : (
        <>
          <Grid item className={classes.gridItemOne}>
            <Box className={classes.boxFour}>
              <Typography variant="body1">
                {" "}
                <strong>Em produção</strong>
              </Typography>
              <Typography variant="body1">
                <strong>Prontos</strong>
              </Typography>
              <Typography variant="body1">
                <strong>Cancelados</strong>
              </Typography>
            </Box>
          </Grid>

          <Grid item className={classes.gridItemThree}>
            <Box>
              {saleProduction.map((saleProduction, index) => (
                <Box
                  key={saleProduction.sale_uuid}
                  className={classes.boxThree}
                  style={
                    index % 2 === 0
                      ? { background: "aliceblue" }
                      : { background: "" }
                  }
                >
                  <Typography
                    variant="body1"
                    className={classes.typographyOne}
                    onClick={() => {
                      openAndCloseModal(saleProduction.sale_uuid);
                    }}
                  >
                    Pedido {index + 1}
                  </Typography>
                  <Typography variant="body1">{saleProduction.name}</Typography>
                  <Box className={classes.iconRight}>
                    <ArrowRight
                      onClick={() => {
                        handleUpdateStatusCompleted(saleProduction.sale_uuid, {
                          status: "Pronto",
                        });
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </Box>

            <Box>
              {saleCompleted.map((saleCompleted, index) => (
                <Box
                  key={saleCompleted.sale_uuid}
                  className={classes.boxThree}
                  style={
                    index % 2 === 0
                      ? { background: "white" }
                      : { background: "aliceblue" }
                  }
                >
                  <Typography
                    variant="body1"
                    className={classes.typographyOne}
                    onClick={() => {
                      openAndCloseModal(saleCompleted.sale_uuid);
                    }}
                  >
                    Pedido {index + 1}
                  </Typography>
                  <Typography variant="body1">{saleCompleted.name}</Typography>
                  <Box className={classes.iconLeft}>
                    <ArrowLeft
                      onClick={() =>
                        handleUpdateStatusProduction(saleCompleted.sale_uuid, {
                          status: "Em produção",
                        })
                      }
                    />
                  </Box>
                </Box>
              ))}
            </Box>

            <Box>
              {saleCanceled.map((saleCanceled, index) => (
                <Box
                  key={saleCanceled.sale_uuid}
                  className={classes.boxThree}
                  style={
                    index % 2 === 0
                      ? { background: "aliceblue" }
                      : { background: "white" }
                  }
                >
                  <Typography
                    variant="body1"
                    className={classes.typographyOne}
                    onClick={() => {
                      openAndCloseModal(saleCanceled.sale_uuid);
                    }}
                  >
                    Pedido {index + 1}
                  </Typography>
                  <Typography variant="body1">{saleCanceled.name}</Typography>
                </Box>
              ))}
            </Box>
          </Grid>

          <Modal
            modalIsOpen={modalIsOpen}
            setIsOpen={setModalIsOpen}
            onRequestClose={openAndCloseModal}
            content={
              <>
                <Typography
                  variant="h5"
                  style={{ color: "darkblue", padding: "20px" }}
                >
                  Voçê deseja cancelar a venda?
                </Typography>
                <Button
                  color="primary"
                  variant="contained"
                  size="medium"
                  onClick={() => {
                    UpdateStatusCanceled({
                      status: "Cancelado",
                    });
                    openAndCloseModal();
                  }}
                >
                  Cancelar Venda
                </Button>
              </>
            }
          />
        </>
      )}
    </>
  );
};

export default Home;
