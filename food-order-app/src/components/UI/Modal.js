import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModelOverlay = (props) => {
  return (
    <div className={classes.modal}>
      {props.children}
      {/* <Cart onConfirm={props.onConfirm}></Cart> */}
    </div>
  );
};

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModelOverlay>{props.children}</ModelOverlay>,
        // <ModelOverlay onConfirm={props.onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default Modal;
