import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";

import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState([]);

  const [saleProduction, setSaleProduction] = useState([]);
  const [saleCompleted, setSaleCompleted] = useState([]);
  const [saleCanceled, setSaleCanceled] = useState([]);

  const getSales = () => {
    axios
      .get("http://localhost:8080/sales")
      .then((response) => {
        setAuth(response.data);
      })
      .catch((error) => console.log(error));
  };

  const filterSales = (array) => {
    const filterProduction = array.filter((sale) => {
      return sale.status === "Em produção";
    });
    setSaleProduction([...filterProduction]);

    const filterCompleted = array.filter((sale) => {
      return sale.status === "Pronto";
    });
    setSaleCompleted([...filterCompleted]);

    const filterCanceled = array.filter((sale) => {
      return sale.status === "Cancelado";
    });
    setSaleCanceled([...filterCanceled]);
  };

  const updateStatus = (sale_uuid, data) => {
    axios
      .put(`http://localhost:8080/sales/${sale_uuid}`, data)
      .then((_) => {
        getSales();
        toast.success("Status Atualizado!");
      })
      .catch((error) => console.log(error));
  };

  const createSale = (data) => {
    axios
      .post("http://localhost:8080/sales", data)
      .then((_) => {
        getSales();
        toast.success("Venda cadastrada com sucesso!");
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getSales();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        saleProduction,
        saleCompleted,
        saleCanceled,
        getSales,
        filterSales,
        updateStatus,
        createSale,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
