import React from "react";
import CloseSvg from "../assets/Close.svg";
import LocationInfo from "./LocationInfo";
import {
  ModalContainer,
  ModalWindow,
  ModalTitle,
  ModalSubtitle,
  ModalDescription,
  ModalCTA,
  ModalXButton,
} from "./Stylesheet";

//construct modal with click events to close both on button clicks + clicking outside modal
function Modal(props) {
  return (
    <ModalContainer onClick={props.hideModalFunction}>
      <ModalWindow onClick={(e) => e.stopPropagation()}>
        <ModalTitle>
          {props.modalData.locationData.name}
          <ModalXButton onClick={props.hideModalFunction}>
            <img src={CloseSvg} alt="close svg" />
          </ModalXButton>
        </ModalTitle>
        <LocationInfo locationData={props.modalData} />
        <ModalSubtitle>Description</ModalSubtitle>
        <ModalDescription>
          {props.modalData.locationData.description}
        </ModalDescription>
        <ModalCTA onClick={props.hideModalFunction}>Done</ModalCTA>
      </ModalWindow>
    </ModalContainer>
  );
}

export default Modal;
