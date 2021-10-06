import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import "./Modal.css";
import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { TextColor, ButtonBg } from "../../stylevariable";
const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    spanText: {
      [theme.breakpoints.down("xs")]: {
        fontSize: "17px !important",
      },
    },
    Root: {
      "&>.MuiBackdrop-root": {
        backgroundColor: ButtonBg.myBackground + "!important",
        opacity: "0.3 !important",
      },
    },
  })
);
const MyDilog = (props) => {
  const classe = useStyle();
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className={props.class + " " + classe.Root}
      >
        <DialogTitle
          id="alert-dialog-title"
          className={props.headerClass}
          style={{
            borderBottom: "1px solid #80808057",
            color: "black",
            paddingBottom: "0.2rem",
            paddingTop: "0.2rem",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          }}
        >
          <div
            className="TextDarkModal"
            style={{
              justifyContent: "space-between",
              display: "flex",
              alignItems: "center",
              color: TextColor.textColor,
              fontWeight: 700,
            }}
          >
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {props.title}
            <IconButton
              onClick={props.close}
              style={{ color: TextColor.textColor, fontWeight: 800 }}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </DialogTitle>
        {props.suggestion ? (
          <div
            style={{
              borderBottom: "1px solid #80808057",
              paddingTop: "1rem",
              paddingBottom: "1rem",
            }}
          >
            {props.suggestion}
          </div>
        ) : null}

        <DialogContent>{props.children}</DialogContent>
      </Dialog>
    </div>
  );
};
export default MyDilog;
