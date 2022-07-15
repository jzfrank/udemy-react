import React from "react";
import { Transition } from "react-transition-group";
import { CSSTransition } from "react-transition-group";

import "./Modal.css";

const animationTiming = {
  enter: 400,
  exit: 1000,
};

const modal = (props) => {
  return (
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      classNames={{
        enter: null,
        enterActive: "ModalOpen",
        exit: null,
        exitActive: "ModalClose",
      }}
      mountOnEnter
      unmountOnExit
    >
      <div className="Modal">
        <h1>A Modal</h1>
        <button className="Button" onClick={props.closed}>
          Dismiss
        </button>
      </div>
      {/* {(state) => {
        const cssClasses = [
          "Modal",
          state === "entering"
            ? "Modalopen"
            : state === "exiting"
            ? "ModalClose"
            : null,
        ];
        return (
          <div className={cssClasses.join(" ")}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
        );
      }} */}
    </CSSTransition>
  );
};

export default modal;
