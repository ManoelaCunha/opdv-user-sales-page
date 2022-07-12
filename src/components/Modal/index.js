import Modal from "react-modal";

import { Box } from "@material-ui/core";
import { Close } from "@material-ui/icons";

const ModalComponent = ({ modalIsOpen, setIsOpen, content }) => {
  const closeModal = () => {
    setIsOpen(false);
  };

  const modalStyle = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "80%",
      maxWidth: "500px",
      transform: "translate(-50%, -50%)",
      textAlign: "center",
      borderRadius: "15px",
      color: "white",
    },
  };

  return (
    <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={modalStyle}>
      <Box onClick={closeModal}>
        <Close
          style={{
            color: "black",
            cursor: "pointer",
          }}
        />
      </Box>
      <Box>
        <>{content}</>
      </Box>
    </Modal>
  );
};

export default ModalComponent;
