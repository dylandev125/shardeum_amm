import React from "react";
import Snackbar from "@mui/material/Snackbar";
import AlertTitle from "@mui/material/AlertTitle";
import styled from "styled-components";
import Alert from "@mui/material/Alert";

const Alertitle = styled(AlertTitle)`
  font-size: 18px !important;
  font-weight: 600 !important;
  font-family: "Inter !important";
  font-style: normal !important;
  text-align: left;
`;
const AleText = styled.div`
  font-size: 14px !important;
  font-weight: 400 !important;
  font-family: "Inter";
  font-style: normal !important;
`;

interface SnackbarProps {
  open: boolean;
  message: string;
  title: string;
  severity: "error" | "info" | "success" | "warning";
  handleClose: () => void;
}

const MiniSnackBar = ({
  open,
  message,
  severity,
  title,
  handleClose,
}: SnackbarProps) => {
  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        style={{ top: 80 }}
      >
        <Alert severity={severity}>
          <Alertitle>{title}</Alertitle>
          <AleText>{message}</AleText>
        </Alert>
      </Snackbar>
    </>
  );
};

export default MiniSnackBar;
