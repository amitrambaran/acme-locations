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
function Modal({ hideModalFunction, modalData }) {
  return (
    <ModalContainer onClick={hideModalFunction}>
      <ModalWindow onClick={(e) => e.stopPropagation()}>
        <ModalTitle>
          {modalData.locationData.name}
          <ModalXButton onClick={hideModalFunction}>
            <img src={CloseSvg} alt="close svg" />
          </ModalXButton>
        </ModalTitle>
        <LocationInfo locationData={modalData} />
        <ModalSubtitle>Description</ModalSubtitle>
        <ModalDescription>
          {modalData.locationData.description}
        </ModalDescription>
        <ModalCTA onClick={hideModalFunction}>Done</ModalCTA>
      </ModalWindow>
    </ModalContainer>
  );
}

export default Modal;
