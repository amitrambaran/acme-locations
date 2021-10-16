//styles for each component on the page, imports made only as needed
import styled from "styled-components";

export const SubHeaderTitle = styled.h4`
  opacity: 30%;
  line-height: 28px;
  margin-top: 19px;
  margin-bottom: 0;
`;

export const HeaderTitle = styled.h1`
  font-size: 22px;
  margin-top: 0;
  opacity: 80%;
`;

export const CardWrapper = styled.main`
  display: flex;
  flex-wrap: wrap;
  padding-left: 35px;
`;

export const EditIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  width: 26px;
  height: 26px;
  float: right;
  background-color: #ffffff;
  border-radius: 50%;
  visibility: hidden;
`;

export const EditIcon = styled.img`
  width: 14px;
  height: 14px;
  opacity: 30%;
`;

export const Card = styled.div`
  width: 340px;
  box-sizing: border-box;
  border: 1px solid rgba(0, 17, 34, 0.1);
  border-radius: 2px;
  margin: 25px 0 0 25px;
  padding: 10px 10px 16px 25px;
  background-color: RGBA(246, 246, 246, 0.2);
  &:hover {
    background-color: RGB(246, 246, 246);
    cursor: pointer;
  }
  &:hover ${EditIconContainer} {
    visibility: visible;
  }
`;

export const CardTitle = styled.h3`
  font-weight: 700;
  font-size: 18px;
  margin: 0;
  color: #001122;
  line-height: 32px;
  opacity: 80%;
  margin-top: 5px;
`;

export const CardList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const CardListItem = styled.li`
  font-weight: 500;
  font-size: 14px;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const CardListIcon = styled.img`
  position: relative;
  top: 2px;
  opacity: 30%;
  width: 14px;
  height: 14px;
`;

export const CardListText = styled.p`
  display: inline-block;
  margin: 0 0 0 8px;
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: RGBA(0, 17, 34, 0.6);
`;

export const ModalWindow = styled.div`
  box-sizing: border-box;
  width: 440px;
  padding-left: 25px;
  padding-right: 25px;
  border-radius: 2px;
  background-color: RGB(255, 255, 255);
`;

export const ModalTitle = styled.h4`
  opacity: 80%;
`;

export const ModalSubtitle = styled.h5`
  font-size: 14px;
  font-weight: 600;
  opacity: 80%;
  margin-bottom: 0;
  line-height: 24px;
`;

export const ModalDescription = styled.p`
  font-size: 14px;
  margin-top: 0;
`;

export const ModalCTA = styled.button`
  width: 64px;
  height: 32px;
  margin-bottom: 10px;
  border: none;
  border-radius: 16px;
  color: RGB(255, 255, 255);
  background-color: RGB(55, 178, 77);
  float: right;
  cursor: pointer;
`;

export const ModalXButton = styled.button`
  float: right;
  background-color: RGB(255, 255, 255);
  border: none;
  padding: 0;
  opacity: 30%;
  cursor: pointer;
`;
