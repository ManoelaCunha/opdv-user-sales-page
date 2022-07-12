import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import GlobalStyles from "./styles/global";

import Header from "./components/Menu";
import Routes from "./routes";

const App = () => {
  return (
    <>
      <ToastContainer
        style={{ fontSize: "16px" }}
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
      <Routes />
      <GlobalStyles />
    </>
  );
};

export default App;
