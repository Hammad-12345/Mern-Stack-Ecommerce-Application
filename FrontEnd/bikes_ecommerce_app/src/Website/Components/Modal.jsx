import { Box, Modal } from "@mui/material";
import React from "react";

const Modalcom = ({ Form, stateobject, UpdateModalOpenSearch }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 500,
    bgcolor: "rgb(16, 20, 24)",
    // border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    borderRadius: "6px",
  };
  const handleclose = () => {
    UpdateModalOpenSearch(false);
  };
  return (
    <>
      <Modal
        open={stateobject}
        onClose={handleclose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>{Form}</Box>
      </Modal>
    </>
  );
};

export default Modalcom;
